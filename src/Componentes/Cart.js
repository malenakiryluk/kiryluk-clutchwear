import React, { useContext } from "react"
import { Context } from "../Context/CustomContext"
import { Link } from "react-router-dom"

export const Cart = () => {

  const { cart } = useContext(Context)

  if(cart.length === 0){
    return <h1>No agregaste nada, puedes ir <Link to ="/">AQUI</Link> </h1>
  }

    return (
      <>
        {cart.length === 0 ? (
          <h1>No agregaste nada, puedes ir <Link to ="/">AQUI</Link> </h1>
        ): ( 
          <>
            {cart.map((producto)=>{

            <h1 key = {producto.id}>{producto.title}{producto.price}</h1>

            })}
          </>
        )
          
        }
      </>
    )
  }