import React, { useEffect , useState } from "react";
import { ItemCount } from "./ItemCount"
import "./ItemListConteiner.css"
import { ItemList} from "./ItemList"
import { useParams } from "react-router-dom";


const ItemListConteiner = (props) =>{

    const [productos, setProductos] = useState([]);

    const { productId } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products?limit=30'
  const URL_CAT = `${URL_BASE}/category/${productId} `

  useEffect(() => {
    const getProductos = async () => {
      try {
        const res = await fetch(URL_CAT);
        const data = await res.json();
        setProductos(data);
      } catch {
        console.log("error");
      } 
    };
    getProductos();

  }, [])

    

    return (
        <main>
            <h1>{props.greeting}</h1>

            <ItemList productos = {productos}/>}
        </main>
    )
};

export default ItemListConteiner;