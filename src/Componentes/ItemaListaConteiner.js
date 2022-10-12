import React from "react";
import { ItemCount } from "./ItemCount"


const ItemListConteiner = (props) =>{

    const onAdd = () =>{
       console.log("agregaste un producto al carrito")
    }

    return (
    <>
    <main>
        <h1>{props.greeting}</h1>
    </main>
    <ItemCount stock = {6} initial= {1} onAdd= {onAdd}/>
    </>)
};

export default ItemListConteiner;