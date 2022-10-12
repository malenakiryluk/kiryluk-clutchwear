import React from "react";
import "./App.css";
import Header from "./Componentes/Header/NavBar";
import ItemListConteiner from "./Componentes/ItemaListaConteiner"


const App = () => {
  const mensaje = "bienbenidos a clutchWear :)"
  return(
    <>
    <Header/>
    <ItemListConteiner greeting = {mensaje}/>
    </>

  );
};

export default App;
