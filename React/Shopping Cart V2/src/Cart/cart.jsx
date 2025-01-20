import PropTypes from 'prop-types';

export function Cart( {products} ) {
    return (
        <div className='wrapper'>
            <div className='listings'>
                {products.map((product) => (
                    product.amount > 0 ? 
                        <div key={product.id} className='product'>
                            <img src={product.image}/>
                            <div className='details'>
                                <div>Name: {product.title}</div>
                                <div>Price: {product.price}€</div>
                                <div>Amount: {product.amount}</div>
                                <div>Total: {product.amount * product.price}€</div>
                            </div>
                        </div>
                    : null
                ))}
            </div>
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.array,
}