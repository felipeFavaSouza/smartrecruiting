import { CartIcon } from "../icons/CartIcon";
import { useCartContext } from "../../context/CartContext";
import React from 'react'
import './cartWidget.css'

const CartWidget = () => {
    const {totalProducts} = useCartContext();
  
    return (
        <div className="cart-widget">
            <span className="cart-span">{totalProducts() || 0}</span>
            <CartIcon/>
        </div>
    );
}

export default CartWidget;