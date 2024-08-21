import './App.css';
import { pizzas } from './data';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />     
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>It's Pizza Time</h1>
    </header>
  )
}

function Menu() {
  const pizzaCount = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      { pizzaCount > 0 ? (
        <>
          <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map(pizza => (
              <Pizza pizza={pizza} key={pizza.name}/>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  )
}

function Pizza({pizza}) {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photo} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
      </div>
      <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>We are close now. Please come visit us between {openHour}:00 to {closeHour}:00</p>
      )}
    </footer>
  )
}

function Order({openHour, closeHour}) {
  return (
    <div className="order">
      <p>We're open now. You can order online from {openHour}:00 to {closeHour}:00.</p>
      <button className='btn'>Order</button>
    </div>
  )
}

export default App;
