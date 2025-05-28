import React, { useEffect } from 'react'
import Productos from './Productos'

function ProductList({ productos, agregarAlCarrito }) {
  useEffect(() => {
    console.log(productos) 
  }, [productos])

  return (
    <div>
      <h1 className='text-slate-900 text-3xl px-4 mt-14 m-10'>Nuestros Productos</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
        {productos.map((producto) => (
          <Productos key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  )
}

export default ProductList