import "./home.css";
import "../Nav/nav.css"
import { Products } from "../Products/products";
import { useState, useEffect } from "react"

export function Home( ) {

    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState({});
    const [totalCart, setTotalCart] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchProds() {
            await fetch('https://fakestoreapi.com/products?limit=6')
                    .then(res=> res.json())
                    .then(json => {
                        setProducts(json)
                    })
                    .catch((error) => console.log(error));
        };

        setTotal({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
        });
                
        fetchProds();
    }, []);

    function add(id) {

        setTotal({
            [id]: total[id]++,
            ...total
        });
    };

    function addToCart() {

        setCart(
            products.map((item) => (
                {
                    title: item.title,
                    price: item.price,
                    amount: total[item.id],
                    id: item.id,
                    image: item.image,
                }
            ))
        )

        setTotalCart(
            Object.values(total).reduce((accumulator, value) => {
            return accumulator + value;
          }, 0)
        );
    };

    function sub(id) {

        if(total[id] <= 0) {
            return null
        };

        setTotal({
            [id]: total[id]--,
            ...total
        });
    };

    console.log(cart)
    
    return (
        <>
            <Products products={products} sub={sub} total={total} add={add} addToCart={addToCart} num={totalCart} prods={cart}/>
        </>
    )
};