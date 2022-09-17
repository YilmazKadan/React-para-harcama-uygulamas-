


function Product({ product, basket, setBasket, total, money }) {

    const basketItem = basket.find(item => item.id == product.id)

    // Sepete ekleme
    const addBasket = () => {

        const checkBasket = basket.find(item => item.id === product.id)
        // Yukarıda true döner ise daha önce sepette ürün var demektir.
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            // 3 nokta işareti o dizinin içindeki tüm elemanları yani dizinin kendisini kasıt eder.
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    // Sepetten çıkarma
    const removeBasket = () => {

        const checkBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        // Product basket içerisinde var mı kontrol ediyoruz.
        if (!checkBasket)
            return false;
        checkBasket.amount -= 1;
        if (checkBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, checkBasket])
        }
    }

    return (
        <>
            <div className="product">
                <img src={product.image} alt="" />
                <h6>{product.title}</h6>
                <div className="product-price">
                    $ {product.price}
                </div>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
                </div>
                {/* Direkt bu şekilde stillendirme yapabiliyoruz. */}
                <style jsx>{`
                   .product{
                    width: calc(25% - 5px);
                    margin-right:5px;
                    background:#fff;
                    padding:10px;
                    border: 1px solid #ddd;
                    margin-bottom:10px;
                   }

                   .product img{
                    width: 100%;
                    height: 200px;
                   }

                   .product h6{
                    font-size: 20px;
                    margin-bottom: 10px;
                   }

                   .product .actions{
                    display:flex;
                    align-items:center;
                   }

                   .product .product-price{
                    font-size:20px;
                    color:red;
                   }
                `}</style>
            </div>
        </>

    )
}

export default Product