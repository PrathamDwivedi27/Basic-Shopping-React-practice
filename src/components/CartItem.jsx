import React from 'react'
// import { useState } from 'react';
import { useCart } from '../contexts/CartProvider';
import styles from './CartItem.module.css'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import { ImCross } from 'react-icons/im';


function CartItem({id,price,title,quantity,img}) {
    // const [initialquantity, setQuantity]=useState(quantity);
    // function handleIncrease(){
    //     setQuantity(initialquantity+1);
    // }
    const {increaseQty,decreaseQty,removeItem}=useCart();
  return (
      <div className={styles.cartItem}>
  
        {/* left div */}
        <div className={styles.imageAndTitle}>
          <div className={styles.imgContainer}>
            <img src={img} alt={title}  className={styles.cartImage}/>
          </div>
          <h3>{title}</h3>
        </div>
  
        {/* rigt div */}
        <div className={styles.otherControls}>
          <div className={styles.qtyInput}>
            <button onClick={
                ()=>
              {
              if(quantity<=1){
                      return ;
              }   
              decreaseQty(id)                //hum direct function nhi pass kar sakte hai aise hi karna padega
          }}>
              <AiOutlineMinus/>
            </button>
            <span className={styles.quantityDisplay}>{quantity}</span>
            <button  onClick={
              ()=>
            {increaseQty(id)                //hum direct function nhi pass kar sakte hai aise hi karna padega function banake
          }}>
              <AiOutlinePlus/>
            </button>
          </div>
          <p> &#8377; {price*quantity}</p>
          <button onClick={
          ()=>{
              removeItem(id)
          }
        } className={styles.removeItemBtn}>
            <ImCross/>
          </button>
        </div>
      </div>
  )



}

export default CartItem
