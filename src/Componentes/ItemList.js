import React from "react";
import { Item } from "./Item";

export const ItemList = ({productos}) =>{

    console.log(productos)

    return (
        productos.map((producto)=>{
           return <Item titulo = {producto.titulo} precio = {producto.precio} key = {producto.id}/>
            
        })
    )


}