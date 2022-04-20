import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartItem.css';

const CartItem = ({cartItem,handler}) => {
    const {img,model,color} = cartItem;
   
    return (
        <div className="cart-item " >
            <div className="cart-container" style={{background:color}}>
                <div className="cart-image" >
                    <img src={img} alt="" />
                </div>
                <div className="-cart-name">
                    <h4>{model}</h4>
                </div>
                <div className="cart-footer">
                    <button onClick={ ()=> handler(cartItem)}><FontAwesomeIcon icon={faTrash} /></button >
                </div>
            </div>
        </div>
    );
};

export default CartItem;