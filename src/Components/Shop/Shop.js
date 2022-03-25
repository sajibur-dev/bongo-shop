import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        if (cart.length >= 4) {
            alert(`you can't add getter then 4`)
        } else {
            const isProductExist = cart.find((product) => product.id === selectedProduct.id);
            const newProduct = !isProductExist ? [...cart,selectedProduct] : [...cart];
            setCart(newProduct);   
        }
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
            <Cart cart={cart}/>
        </div>
    );
};

export default Shop;