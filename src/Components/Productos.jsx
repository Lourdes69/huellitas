import React, { useState,useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';



function Productos({ producto }) {

  const { handleAddToCart } = useContext(CartContext);


  const [cantidad, setCantidad] = useState(1)

  const increase = () => {
    setCantidad(prev => (prev < producto.stock ? prev + 1 : prev))
  }
  const decrease = () => {
    setCantidad(prev => (prev > 1 ? prev - 1 : prev))
  }

  const handleAgregar = () => {
    if (cantidad <= producto.stock && producto.stock > 0) {
      handleAddToCart({ ...producto, cantidad })
      setCantidad(1) 
    }
  }

  return (
    <>
    
    <section className="bg-slate-50 border border-black rounded-lg flex flex-col items-center  shadow-md p-4 m-6 translate-x-0 transition-transform duration-300 ease-in-out hover:scale-105">
    <Link to={`/productos/${producto.id}`}>
      <div className="w-full h-48 flex overflow-hidden items-center justify-center rounded-md mx-auto ">
        <img className='w-full h-full object-cover ' src={producto.imagen} alt={producto.nombre} />
      </div>

      <h3 className='text-center text-base text-gray-900 font-bold '>{producto.nombre}</h3>
      <p className='text-center text-sm text-gray-600 mb-5'>${producto.precio}</p>
      </Link>
      <div className='flex items-center justify-around w-full  '>

        <div className='flex items-center border border-black gap-3  py-1 px-4'>
          <button onClick={decrease} className='text-black' disabled={cantidad <= 1}>-</button>
          <span className='text-black'>{cantidad}</span>
          <button onClick={increase} className='text-black' disabled={cantidad >= producto.stock}>+</button>
        </div>
        <div className='bg-orange-400 flex text-lg font-bold gap-2 items-center text-white  py-1 px-4 rounded-md hover:bg-orange-500'>
          <FaCartArrowDown size={16} />
          <button 
            onClick={handleAgregar} 
            disabled={producto.stock === 0 || cantidad > producto.stock}
            className='disabled:opacity-50'
          >
            Carrito
          </button>
        </div>
      </div>
      {producto.stock === 0 && (
        <p className="text-red-600 mt-2">Sin stock</p>
      )}
   
    </section>
    </>
  )
}

export default Productos