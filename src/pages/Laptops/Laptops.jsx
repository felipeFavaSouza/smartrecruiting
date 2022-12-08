import { productos } from "../../mock";
import '../../Components/ItemListContainer/ItemListContainer.css'
import ItemCount from "../../Components/ItemCount/ItemCount";

const Laptops = ()=>{
    return <div className="products-container">
        {productos.map((producto)=>{
            if(producto.category === 1){
                return (
                    <div>
                        <img src={producto.img} width={100} height={100}/>
                        <div>
                            <h3>{producto.name}</h3>
                            <p>{producto.category}</p>
                        </div>
                        <ItemCount stock={producto.stock} />
                    </div>
                )
            }
        })}
    </div>
}

export default Laptops;