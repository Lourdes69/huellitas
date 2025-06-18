import React, {useContext} from 'react'
import "./Card.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../Context/CartContext"

function Card({ isCartOpen, onClose, }) {
  const { cart, handleRemoveFromCart } = useContext(CartContext);

  return (
    <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h1 className='text-slate-900 text-2xl'>Carrito de Compras</h1>
        <button onClick={onClose} className='close-button'>X</button>
      </div>
      <div className="card-content">

        {cart.length === 0 ? (

          <p className='text-red-600 text-2xl text-center py-6 px-8'> No hay productos en el carrito</p>
        ) : (
          <ul className='card-item '>
            {cart.map((item) => (
              <li className='text-black' key={item.id}>
                {item.nombre} - {item.precio} x {item.cantidad}
                <button className='ml-28' onClick={() => handleRemoveFromCart(item)}><FaRegTrashAlt /></button>
              </li>
            ))}
          </ul>
        )}
        <div className="card-footer">
          <p className='text-black font-bold'>Total: {cart.reduce((total, item) => total + item.precio * item.cantidad, 0)} </p>
          <button className='bg-orange-600 text-white py-2 px-4 rounded'>Finalizar Compra</button>

        </div>
      </div>
    </div>
  )
}

export default Card