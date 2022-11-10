import React from "react";
import "./App.css";
import Header from "./Componentes/Header/NavBar";
import ItemListConteiner from "./Componentes/ItemaListaConteiner"
import { Cart } from "./Componentes/Cart"
import ItemDetailConteiner from "../src/Componentes/ItemDetailConteiner"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomContext"


const App = () => {
  const mensaje = "bienbenidos a clutchWear :)"
  return(
    <>
      <BrowserRouter>
      <CustomProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<ItemListConteiner greeting={mensaje} />}/>
            <Route path="/categoria/:id" element={<ItemListConteiner greeting={mensaje} />}/>
            <Route path="/producto/:id" element={<ItemDetailConteiner />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<ItemListConteiner />}/>
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>

  );
};

export default App;
