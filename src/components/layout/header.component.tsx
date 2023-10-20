import mealsImage from "../../assets/meals.jpg";
import HeaderCart from "./header-cart.component";
import "./header.style.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCart />
      </header>
      <div className="main-img">
        <img src={mealsImage} alt="A table full of delicious foods!!" />
      </div>
    </>
  );
}
