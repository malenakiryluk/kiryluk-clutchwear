import React, { useEffect , useState } from "react";
import "./ItemListConteiner.css"
import { ItemList} from "./ItemList"
import { useParams } from "react-router-dom";


const ItemListConteiner = (props) =>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
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
      finally{
        (setLoading(false))
      }
    };
    getProductos();

  }, [id, URL_BASE, URL_CAT])

    

    return (
        <main>
            <h1>{props.greeting}</h1>
            {
              loading ? <h1>Aguarde un minuto...</h1> : <ItemList productos = {productos}/>
            }
            
        </main>
    )
};

export default ItemListConteiner;