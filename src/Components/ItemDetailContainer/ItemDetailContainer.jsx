import { getDoc, doc, getFirestore} from 'firebase/firestore'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {detalleId} = useParams();


    useEffect(()=>{
        const db = getFirestore();
        const itemRef = doc(db, "item", detalleId);

        getDoc(itemRef).then((result) =>{
            setItem({id:result.id, ...result.data()});
        })

    }, [])

    return (
        <div className="itemDetail__container">
            <ItemDetail producto={item}/>
        </div>
    )
}

export default ItemDetailContainer;