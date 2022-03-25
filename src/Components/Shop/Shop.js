import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =  useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])
    const handleCartProduct = (product) => {
        console.log(product);
    }
    return (
        <div className='shop-container'>
            {/* product components  */}
            <div className="products-container">
                {/* product */}
                {
                    products.map((product) => 
                    <Product 
                        key={product.id} 
                        product={product}
                        handleCartProduct={handleCartProduct}
                    />)
                }
            </div>

            {/* cart components */}
            
        </div>
    );
};

export default Shop;