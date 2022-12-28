import { collection, doc, serverTimestamp, writeBatch, getDocs, setDoc, query, where, documentId } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCartContext } from "../../context/CartContext";
import { ProductsBrief } from "./ProductsBrief";
import './Checkout.css'
import { CartForm } from "../CartForm.jsx/CartForm";

const MySwal = withReactContent(Swal)

const Checkout = () => {
    const {cart, totalPrice, deleteAll} = useCartContext();
    const goTo = useNavigate();


    const handleBuy = async () => {
        try {
          const data = await showCartForm();
          sendOrder(data);
        } catch (er) {
          console.error(er);
        Swal.fire({
            title: "Oops...",
            text: `Ha ocurrido un error, por favor, recarga la página y vuelve a intentarlo.`,
            icon: "error",
            showConfirmButton: false,
          });
        } finally {
            Swal.fire({
            title: "Generando orden...",
            icon: "info",
            footer: "¡No te vayas!",
            showConfirmButton: false,
          });
        }
    };

    const showCartForm = () => {
        return new Promise((resolve) => {
          MySwal.fire({
            title: "Datos para la compra",
            icon: "question",
            html: (<CartForm onSubmit={(data) => {resolve(data)}}/>),
            showConfirmButton: false,
          });
        });
    };
    

    const sendOrder = async (data) => {
        try {
            
            const itemsDb = cart.map((item) => ({
                id: item.id,
                name: item.name,
                precio: item.precio,
                quantity: item.quantity,
                img: item.img
            })); 

            const order = {
                buyer: data,
                items: itemsDb,
                total: totalPrice(),
                Fecha: serverTimestamp()
            };

            const batch = writeBatch(db); 

            const cartProductsIds = cart.map((prod) => prod.id);

            const productsRef = query(
                collection(db, 'item'),
                where(documentId(), "in", cartProductsIds)
            );
            const cartProductsDB = await getDocs(productsRef);
            const {docs} = cartProductsDB;

            const outOfStock = [];

            docs.forEach((prodDb) => {
                const productData = prodDb.data();
                const stockDb = productData.stock;

                const productInCart = cart.find((prodCart) => prodCart.id === prodDb.id);
                const prodQty = productInCart?.quantity;

                if(stockDb >= prodQty) {
                    batch.update(prodDb.ref, {stock: stockDb - prodQty}); 
                } else{
                    outOfStock.push({id: prodDb.id, ...productData}); 
                }
            }); 

            if (outOfStock.length === 0){
                await batch.commit();
                const ordersCollectionRef = doc(collection(db, 'orders'));
                await setDoc(ordersCollectionRef, order)
                deleteAll();
                if (ordersCollectionRef.id) afterBuy(ordersCollectionRef.id);
            } else {
                MySwal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ups!',
                    text: 'Nos quedamos sin stock!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.error(error);
        }
        // const db = getFirestore();
        // const ordersCollection = collection(db, 'orders');

        // addDoc(ordersCollection, formData)
    }
    const afterBuy = (orderId) => {
        MySwal.fire({
          title: "¡Compra exitosa!",
          text: `Número de órden: ${orderId}`,
          icon: "success",
          footer: "A continuación serás dirigido al detalle de la orden.",
          showConfirmButton: false,
        });

        setTimeout(() => {
            Swal.close();
            goTo(`/order/${orderId}`);
          }, 5000);
    };

return <div className="checkout-container">
        <div>
            <h1>Checkout</h1>
        </div>
        {/* <form onSubmit={execSendOrder}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input className="checkout-form-input" type="text" name="nombre" id="nombre" required onChange={updateFormData}/>
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input className="checkout-form-input" type="text" name="apellido" id="apellido" required onChange={updateFormData}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input className="checkout-form-input" type="email" name="email" id="email" required onChange={updateFormData}/>
            </div>
            <div>
                <label htmlFor="telefono">Telefono:</label>
                <input className="checkout-form-input" type="number" name="telefono" id="email" required onChange={updateFormData}/>
            </div>
            <div className="checkout-btn-container">
                <button className="checkout-btn" type="submit">Enviar</button>
                <button className="checkout-btn" type="reset">Borrar</button>
            </div>
        </form> */}
        <button onClick={handleBuy}>Confirmar Orden</button>
        <div>
            <p className="checkout-total">{`Total: $${totalPrice()}`}</p>
        </div>
        <h3>Productos Selecionados:</h3>
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