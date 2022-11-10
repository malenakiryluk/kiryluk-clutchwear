import React, { createContext, useState} from "react"

export const Context = createContext()


export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);

    const addItem = (item, cantidaad) =>{

    }

    const deleteItem = (id)=>{

        setCart(cart.filter ( item => item.id !== id));

    }

    const isInCart = (id)=> cart.some (item => item.id === id);

    const clear = ()=>{
        setCart([]);
        setQty(0);
    }


return <Context.Provider value = {{cart, addItem, deleteItem, qty, isInCart}}>{children}</Context.Provider>

}