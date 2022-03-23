import React from 'react';
import './Cart.css'

// const Cart = ({cartContainer}) => {
const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        // console.log(product.price);
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseInt((total * 0.1).toFixed(2));
    const grandTotal = parseInt(total + shipping + parseFloat(tax));

    return (
        <div className='cart'>
            {/* Selected Items:  {cartContainer.length} */}
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: <span className='cart-taka-sign'>৳</span> {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;

// import React from 'react';
// import './Cart.css';

// const Cart = (props) => {
//     const { cart } = props;
//     // console.log(cart);
//     let total = 0;
//     let shipping = 0;
//     let quantity = 0;
//     for(const product of cart){
//         quantity = quantity + product.quantity;
//         total = total + product.price * product.quantity;
//         shipping = shipping + product.shipping;
//     }
//     const tax = parseFloat((total * 0.1).toFixed(2));
//     const grandTotal = total + shipping + tax;
//     return (
//         <div className='cart'>
//             <h4>Order Summary</h4>
//             <p>Selected Items: {quantity}</p>
//             <p>Total price: ${total}</p>
//             <p>Total Shipping: ${shipping}</p>
//             <p>Tax: {tax}</p>
//             <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
//         </div>
//     );
// };

// export default Cart;