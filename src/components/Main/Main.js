import React, { useEffect, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import CartItem from '../CartItem/CartItem';
// import Modal from '../Error/Modal';
import Product from '../Product/Product';


import './Main.css';

const Main = () => {
    const [products,setProducts] =useState([]);
    useEffect( ()=>{
        fetch(`mainData/data.json`)
        .then(reponsive => reponsive.json())
        .then(data => setProducts(data))
    },[]);

const [getCart,setCart] = useState([]);


    const addToCart = (additem) =>{
        const findCart = getCart.find(addItem => addItem.id === additem.id);
        if (findCart) {
            alert("This Product Already Exists...");
        }else{
        const addCart = [...getCart,additem];
            if (addCart.length > 4) {
                alert("You call Only 4 product Added...");
            }else{
                setCart(addCart);
            }
        } 
        
    }
    const deleteToCart = (deleteItem)=>{
       const exist = getCart.find(deletAnItem => deletAnItem.id === deleteItem.id);
       if (exist) {
           const rest = getCart.filter(restItem => restItem.id !== deleteItem.id);
           const newCart = [...rest];
           setCart(newCart)

       }
       
    }
    const chooseOne = ( )=>{
        console.log("choose one");
    }
    const tryAgain = ( )=>{
        console.log("tryAgain");
    }
    return (
        <div className='main-section'>
            <div className="product-area">
                <div>
                    <div className="left-area">
                        {
                            products.map( product => <Product handler={addToCart} key={product.id} products={product}></Product>)
                        }    
                    </div>
                    <div>
                        <Accordion></Accordion>
                    </div>
                </div>
                <div className="right-area">
                    <div className="cart-section">
                        <h3 className='products-title text-center bold'>Cart</h3>
                        {
                            getCart.map(cartItem => <CartItem  key={cartItem.id} handler={deleteToCart}  cartItem={cartItem}></CartItem>)
                        }
                        <div className="buton">
                        <button className='chooseOne' onClick={chooseOne}>Choose One</button>
                        <button className='tryAgain' onClick={tryAgain}>Try Again</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    );
};
// chooseOne={chooseOne} tryAgain={tryAgain}

export default Main;