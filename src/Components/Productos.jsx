import React, { useState, useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

function Productos({ producto }) {

  const { handleAddToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {
    if (cantidad <= producto.stock && producto.stock > 0) {
      handleAddToCart({ ...producto, cantidad })
      setCantidad(1)
    }
  }

  return (
    <>
      <section className="
        bg-white rounded-xl  flex flex-col  items-center shadow-md m-4 pb-5 transition-transform duration-300 ease-in-out hover:translate-y-2 
        hover:shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
        <Link to={`/productos/${producto.id}`} className="w-full flex flex-col items-center">
          <div className="w-full h-48 sm:h-56 md:h-64 flex overflow-hidden rounded-t-lg mb-4">
            <img className='w-full h-full object-cover' src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className='flex flex-col items-center w-full px-2'>
            <h3 className='text-center text-lg text-gray-800 font-semibold mb-2'>{producto.nombre}</h3>
            <p className='text-sm text-gray-600 mb-2 text-center'>{producto.descripcion}</p>
          </div>
        </Link>
        <div className='flex items-center justify-between w-full px-2 py-2'>
          <p className='text-orange-500 font-bold text-xl'>${producto.precio}</p>
          <button
            onClick={handleAgregar}
            disabled={producto.stock === 0}
            className='flex items-center gap-2 bg-orange-400 rounded-full p-2 disabled:opacity-50'
            title="Agregar al carrito"
          >
            <FaCartArrowDown size={25} color='white' />
          </button>
        </div>
        {producto.stock === 0 && (
          <p className="text-red-600 mt-2">Sin stock</p>
        )}
      </section>
    </>
  )
}

export default Productos