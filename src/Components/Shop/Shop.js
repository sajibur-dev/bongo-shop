import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Message from '../Message/Message';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =  useState([]);
    const [cart,setCart] = useState([]);
    const [message,setMessage] = useState('')
    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[]);

    const handleCartProduct = (selectedProduct) => {
        if (cart.length >= 4) {
            setMessage(`you can't add getter then 4`)
            setCart([...cart]);
        } else {
            const isProductExist = cart.find((product) => product.id === selectedProduct.id);
            const newProduct = !isProductExist ? [...cart,selectedProduct] : [...cart];
            setCart(newProduct);
            setMessage('')   
        }
    }
    return (
        <div>
            {/* product components  */}
            {
                    message ? <Message message={message} messageTitle="over add product"/> : null
            }
            <div  className='shop-container'>   
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
                <Cart cart={cart} setCart={setCart}/>
            </div>
        </div>
    );
};

export default Shop;