import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({producto}) => {
    return (
        <div>
            <div>
                <img src={producto.img} width={100} height={100} alt='imagen de productos'/>
                <h3>{producto.name}</h3>
                <p>{producto.detalle}</p>
                <p>${producto.precio}</p>
                <p>Stock: {producto.stock}</p>
                <ItemCount stock={producto.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;