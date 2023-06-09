import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from './themes/theme';
import { BrowserRouter } from 'react-router-dom';
// import CartContextProvider from './components/cart/cartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider theme={customTheme}>
    {/* <CartContextProvider> */}
    <App />
    {/* </CartContextProvider> */}
  </ChakraProvider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
