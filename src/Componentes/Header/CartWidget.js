import React, { useContext }from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../../Context/CustomContext"


const CartWidget = () =>{

    const { qty } = useContext(Context);

    return <> 
        <p>{qty}</p>
        <ShoppingCartIcon fontSize="large"/>
    </>
};

export default CartWidget;