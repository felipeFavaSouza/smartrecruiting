import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseconfig";
import './OrderStatus.css'


export const OrderStatus = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    const order = doc(db, "orders", orderId);

    getDoc(order)
      .then((response) => {
        const data = response.data();
        setOrderData(data);
      })
  }, [orderId]);

  return (
    <div className="orderStatus-container">
        {orderData === undefined ? (
        <div>
             <h1>La Orden que buscas no Existe</h1>
             <Link to={'/'}>Volver a la tienda</Link>
        </div>

        ) : (
            <div>
                <div>
                    <h1>Orden: {orderId}</h1>
                    <h2>Estamos procesando el envio!</h2>
                </div>
                <div>
                    <p>Cliente: {orderData.buyer.firstName} {orderData.buyer.lastName}</p>
                    <p>Email: {orderData.buyer.email}</p>
                    <p>Tel: {orderData.buyer.phone}</p>
                    <p></p>
                </div>
                <div className="orderStatus-products-container">
                    {
                        orderData.items.map((item) => (
                        <div className="orderStatus-products" key={item.id}>
                            <img src={item.img} alt="imagen del producto" width={50} height={50}/>
                            <p>{item.name}</p>
                            <p>${item.precio} / {item.quantity} Un.</p>
                        </div>
                        ))
                    }
                </div>
                <div>
                    <p className="orderStatus-total">
                        Total: {orderData.total}
                    </p>
                </div>
            </div>
        )}
    </div>
  )

}