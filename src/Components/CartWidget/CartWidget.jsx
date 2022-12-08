import { Cart } from "../icons/Cart";
import './cartWidget.css'

const CartWidget = () => {
    let cartItemNumber = 0;
    return (
        <div className="cart-widget">
            <span className="cart-span">{cartItemNumber}</span>
            <Cart/>
        </div>
    );
}

export default CartWidget;