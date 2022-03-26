import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/laptop.jpg';
import './Product.css';



const Product = ({product,handleCartProduct}) => {
    const {name,price} = product;
    return (
        <div className='product'>
            <img src={logo} width="200" alt="" />
            <h3>{name}</h3>
            <p>{price} tk</p>
            <button
            data-bs-toggle="modal" data-bs-target="#exampleModal"
            onClick={ () => handleCartProduct(product)} 
            className='product-button'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;