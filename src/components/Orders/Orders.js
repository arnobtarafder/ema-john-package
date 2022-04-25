import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts'
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();


    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest)
        removeFromDb(product._id)
    }

    return (
        <div>
            {/* <h1>This is orders length: {products.length}</h1>
            <h1>Cart has: {cart.length}</h1> */}
            
            <div className="shop-container">
                <div className="review-item-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveProduct = {handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart = {cart}>
                        <button onClick={()=>navigate('/shipment')}>Proceed Shipping </button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;