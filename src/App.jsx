import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Gallery from './pages/Gallery'
import Contacto from './pages/Contacto'
import DetallesProductos from './Components/DetallesProductos'
import Admi from './pages/Admi'
import Login from './pages/Login'
import RutaProtegida from './auth/RutaProtegidas'
import NotFound from './pages/NotFound'

function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    fetch("/data/data.json")
      .then(respuesta => respuesta.json())
      .then(datos => {
        setProductos(datos)
        setCargando(false)
      })
      .catch(error => {
        console.error("Error al cargar los datos:", error)
        setCargando(false)
        setError(true)
      })
  }, [])

  const handleAddToCart = (producto) => {
    const productInCart = cart.find((item) => item.id === producto.id)
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? {
              ...item,
              cantidad: Math.min(item.cantidad + producto.cantidad, item.stock)
            }
            : item
        )
      )
    } else {
      setCart([...cart, { ...producto }])
    }
  };

  const handleRemoveFromCart = (producto) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === producto.id) {
          return { ...item, cantidad: item.cantidad - 1 }
        } else {
          return item
        }
      }).filter(item => item.cantidad > 0)
    })
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home borrarDelCarrito={handleRemoveFromCart} agregarAlCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />
        <Route path="/acercade" element={<AcercaDe borrarDelCarrito={handleRemoveFromCart} cart={cart} />} />
        <Route path="/productos" element={<Gallery borrarDelCarrito={handleRemoveFromCart} agregarAlCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />
        <Route path="/contacto" element={<Contacto borrarDelCarrito={handleRemoveFromCart} cart={cart} />} />
        <Route path="/productos/:id" element={<DetallesProductos productos={productos} />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admi />
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
