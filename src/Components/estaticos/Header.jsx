import { useState } from 'react'
import logo from "../../../public/logo.ico"
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../Card/Card"

const Header = ({ cartItems, borrarDelCarrito }) => {
  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <nav className='flex justify-between items-center'>
        <img className='w-1/12 p-2 ml-10' src={logo} alt="logo de la pagina web" />
        <ul className='flex justify-around text-xl font-bold text-orange-600 gap-10 items-center mr-10'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Tienda</Link></li>
          <li><Link to="/acercade">Acerca de</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <div className='cart-nav'>
        <button onClick={() => setCartOpen(true)} className='mr-10 btn-cart bg-transparent border-none '>
          <FaCartArrowDown size={30} className='text-red-600' />
      
        </button>
        
        <Card 
          cartItems={cartItems}
          isCartOpen={isCartOpen}
          onClose={() => setCartOpen(false)}
          borrarDelCarrito={borrarDelCarrito}
        />
        </div>
      </nav>
    </header>
  )
}

export default Header