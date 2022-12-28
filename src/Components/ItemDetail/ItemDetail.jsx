import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
    const [goToCart, setGoToCart] = useState(false); 

    const {addProduct} = useCartContext(); 

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(producto, quantity);
    }

    const closingButtons = () => {
        if(goToCart){
            return <div className="itemDetail-btns-container">
                <div>
                    <Link className="itemDetail-btn" to={'/cart'}>Ver Carrito 🛒</Link>
                </div>
                <div>
                    <Link className="itemDetail-btn" to={'/'}>Seguir Comprando 🔍</Link>
                </div>
                
            </div>
        }else {
            <ItemCount stock={producto.stock} onAdd={onAdd} />
        }
    }

    return (
        <div className="itemDetail">
            <div>
                <img src={producto.img} width={100} height={100} alt='imagen de productos'/>
                <h3>{producto.name}</h3>
                <p>{producto.detalle}</p>
                <p>${producto.precio}</p>
                <p>Stock: {producto.stock}</p>
                {
                    goToCart ? closingButtons() : <ItemCount stock={producto.stock} onAdd={onAdd} />
                }
               
            </div>
        </div>
    )
}

export default ItemDetail;