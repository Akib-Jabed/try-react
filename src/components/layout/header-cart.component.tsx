import CartIcon from "../Cart/cart-icon.component";
import "./header-cart.style.css";

export default function HeaderCart() {
  return (
    <button className="cart-btn">
      <span className="cart-icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="cart-badge">3</span>
    </button>
  );
}
