
import React from 'react'
import { useParams } from 'react-router-dom'

function DetallesProductos({ productos }) {

    const { id } = useParams();

    const product = productos.find(producto => producto.id ==  (id));
    console.log(product);


  return (
    <div>
      <h2>Detalles del Producto: {id}</h2>
      {product ? (
        <div className='flex flex-col items-center gap-4 border p-4 rounded-lg '>
          <h3>{product.nombre}</h3>
          <p>Precio: ${product.precio}</p>
          <p>Descripción: {product.descripcion}</p>
          <img className='w-1/4 h-auto' src={product.imagen} alt={product.nombre} />
          <p>Stock: {product.stock}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  )
}

export default DetallesProductos
