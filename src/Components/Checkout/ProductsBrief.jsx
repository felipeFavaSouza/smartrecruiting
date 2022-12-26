import './Checkout.css'

export const ProductsBrief = ({producto}) => {
    return (
        <div className="products-brief-container">
            <div>
                <img src={producto.img} alt="imagen del producto" height={50} width={50}/>
            </div>
            <div>
                <p>{producto.name}</p>
                <p>{`Precio: $${producto.precio}`}</p>
                <p>{`Cantidad: ${producto.quantity}`}</p>
                <p>{`Subtotal: $${producto.quantity * producto.precio}`}</p>
            </div>
        </div>
    )
}