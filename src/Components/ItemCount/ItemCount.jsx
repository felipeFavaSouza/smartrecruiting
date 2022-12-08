import './ItemCount.css'
import { useState } from 'react'

function ItemCount(props) {
    const [count, setCount] = useState(1);
  
    return (
      <div className="container">
        <div className="counter">
          <div className="counter-inner-container">
            <button
              className="counter-btn"
              onClick={() =>
                count < props.stock ? setCount(count + 1) : setCount(count)
              }
            >
              +
            </button>
            <span className="countNum">{count}</span>
            <button
              className="counter-btn"
              onClick={() => (count > 1 ? setCount(count - 1) : setCount(count))}
            >
              -
            </button>
          </div>
          <button className="agregar-carrito">Agregar al Carrito</button>
        </div>
      </div>
    );
  }
  
  export default ItemCount;
  