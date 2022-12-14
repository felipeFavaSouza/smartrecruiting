import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div>
            <div>
                <img src={producto.img} width={100} height={100} alt='imagen de productos'/>
                <div>
                    <h3>{producto.name}</h3>
                    <Link to={`/item/${producto.id}`}><button className='detalle__btn'>Ver Detalle</button></Link>
                    <hr />
                    <p>{`Stock Disponible: ${producto.stock}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;