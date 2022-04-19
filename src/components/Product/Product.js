import React from 'react';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

const Product = ({products,handler}) => {
    const {name,price,des,img} = products;
    return (
        <div className='product'>
            <div className="thumbnails">
                <img src={img} alt="" />
            </div>
            <div className="product-body">
                <h3 className='title'>{name}</h3>
                <h4 className='price'>Price:{price}</h4>
                <p className='description'>{des}</p>
            </div>
            <div className="product-footer">
                <button onClick={ ()=> handler(products)} >Add to Cart <span><FontAwesomeIcon icon={faCartShopping} /></span></button>
            </div>
        </div>
    );
};

export default Product;