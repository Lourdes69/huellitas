import React, {useContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Gallery from './pages/Gallery'
import Contacto from './pages/Contacto'
import DetallesProductos from './Components/DetallesProductos'
import Admi from './pages/Admin'
import Login from './pages/Login'
import Register from './pages/Register'
import RutaProtegida from './auth/RutaProtegidas'
import NotFound from './pages/NotFound'
import { CartContext } from './Components/Context/CartContext'


function App() {
 
  const { isAuthenticated } = useContext(CartContext)
  


  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/productos" element={<Gallery />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:id" element={<DetallesProductos />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admi />
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

  )
}

export default App
