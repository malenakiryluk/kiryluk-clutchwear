import React, { useEffect , useState } from "react";
import { ItemCount } from "./ItemCount"
import "./ItemListConteiner.css"
import { ItemList} from "./ItemList"

const productos = [
    {titulo: "zapatilla jordan 1 low, travis scot", id:0, categoria: "zapatilla", precio: "$40.000"},
    {titulo: "zapatilla kyrie 5 bob esponja", id:1, categoria: "zapatilla", precio: "$50.000"},
    {titulo: "camiseta campazzo seleccion argentina", id:2, categoria: "camiseta", precio: "$15.000"},
    {titulo: "camiseta toronto raptors retro", id:3, categoria: "camiseta", precio: "$20.000"},
]

const obtenerProductos = new Promise ((resolve, reject)=>{
    setTimeout(() =>{
        resolve(productos)
    }, 2000)
});

const ItemListConteiner = (props) =>{

    const [productos, setProductos] = useState([]);

    useEffect (() =>{
        obtenerProductos
        .then((data)=>{
            setProductos(data);
        })
        .catch((error)=>{
            console.log("salio mal");
            console.log(error);
        })
    },[])

    const onAdd = () =>{
       <h1>agregaste un producto al carrito</h1>
    }

    return (
    <main>
        <h1>{props.greeting}</h1>
        <ItemList productos = {productos}/>
        <ItemCount stock = {6} initial= {1} onAdd= {onAdd}/>
    </main>
    )
};

export default ItemListConteiner;