import "./cart.css";
import { useLocation } from "react-router-dom";

export function Cart() {
    const location = useLocation();
    const cart = location.state.prods

    console.log(cart)
    
    return (
        <div className="cartPage">
            {!cart.length && <div>Empty</div>}

            {cart.map((item) => (
                item.amount !== 0 && 
                <div key={item.id} className="cart-product">
                <img src={item.image} />
                <div className="cart-desc">
                    <div className="cart-details"> 
                        <p>{item.title}</p>
                        <p>Price: {item.price}€</p>
                        <p>Total: {item.price * item.amount}€</p>
                        <p>Amount: {item.amount}</p>
                    </ div>
                </div>
            </div>
            ))}
        </div>
    )
};