import NavBar from '../../Components/Navbar';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';
const Initial = () =>{
    return(
        <>
            <NavBar/>
            <ItemListContainer producto='Laptop Lenovo' precio='$50000'/>
        </>
    )
}

export default Initial;