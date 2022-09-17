

function BasketItem({ item, product }) {

    return (
        <>
            <div>
                {product.title} X {item.amount}
            </div>
        </>
    )
}


export default BasketItem