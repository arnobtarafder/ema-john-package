import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            <nav className='header-navigation'>
                <img height={'80px'} width={'90px'} src="https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/dc2f9e6e0041d3ab82e4ea74d6d61fd1809b927b/images/Logo.svg" alt="" />
                
                {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgY64T4_GcGPDErlofT54ebMtCmedGH6dWxgQiiisO5rgkARec6sptoABlSnblp5jDsYQ&usqp=CAU */}
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        
    );
};

export default Header;