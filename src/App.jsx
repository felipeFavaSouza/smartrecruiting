import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import React from "react";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./context/CartContext";
import Checkout from "./Components/Checkout/Checkout";

const menus = [{
    name:'Home',
    href:'/'
}
]

const App = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
        const db = getFirestore();
        const categoryCollection = collection(db, 'categorias'); 

        getDocs(categoryCollection).then((result) => {
            setCategorias(result.docs.map((doc)=>({id: doc.id,...doc.data()})))
        })

    },[])

    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar menus={menus} categorias={categorias} />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer/>}/>
                    <Route exact path="/category/:id" element={<ItemListContainer/>}/>
                    <Route exact path="/item/:detalleId" element={<ItemDetailContainer/>}/>
                    <Route exact path="/cart" element={<Cart/>}/>
                    <Route exact path="/checkout" element={<Checkout/>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App;