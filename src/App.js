import { useState, useEffect } from "react"
import './App.css';
import Header from './Components/Header';
import Product from "./Components/Product";
import products from './products.json';
import Basket from './Components/Basket';

function App() {
  const [money, setMoney] = useState(2000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    // Burada reduce fonksiyonu ile birlikte "acc" metodun bir önceki return ettiği değeri ifade eder.
    const toplam = basket.reduce((acc, item) => {
      return acc + (products.find(product => product.id == item.id).price * item.amount)
    }, 0)

    setTotal(toplam)
  }, [basket])

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {
          products.map(product => (
            <Product total={total} money={money} basket={basket} setBasket={setBasket} key={product.id} product={product} />
          ))
        }
      </div>
      {total > 0 && (
        <Basket basket={basket} resetBasket={resetBasket} products={products} total={total} />
      )}


    </>
  );
}

export default App;
