import React, { useState } from "react";


export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const handlerClickSuma = () =>{
        if(contador < stock){
            setContador(contador + 1)
            console.log("sumaste un producto")
        } 
        else{
            <h1>No hay suficiente stock</h1>
        }
    };

    const handlerClickResta = () =>{
        if(contador > 1){
           setContador( contador - 1)
        }
        
    };


    return (
        <div>
            <button onClick = {handlerClickSuma}>+</button>
            <h1>{contador}</h1>
            <button onClick = {handlerClickResta}>-</button>
            <button onClick = {()=> onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}

