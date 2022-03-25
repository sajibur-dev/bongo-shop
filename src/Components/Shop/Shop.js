import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =  useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])
    return (
        <div>
            {/* product components  */}

            {/* cart components */}
        </div>
    );
};

export default Shop;