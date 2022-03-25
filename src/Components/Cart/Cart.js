import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/laptop.jpg';
import './Cart.css';

const Cart = ({cart,setCart}) => {

    const handleChooseProduct = () => {
        if (cart.length === 0) {
            alert('please add some product')
        } else {
            const randomId = Math.ceil(Math.random() * 10);
            const isExist = cart.find((product) => product.id === randomId);
            const chooseProduct = isExist ? `recommand for you ${isExist.name}` : `product doesn't exist in your cart`;
            alert(chooseProduct)
        }
    }
    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            {
                cart.map((product) =>  (
                    
                    <div className='cart-product'>
                        <img src={logo} width="50" alt="" />
                        <h5>{product.name}</h5>
                        <button className='cart-product-button'><FontAwesomeIcon icon={faDeleteLeft}/></button>
                    </div>
                ))
            }
            <button className='btn selected-button' onClick={handleChooseProduct}>choose 1 for me</button>
            <button className='btn reset-button' onClick={() => setCart([])}>choose again</button>
        </div>
    );
};

export default Cart;