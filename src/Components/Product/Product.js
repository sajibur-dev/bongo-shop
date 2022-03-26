import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';



const Product = ({product,handleCartProduct}) => {
    const {name,price,picture} = product;
    return (
        <div className='product'>
            <img src={picture} width="200" alt="" />
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