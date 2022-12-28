import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext); 

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        } else {
            setCart([...cart, {...item, quantity}]); 
        }
        
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; 

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)); 

    const updateStock = (stock, quantity) => {
        const nuevoStock = stock - quantity;
        return nuevoStock; 
    }

    const deleteAll = () => {
        setCart([])
    }


    return <div>
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            deleteAll,
            updateStock,
            cart
        }}>
            {children}
        </CartContext.Provider>
    </div>
}

export default CartProvider; 