import { productos } from "../../mock";
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
    return (
        <div className="products-container">
            {
                productos.map((producto)=>{
                    return(
                        <div>
                            <img src={producto.img} width={100} height={100}/>
                            <div>
                                <h3>{producto.name}</h3>
                                <p>{producto.category}</p>
                            </div>
                            <ItemCount stock={producto.stock} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemListContainer;