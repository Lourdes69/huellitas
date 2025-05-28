import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>Página No Encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded'><Link to="/">Volver a Inicio</Link></button>
    </div>
  )
}

export default NotFound
