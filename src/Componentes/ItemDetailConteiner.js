import React, { useEffect, useState } from "react";
import  ItemDetail  from "../Componentes/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDeteilConteiner = () => {
  const [producto, setProducto] = useState([]);

  const {productId} = useParams();
    
  useEffect(() => {
    const getProductos = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const data = await res.json();
        setProducto(data);
      } catch {
        console.log("error");
      } 
    };
    getProductos();
  }, [productId]);

  return (
    <>
      <h1>Detalle de producto</h1>
      {<>{ <ItemDetail producto={producto} />}</>}
    </>
  );
};

export default ItemDeteilConteiner;
