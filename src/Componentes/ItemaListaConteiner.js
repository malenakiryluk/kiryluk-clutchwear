import React, { useEffect , useState } from "react";
import "./ItemListConteiner.css"
import { ItemList} from "./ItemList"
import { useParams } from "react-router-dom";


const ItemListConteiner = (props) =>{

    const [productos, setProductos] = useState([]);

    const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products?limit=30'
  const URL_CAT = `${URL_BASE}/category/${id} `

  useEffect(() => {
    const getProductos = async () => {
      try {
        const res = await fetch(id ? URL_BASE : URL_CAT);
        const data = await res.json();
        setProductos(data);
      } catch {
        console.log("error");
      } 
    };
    getProductos();

  }, [id, URL_BASE, URL_CAT])

    

    return (
        <main>
            <h1>{props.greeting}</h1>

            <ItemList productos = {productos}/>}
        </main>
    )
};

export default ItemListConteiner;