import React from 'react';
import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";


const Header = () =>{

    const categorias =[
        { nombre: " Electronics ", id: 0, ruta: "/categoria/electronics" },
        { nombre: " Jewelery ", id: 1, ruta: "/categoria/jewelery" },
        { nombre: " Men's clothing ", id: 2, ruta: "/categoria/men's clothing" },
        { nombre: " Women's clothing ", id: 3, ruta: "/categoria/women's clothing" },
      ]
  
      return (
        <header >
         <Link to="/">
          <img src={logo} alt="BookSTore" />
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