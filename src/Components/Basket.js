import { usetState } from 'react'
import BasketItem from './BasketItem';
function Basket({ basket,resetBasket, products, total }) {
    return (
        <div className='container'>
            {
                basket.map(item => (
                    <BasketItem key={item.id} item={item} product={products.find(product => product.id === item.id)} />
                ))
            }
            <div>Toplam = {total}</div>
            <button onClick={resetBasket}>Sepeti sıfırla</button>
        </div>
    )

}

export default Basket;