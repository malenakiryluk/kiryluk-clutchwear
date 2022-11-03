import React from "react";

import { ItemCount } from "../Componentes/ItemCount"

const ItemDetail = ({ producto }) => {


  const onAdd = () =>{
    console.log("agregaste al carrito")
  }

  return (
    <div>
      <img alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}</h2>
      <ItemCount stock = {6} initial= {1} onAdd= {onAdd}/>
    </div>
  );
};

export default ItemDetail;