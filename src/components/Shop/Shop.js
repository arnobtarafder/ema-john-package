import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Shop = () => {
    // const student1= {name: "rafique", marks: 79, result: "A+"};
// console.log(student1.mark + 1);
// console.log(student1.mark + 1);
// console.log(typeof(student1.mark));

// You should define test as 0 to begin with so that it starts out as an object of type Number . Adding numbers to undefined results in NaN (not-a-number), which won't get you anywhere.



    // const [products, setProducts] = useProducts([]);
    // console.log(products);
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [page, size])

// console.log(cart);

    useEffect( () => {
        fetch("http://localhost:5000/productCount")
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages)
        })
    } ,[])  

// https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/



    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        // do not do this: cart.push(product)
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id)
        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        // const newCart = [...cart, selectedProduct];
        setCart(newCart)
        addToDb(selectedProduct._id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h1>Products length: {products.length}</h1> */}
                {
                    products.map(product => <Product
                        key = {product._id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Product> )
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button
                                className={page === number ? "selected" : ""}
                                onClick={() => setPage(number)}
                                >{number}</button>)
                    }
                    {/* {size} */}
                    <select defaultValue={'DEFAULT'} onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="DEFAULT" disabled>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
              {/* Selected Items:  {cart.length} */}
              {/* <Cart cartContainer = {cart}></Cart>  */}
              <Cart cart = {cart}>
                    <Link to={"/orders"}>
                        <button className='review-button'>Review Order</button>    
                    </Link>   
               </Cart> 
            </div>
        </div>
    );
};

export default Shop;