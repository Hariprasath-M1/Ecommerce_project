import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductContextAPI from './context/ProductContext.jsx'
import CartContextAPI from './context/CartContext.jsx'
import Product from './components/Product.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextAPI>
      <CartContextAPI>
      <App />
      </CartContextAPI>
    </ProductContextAPI>
  </React.StrictMode>,
)
