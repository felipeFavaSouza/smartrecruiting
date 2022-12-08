import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto/Contacto";
import Sobre from "./pages/Sobre/Sobre";
import Laptops from "./pages/Laptops/Laptops";
import Swag from "./pages/Swag/Swag";
import Merchandising from "./pages/Merchandising/Merchandising";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/contacto" element={<Contacto/>}/>
                <Route exact path="/sobre" element={<Sobre/>}/>
                <Route exact path="/productos/1" element={<Laptops/>}/>
                <Route exact path="/productos/2" element={<Swag/>}/>
                <Route exact path="/productos/3" element={<Merchandising/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;