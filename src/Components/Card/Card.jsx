import React from 'react'
import "./Card.css"
import { FaRegTrashAlt } from "react-icons/fa";

function Card({ cartItems = [], isCartOpen, onClose, borrarDelCarrito }) {

  return (
    <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h1 className='text-slate-900 text-2xl'>Carrito de Compras</h1>
        <button onClick={onClose} className='close-button'>X</button>
      </div>
      <div className="card-content">

        {cartItems.length === 0 ? (

          <p className='text-red-600 text-2xl text-center py-6 px-8'> No hay productos en el carrito</p>
        ) : (
          <ul className='card-item '>
            {cartItems.map((item) => (
              <li className='text-black' key={item.id}>
                {item.nombre} - {item.precio} x {item.cantidad}
                <button className='ml-28' onClick={() => borrarDelCarrito(item)}><FaRegTrashAlt /></button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Card