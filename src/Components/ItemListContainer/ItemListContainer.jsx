
const ItemListContainer = (props) => {
    return (
        <div>
            <h2>{props.producto}</h2>
            <p>{props.precio}</p>
        </div>
    )
}

export default ItemListContainer;