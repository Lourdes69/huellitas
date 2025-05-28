
import React from 'react'
import Header from '../Components/estaticos/Header'

function AcercaDe({ cart, borrarDelCarrito }) {
  return (
    <>
    <Header cartItems={cart} borrarDelCarrito={borrarDelCarrito} />
    <div>
      <h1>Acerca De</h1>
      <p>Esta es la sección Acerca De</p>
    </div>
    </>
  )
}

export default AcercaDe
