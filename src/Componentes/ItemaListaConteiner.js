import React, { useEffect , useState } from "react";
import "./ItemListConteiner.css"
import { ItemList} from "./ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../firebase/firebase"


const ItemListConteiner = (props) =>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

  const productCollection = collection(db, "productos")
  const q = id ? query(productCollection, where('category', '==', id )) : productCollection;

  useEffect(() => {
    
    getDocs(q)
    .then((result)=>{
      const listProducts = result.docs.map(item=>{
        return {
          ...item.data(),
          id: item.id
        }
      })
      setProductos(listProducts)
    })
    .catch ((error)=>{
      console.log("error");
    
    }) 
    .finally(setLoading(false))

  }, [id]);


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