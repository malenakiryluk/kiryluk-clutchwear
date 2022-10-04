import React from 'react';
import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "./CartWidget";


const Header = () =>{

    const categorias = [
        {nombre : "remeras", id : 1, ruta: "#"},
        {nombre : "zapatillas", id : 2, ruta: "#"},
        {nombre : "pantalones", id : 3, ruta: "#"},
        {nombre : "protecciones", id : 4, ruta: "#"}

    ]

   return <header>
        <img src= {logo} alt="logo"/>
        <h1>ClutchWear</h1>
        <nav>
            {
                categorias.map((categorias)=>{
                    return <a  key={categorias.id} href={categorias.ruta}>{categorias.nombre}</a>
                })
            }
        </nav>
        <CartWidget/>
    </header>
}

export default Header;