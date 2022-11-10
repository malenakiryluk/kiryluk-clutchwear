import React from 'react';
import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";


const Header = () =>{

    const categorias =[
        { nombre: " Remeras ", id: 0, ruta: "/categoria/remeras" },
        { nombre: " Zapatillas ", id: 1, ruta: "/categoria/zapatillas" },
        { nombre: " Shorts ", id: 2, ruta: "/categoria/Shorts" },
      ]
  
      return (
        <header >
         <Link to="/">
          <img src={logo} alt="ClutchWear" />
        </Link>
            <h1 >Clutchwear</h1>
        
          <nav>
            {categorias.map((categoria) => {
              return (
                <NavLink
                  key={categoria.id}
                  to={categoria.ruta}
                >
                  {categoria.nombre}
                </NavLink>
              );
            })}
          </nav>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </header>
      );
    };

export default Header;