import { createContext,useContext,useReducer } from "react";

const CartContext=createContext();

function cartReducer(cart,action){
    if(action.type==='ADD_CART'){
        return [...cart,action.payload];
    }
    if(action.type==='INCREASE_QTY'){
      return cart.map((item)=>{
        if(item.id===action.payload.id){
          return {...item,quantity:item.quantity+1};
        }
        else {
          return item;
        }
      })
    }
    if(action.type==='DECREASE_QTY'){
      return cart.map((item)=>{
        if(item.id===action.payload.id){
          return {...item,quantity:item.quantity-1};
        }
        else {
          return item;
        }
      })
    }
    if(action.type==='REMOVE_ITEM'){
      return cart.filter((item)=>{
        return item.id!==action.payload.id;
      })
    }
    return cart;
}

function CartProvider({children}) {
    const [cart,dispatch]=useReducer(cartReducer,[]);
    const addNewCartItem=(newCart)=>{
        return   dispatch({type:"ADD_CART",payload:newCart})
    }

    const increaseQty=(id)=>{
      return dispatch({type:"INCREASE_QTY",payload:{id:id}})
    }
    const decreaseQty=(id)=>{
      return dispatch({type:"DECREASE_QTY",payload:{id:id}})
    }

    const removeItem=(id)=>{
      return dispatch({type:"REMOVE_ITEM",payload:{id:id}});
    }
    
  return (
    <CartContext.Provider value={{cart:cart ,addNewCartItem:addNewCartItem,increaseQty:increaseQty,decreaseQty:decreaseQty,removeItem }}>          
      {children}                    {/* aise hum saare children render karwa liye */}

    </CartContext.Provider>
  )
}

// Hume baar baar useContext call karna padta hai jha jha consume karna hota hai isse aacha ek helper function bna lete hai
export function useCart(){
    return useContext(CartContext);         // Ye tumko return mein value dega ab aasan rahega
}



export default CartProvider
