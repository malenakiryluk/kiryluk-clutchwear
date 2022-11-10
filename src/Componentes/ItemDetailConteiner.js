import React, { useEffect, useState } from "react";
import  ItemDetail  from "../Componentes/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc} from "firebase/firestore"
import { db } from "../firebase/firebase"

export const ItemDeteilConteiner = () => {
  const [producto, setProducto] = useState([]);

  const {id} = useParams();
    
  useEffect(() => {

    const productCollection = collection(db, "products")
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
    .then((result)=>{

      setProducto({
        id: result.id,
        ...result.data()
      })

    })
    .catch(console.log("error"))

   /* const getProductos = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/"+ id)
        const data = await res.json();
        setProducto(data);
      } catch {
        console.log("error");
      } 
    };
    getProductos();*/
  }, [id]);

  return (
    <>
      <h1>Detalle de producto</h1>
      {<>{ <ItemDetail producto={producto} />}</>}
    </>
  );
};

export default ItemDeteilConteiner;
