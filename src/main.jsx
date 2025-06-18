import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Components/Context/CartContext.jsx'
import { AuthProvider } from './Components/Context/AuthContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import  { AdminProvider} from "./Components/Context/AdminContext.jsx"
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Router>
      <CartProvider>
        <AdminProvider>
          <AuthProvider>
            <App />
            <ToastContainer />
          </AuthProvider>
        </AdminProvider>
      </CartProvider>
    </Router>
  </StrictMode>,
)

        