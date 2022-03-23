import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    // const student1= {name: "rafique", marks: 79, result: "A+"};
// console.log(student1.mark + 1);
// console.log(student1.mark + 1);
// console.log(typeof(student1.mark));

// You should define test as 0 to begin with so that it starts out as an object of type Number . Adding numbers to undefined results in NaN (not-a-number), which won't get you anywhere.



    const [products, setProducts] = useState([]);
    // console.log(products);
    const [cart, setCart] = useState([]);
// console.log(cart);

// https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, []);

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = []
        for(const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
              }
        }
        setCart(savedCart);
    }, [products])

   
    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        // do not do this: cart.push(product)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.find(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        // const newCart = [...cart, selectedProduct];
        setCart(newCart)
        addToDb(selectedProduct.id)
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