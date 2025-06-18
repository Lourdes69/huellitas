import React, { useEffect, useContext } from 'react'
import Productos from './Productos'
import { CartContext } from './Context/CartContext'

function ProductList() {

  const { productos, busqueda, setBusqueda, productosFiltrados } = useContext(CartContext);

  useEffect(() => {
    console.log(productos)
  }, [productos])

  return (
    <div>
      <h1 className='text-slate-900 text-3xl px-4 mt-14 m-10'>Nuestros Productos</h1>
      <input type="text"
        placeholder='Buscar productos...'
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)} />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
        {productosFiltrados.map((producto) => (
          <Productos key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default ProductList