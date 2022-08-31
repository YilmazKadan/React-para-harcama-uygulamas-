import { useState, useEffect } from "react"
import './App.css';
import Header from './Components/Header';
import Product from "./Components/Product";
import products from './products.json';

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  useEffect( () => {
    console.log(basket)
  }, [basket])
  return (
    <>
      <Header money={money} />
      {
        products.map(product => (
          <Product basket={basket} setBasket={setBasket} key={product.id} product={product} />
        ))
      }
    </>
  );
}

export default App;
