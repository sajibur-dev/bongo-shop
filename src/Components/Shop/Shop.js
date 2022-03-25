import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =  useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[]);

    const handleCartProduct = (selectedProduct) => {
        const isProductExist = cart.find((product) => product.id === selectedProduct.id);
        const newProduct = !isProductExist ? [...cart,selectedProduct] : [...cart];
        setCart(newProduct);
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