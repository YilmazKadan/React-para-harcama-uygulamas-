


function Product({ product, basket, setBasket }) {

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
 
            checkBasket.amount -= 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
    }
    
    return (
        <>
            <div className="product">
                <h6>{product.title}</h6>
                <div className="product-price">
                    $ {product.price}
                </div>
                <div className="actions">
                    <button onClick={removeBasket}>Sat</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button onClick={addBasket}>Satın Al</button>
                </div>
                {/* Direkt bu şekilde stillendirme yapabiliyoruz. */}
                <style jsx>{`
                   .product{
                    background:#fff;
                    padding:10px;
                    border: 1px solid #ddd;
                    margin-bottom:10px;
                   }
                `}</style>
            </div>
        </>

    )
}

export default Product