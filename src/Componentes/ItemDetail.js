import React, { useState } from "react";

import { ItemCount } from "../Componentes/ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {


  const [isPressed, setIsPressed] = useState (false)

  const onAdd = (contador) =>{
    setIsPressed(true)
    console.log("agregaste al carrito")
  }

  return (
    <div>
      <img alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}</h2>
      
      {!isPressed ? (
          <ItemCount stock = {6} initial= {1} onAdd= {onAdd}/>
        ) : (
          <Link to="/cart">

            <button>Finalizar compra</button>
          
          </Link>
        )}
    </div>
  );
};

export default ItemDetail;