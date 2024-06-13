import React from 'react'
import Model from './UI/Model'
import Cart from './Cart'
import { useState ,useEffect} from 'react'
import styles from "./Header.module.css"
import Container from './UI/Container'
import { BsCartFill } from "react-icons/bs";
import { useCart } from '../contexts/CartProvider'



function Header() {
  const {cart}=useCart();
  const totalQuantity=cart.reduce((acc,item)=>{
    return acc+item.quantity;
  },0)
  const [isModelOpen,setisModelOpen]=useState(false);
  
  function closeModel(){
    setisModelOpen(false);
  }
  useEffect(()=>{
    if(isModelOpen){
      document.documentElement.style.overflowY="hidden";
    }
    else {
      document.documentElement.style.overflowY="scroll";

    }
  },[isModelOpen])
  return (
    <div>
      <header className={styles.header}>
        <Container>
        <nav className={styles.nav}>
            <h1 className="logo">ARC Shop</h1>
            <button 
            className={styles.showCartButton}
            onClick={()=>{
              setisModelOpen(true);
            }}>
              <span className={styles.cartIconAndNumber}>
              <BsCartFill />
              {totalQuantity>0 && (
                <span className={styles.number}>
                {totalQuantity}
                </span>
                )}
              
              </span>
              <span>Cart</span>
              </button>
        </nav>
        {isModelOpen && (
          <Model closeModel={closeModel}>
          <Cart/>
        </Model>
      )}
        </Container>
       
        
      </header>
    </div>
  )
}

export default Header

//Ab ye header app.jsx mein layenge kyunki jo bhi cheeze display karani hai wo sab app mein rahegni