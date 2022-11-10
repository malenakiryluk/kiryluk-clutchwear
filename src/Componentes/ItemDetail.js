import React, { useState, useContext } from "react";
import { Context } from "../Context/CustomContext"
import { ItemCount } from "../Componentes/ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {


  const [isPressed, setIsPressed] = useState (false)
  const { addItem } = useContext(Context)

  const onAdd = (contador) =>{

    addItem(producto, contador)

    setIsPressed(true)
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