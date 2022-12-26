import { getDocs, getFirestore, collection} from 'firebase/firestore'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import Item from "../Item/Item";

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const [itemcopy, setItemCopy] = useState(item)
    const {id} = useParams();

    const filterCategory = ()=>{
        
        if(id && itemcopy){
            const newProducto = itemcopy.filter((p)=> p.category == id)
            return newProducto;
        } else {
            return itemcopy;
        }

    }

    useEffect(()=>{
        const filtro = filterCategory();
        setItem(filtro);
    },[id])

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db, "item");

        getDocs(itemCollection).then((result) =>{

            setItem(result.docs.map((doc)=>({id:doc.id, ...doc.data()})))
            setItemCopy(result.docs.map((doc)=>({id:doc.id, ...doc.data()})))
    
        })
    }, [])

    return (
        <div className="products-container">
            {
                item.map((producto)=>{
                    return <Item key={producto.id} producto={producto}/>
                })
            }
        </div>
    )
}

export default ItemListContainer;