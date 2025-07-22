import React, { useContext } from 'react'
import "./Cart.css"
import { FaRegTrashAlt, FaCartArrowDown, FaRegCreditCard } from "react-icons/fa";
import { CartContext } from "../Context/CartContext"

function Cart({ isCartOpen, onClose, }) {
  const { cart, handleRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity } = useContext(CartContext);

  return (
    <div className={`cart-drawer  ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <div className='flex items-center gap-2'>
          <FaCartArrowDown size={22} className='text-orange-500' />
          <h1 className='text-gray-800 text-xl text-fond'>Mi Carrito </h1>
        </div>
        <button onClick={onClose} className='close-button'>X</button>
      </div>
      <div className="card-content">

        {cart.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col items-center py-12'>
              <FaCartArrowDown size={50} className="text-gray-300 " />
              <p className='text-gray-500 text-lg   px-8'> Tu carrito está vacío</p>
              <span className='text-gray-400 text-sm mt-2 '>Agrega algunos productos para continuar</span>
            </div>
          </div>
        ) : (
          <ul className='p-5 space-y-4 flex-1 overflow-y-auto'>
            {cart.map((item) => (
              <li className='text-black flex items-center justify-between gap-2 p-2' key={item.id}>
                <div className="flex items-center gap-2">
                  <img src={item.imagen} alt={item.nombre} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <div className="font-semibold text-gray-800">{item.nombre}</div>
                    <div className="text-gray-600 text-sm">$  {item.precio}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className='bg-gray-200 px-2 text-sm rounded-full w-8 p-2 '
                    onClick={() => handleDecreaseQuantity(item.id)}
                    disabled={item.cantidad <= 1}
                  >-</button>
                  {item.cantidad}
                  <button
                    className='bg-orange-500 px-2 rounded-full text-sm text-white w-8 p-2'
                    onClick={() => handleIncreaseQuantity(item.id)}
                    disabled={item.cantidad >= item.stock}
                  >+</button>
                  <button className='ml-3' onClick={() => handleRemoveFromCart(item)}>
                    <FaRegTrashAlt size={22} className='text-red-500 hover:text-red-700 transition-colors duration-200' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="card-footer">
          <p className='text-gray-800 p-6 border-t  border-gray-200 text-bold text-lg  '>Total: {cart.reduce((total, item) => total + item.precio * item.cantidad, 0)} </p>
          <div className=''>
            <FaRegCreditCard size={20} color='white' />
            <button
              className={`bg-orange-500 text-white py-3 px-4 -z-0 rounded-xl w-full font-semibold text-lg transition-opacity duration-200 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={cart.length === 0}
            >
              Finalizar Compra
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart