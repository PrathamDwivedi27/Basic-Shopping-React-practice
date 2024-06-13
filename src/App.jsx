import Products from "./components/Products"
import CartProvider from "./contexts/CartProvider"
import Header from "./components/Header"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    // Cart provider ka children hai Products
    <CartProvider>   
        <ToastContainer 
        position="bottom-right"
        newestOnTop={true}
        autoClose={500}
        hideProgressBar={true}
        />   
        <Header/>
        <Products/>
        
    </CartProvider>
      
      
    
  )
}

export default App
