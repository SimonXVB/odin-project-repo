import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Nav } from './Nav/nav';
import { Home } from './Home/home';
import { Cart } from './Cart/cart';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './main.css'

export function Wrapper() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
    .then(res=> res.json())
    .then(json => {
        setProducts(json.map((product) => (
          {...product, amount: 0}
        )))
    })
    .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    function count() {
      setCount(products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0
      ));
    };

    count();
  },[products]);

  function handleClick(id) {
    setProducts(products.map((item) => {
      if(item.id === id) {
        return {
            title: item.title,
            price: item.price,
            amount: item.amount + 1,
            id: item.id,
            image: item.image,
          }
      } else {
        return item
      }
    }));
  };

  return (
    <>
      <BrowserRouter>
          <Nav count={count}/>
          <Routes>
            <Route path="/" element={<Home handleClick={handleClick} products={products}/>} />
            <Route path="cart" element={<Cart products={products}/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wrapper />
  </StrictMode>,
)