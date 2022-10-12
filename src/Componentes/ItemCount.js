import React, { useState } from "react";


export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const handlerClickSuma = () =>{
        if(setContador < stock){
            setContador(contador + 1)
        } 
        else{
            <h1>No hay suficiente stock</h1>
        }
    };

    const handlerClickResta = () =>{
        if(setContador > 1){
           setContador( contador - 1)
        }
        
    };

    const handlerClickAgregarCarrito = ()=>{
        onAdd();
    };

    return (
        <div>
            <button onClick = {handlerClickSuma}>+</button>
            <h1>{contador}</h1>
            <button onClick = {handlerClickResta}>-</button>
            <button onClick = {handlerClickAgregarCarrito}>Agregar al carrito</button>
        </div>
    )
}

