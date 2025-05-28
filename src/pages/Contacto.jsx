
import React from 'react'
import Header from '../Components/estaticos/Header'

function Contacto({ cart, borrarDelCarrito }) {
  return (
    <div>
      <Header cartItems={cart} borrarDelCarrito={borrarDelCarrito} />
      <h1>Contacto</h1>
      <p>Esta es la sección de Contacto</p>
    </div>
  )
}

export default Contacto
