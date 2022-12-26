import { useCartContext } from '../../context/CartContext'
import './cart.css'


export const CartItem = ({producto}) => {
    const {removeProduct} = useCartContext();
    
    return (
        <div className="cartItem">
            <div className='remove-item-btn-container'>
                <button className='remove-item-btn' onClick={()=>{removeProduct(producto.id)}}>X</button>
            </div>
            <h3>{producto.name}</h3>
            <img src={producto.img} alt="imagen del producto" height={100} width={100}/>
            <p>
                {producto.detalle}
            </p>
            <p>{`Precio: $${producto.precio}`}</p>
            <p>{`Cantidad: ${producto.quantity}`}</p>
            <p>{`Subtotal: $${producto.quantity * producto.precio}`}</p>
        </div>
    )
}