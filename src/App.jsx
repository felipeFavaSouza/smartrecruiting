import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto/Contacto";
import {categorias, menus} from './mock'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

const App = () => {

    return (
        <BrowserRouter>
            <NavBar menus={menus} categorias={categorias} />
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/category/:id" element={<ItemListContainer/>}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route exact path="/contacto" element={<Contacto/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;