import React, { useState } from 'react';
import './Orders.css'
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts'
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();


    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div>
            {/* <h1>This is orders length: {products.length}</h1>
            <h1>Cart has: {cart.length}</h1> */}
            
            <div className="shop-container">
                <div className="review-item-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveProduct = {handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart = {cart}>
                        <Link to="/shipment">
                        <button onClick={()=>navigate('/shipment')}>Proceed Shipping </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;