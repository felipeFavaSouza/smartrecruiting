import { Cart } from "../icons/Cart";
import './cartWidget.css'

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <span className="cart-span">2</span>
            <Cart/>
        </div>
    );
}

export default CartWidget;