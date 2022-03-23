import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    const [cart, setCart] = useState([]);
// console.log(cart);

// https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        // do not do this: cart.push(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h1>Products length: {products.length}</h1> */}
                {
                    products.map(product => <Product
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Product> )
                }
            </div>
            <div className="cart-container">
              {/* Selected Items:  {cart.length} */}
              {/* <Cart cartContainer = {cart}></Cart>  */}
              <Cart cart = {cart}></Cart> 
            </div>
        </div>
    );
};

export default Shop;