import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;

    return (
        <div className="cart">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                
                <p><small>by: {seller}</small></p>
                
                <p>${price}</p>
                
                <p><small>Only {stock} left in stock - Order Now</small></p>

                <button className="btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;