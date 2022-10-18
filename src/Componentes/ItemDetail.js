import React from "react";

import { ItemCount } from "../Componentes/ItemCount"

const ItemDetail = ({ producto }) => {

    const onAdd = () =>{
        <h1>agregaste un producto al carrito</h1>
    }

  return (
    <div>
      <img alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <ItemCount stock = {6} initial= {1} onAdd= {onAdd}/>
      <h2>{producto.price}</h2>
    </div>
  );
};

export default ItemDetail;