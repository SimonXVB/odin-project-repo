import PropTypes from 'prop-types';
import "./home.css"

export function Home( {products, handleClick} ) {
    return (
        <div className='wrapper'>
            <div className='listings'>
                {products.map((product) => (
                    <div key={product.id} className='product'>
                        <img src={product.image}/>
                        <div className='details'>
                            <div><strong>Name:</strong> {product.title}</div>
                            <div><strong>Price:</strong> {product.price}€</div>
                            <button onClick={() => handleClick(product.id)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

Home.propTypes = {
    products: PropTypes.array,
    handleClick: PropTypes.func
}