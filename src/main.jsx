import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from './Context/context.jsx';
// import { LoginContext } from "./context/loginContext/LoginContext.jsx"
import CartContextProvider from './User/CartContext/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
        <ContextProvider>
 {/* <LoginContext> */}
    <CartContextProvider>
      
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </CartContextProvider>
  {/* </LoginContext> */}

  </ContextProvider>
  </React.StrictMode>
)
