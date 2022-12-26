import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { ProductsBrief } from "./ProductsBrief";
import './Checkout.css'



const Checkout = () => {
    const {cart, totalPrice} = useCartContext();
    const [formData, setFormData] = useState([])

    const updateData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            items: cart.map(product=>({id: product.id, price: product.precio, quantity: product.quantity})),
            total: totalPrice(),
            Fecha: new Date()
        }
        )
    }

    const sendOrder = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, formData)
            .then(({id}) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Orden Enviada',
                    text: `Orden Numero: ${id}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    return <div className="checkout-container">
        <div>
            <h1>Checkout</h1>
        </div>
        <form onSubmit={sendOrder}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input className="checkout-form-input" type="text" name="nombre" id="nombre" required onChange={updateData}/>
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input className="checkout-form-input" type="text" name="apellido" id="apellido" required onChange={updateData}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input className="checkout-form-input" type="email" name="email" id="email" required onChange={updateData}/>
            </div>
            <div>
                <label htmlFor="telefono">Telefono:</label>
                <input className="checkout-form-input" type="number" name="telefono" id="email" required onChange={updateData}/>
            </div>
            <div className="checkout-btn-container">
                <button className="checkout-btn" type="submit">Enviar</button>
                <button className="checkout-btn" type="reset">Borrar</button>
            </div>
        </form>
        <div>
            <p className="checkout-total">{`Total: $${totalPrice()}`}</p>
        </div>
        <div className="checkout-product-details">
            {
                cart.map((product)=>{
                    return <ProductsBrief producto={product} />
                })
            }
        </div>

    </div>
}

export default Checkout;