import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logo from '../../images/laptop.jpg';
import './Cart.css';

const Cart = ({cart,setCart}) => {
    const [message,setMessage] = useState('');

    const handleChooseProduct = () => {
        if (cart.length === 0) {
            // alert('please add some product');
            setMessage('please add some product')
        } else {
            const randomId = Math.ceil(Math.random() * 10);
            const isExist = cart.find((product) => product.id === randomId);
            const chooseProduct = isExist ? `recommand for you ${isExist.name}` : `product doesn't exist in your cart`;
            // alert(chooseProduct)
            setMessage(chooseProduct)
        }
    }

    console.log(message)
    const deleteSpecificProduct = (specificProduct) => {
        const restProduct = cart.filter((product) => product.id !== specificProduct.id);
        setCart(restProduct)
    }
    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            {
                cart.map((product) => 
                    (
                    
                    <div key={product.id} className='cart-product my-3'>
                        <img src={logo} width="50" alt="" />
                        <h5>{product.name}</h5>
                        <button 
                        onClick={() => deleteSpecificProduct(product)} className='cart-product-button'><FontAwesomeIcon icon={faDeleteLeft}/></button>
                    </div>
                ))
            }
            <button className='btn selected-button'  onClick={handleChooseProduct}>choose 1 for me</button>
            <button className='btn reset-button' onClick={() => setCart([])}>choose again</button>
            {
                message ? <p className='error-message'>{message}</p> : null
            }
        </div>
    );
};

export default Cart;