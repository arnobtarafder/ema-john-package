import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {name, seller,img, _id, price, ratings} = product; //for upper destructure and parameter
    
    // const handleAddToCart = () => {
        // console.log(props.product._id);
    // }
    // const {handleAddToCart} = props;
    return (
        <div className='product'>
             <img src= {img} alt="" />
           <div className="product-information">
           <p className='product-name'>{name}</p>
             <p>Price: <span className='product-price'>৳ {price}</span></p>
             <p><small>Seller: {seller}</small></p>
             <p><small>Ratings: {ratings}</small></p>    
           </div>
           {/* () => props.handleAddToCart(props.product._id) */}
           <button onClick={() => handleAddToCart(product)} className='button-cart'>
               <p className='button-text'>Add to Cart</p>
               <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;