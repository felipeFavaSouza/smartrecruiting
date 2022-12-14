import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../mock";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(productos);
    const {id} = useParams();

    const FilterCategory = new Promise((resolve, reject)=>{
        
        if(id){
            setTimeout(()=>{
                const newProducto = productos.filter((p)=> p.id == id)
                resolve(newProducto);
            },1000)
        } else {
            resolve(productos);
        }

    })

    useEffect(()=>{
        FilterCategory.then((response)=>{
            setItem(response)
        })
    },[id])

    return (
        <div className="itemDetail__container">
        {
            item.map((producto)=>{
                return <ItemDetail producto={producto}/>
            })
        }
    </div>
    )
}

export default ItemDetailContainer;