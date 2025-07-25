import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductsContext } from './context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductsContext>
      <BrowserRouter>
    <App />
  </BrowserRouter>
  </ProductsContext>

    
)
