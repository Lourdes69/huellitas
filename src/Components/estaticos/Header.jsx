import { useState } from 'react'
import logo from "../../../public/logo.ico"
import { FaCartArrowDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import Card from "../Card/Card"


const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false)



  return (
    <header>
      <nav className='flex justify-between items-center'>
        <img className='w-1/12 p-2 ml-10' src={logo} alt="logo de la pagina web" />
        <ul className='flex justify-around text-xl font-bold text-orange-600 gap-10 items-center mr-10'>
          <li><NavLink to="/" className={({ isActive }) => isActive
            ? "border-b-2 border-orange-600 text-orange-700"
            : "hover:text-orange-400"
          }>Inicio</NavLink>
          </li>
          <li><NavLink to="/productos" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-600 text-orange-700"
              : "hover:text-orange-400"
          }
          >Tienda</NavLink>
          </li>
          <li><NavLink to="/acercade" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-600 text-orange-700"
              : "hover:text-orange-400"
          }
          >Acerca de</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-600 text-orange-700"
              : "hover:text-orange-400"
          }
          >Contacto</NavLink></li>
        </ul>
        <Link to="/login">
          <div className='flex items-center gap-2'>
            <IoMdLogIn size={25} />
            <p className='text-xl text-orange-600'>Entrar</p>
          </div>
        </Link>
        <div className='cart-nav'>
          <button onClick={() => setCartOpen(true)} className='mr-10 btn-cart bg-transparent border-none '>
            <FaCartArrowDown size={30} className='text-red-600' />

          </button>

          <Card

            isCartOpen={isCartOpen}
            onClose={() => setCartOpen(false)}

          />
        </div>
      </nav>
    </header>
  )
}

export default Header