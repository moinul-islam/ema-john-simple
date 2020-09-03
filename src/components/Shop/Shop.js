import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const addProduct = (product) => {
        console.log('Product added', product);
    }

    return (
        <div className="shop-container">

            <div className="product-container">
              
                {
                    products.map(productValue => <Product product={productValue} addProduct={addProduct}></Product>)
                }
              
            </div>
            
            <div className="cart-container">
                <h3>Cart</h3>
            </div>
            
        </div>
    );
};

export default Shop;