import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/laptop.jpg';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            {
                cart.map((product) => (
                    <div className='cart-product'>
                        <img src={logo} width="50" alt="" />
                        <h5>{product.name}</h5>
                        <button className='cart-product-button'><FontAwesomeIcon icon={faDeleteLeft}/></button>
                    </div>
                ))
            }
            <button className='btn selected-button'>choose 1 for me</button>
            <button className='btn reset-button'>choose again</button>
        </div>
    );
};

export default Cart;