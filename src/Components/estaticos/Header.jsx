import { useState, useContext } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import logo from "../../../public/logo.ico";
import Cart from "../Cart/Cart";
import { CartContext } from "../Context/CartContext";
import "../../App.css";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { busqueda, setBusqueda } = useContext(CartContext);
 
  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/productos", label: "Tienda" },
    { to: "/acercade", label: "Acerca de" },
    { to: "/contacto", label: "Contacto" },
  ];

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-[#4f46e5] text-gray-700"
      : "hover:text-[#4f46e5]";

  return (
    <header>
      <div className="bg-[#4f46e5] text-white text-center py-2 text-sm sm:text-base font-semibold2">
        <p>¡Bienvenido a nuestra tienda de mascotas! 🐾</p>
      </div>

      <nav className="flex items-center relative justify-between  fuente-principal">
        <div className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="logo de la pagina web"
            className="w-20 sm:w-24 md:w-28 p-2 md:ml-8"
          />
        </div>
        <ul className="hidden md:flex ml-4 gap-10 text-lg font-bold items-center">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={navLinkClass}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4 ml-auto mr-8">
          <div className="relative flex items-center border border-gray-300 rounded-full px-3 py-2 shadow-sm w-[200px] lg:w-[250px] focus-within:ring-2 focus-within:ring-[#4f46e5] transition">
            <input
              type="text"
              placeholder='Buscar productos...'
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              className="flex-1 bg-transparent outline-none cursor-pointer pl-1 pr-8 text-gray-800 placeholder:text-gray-300 placeholder:text-lg placeholder:font-semibold rounded-full"
            />
            <FaSearch className="absolute right-4 pointer-events-none text-gray-300" />
          </div>
          <FaRegHeart size={25} className='hover:text-red-600 cursor-pointer'/>
          <div className="cart-nav mt-2">
            <button onClick={() => setCartOpen(true)} className="bg-transparent border-none">
              <FaCartShopping size={30} className="text-gray-700 hover:text-[#4f46e5]" />
            </button>
            <Cart isCartOpen={isCartOpen} onClose={() => setCartOpen(false)} />
          </div>
          <Link to="/login" className="ml-2">
            <button className="bg-[#4f46e5] text-white hover:bg-blue-700 px-5 py-2 rounded-3xl font-bold text-lg flex items-center gap-2">
              Iniciar Sesión
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-5 mr-2 md:hidden">
          <FaRegHeart size={25} />
          <div className="cart-nav mt-2">
            <button onClick={() => setCartOpen(true)} className="bg-transparent border-none">
              <FaCartShopping size={25} className="text-gray-700" />
            </button>
            <Cart isCartOpen={isCartOpen} onClose={() => setCartOpen(false)} />
          </div>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="ml-2"
            aria-label="Abrir"
          >
            <IoMenu size={35}/>
          </button>
        </div>
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? 'bg-black bg-opacity-40 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl z-50 flex flex-col items-center gap-4 py-8 px-4
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <button
            className="self-end mb-4 text-2xl"
            aria-label="Cerrar menú"
            onClick={() => setMobileMenuOpen(false)}
          >✕</button>
          <ul className="flex flex-col gap-4 text-lg font-medium items-center w-full">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={navLinkClass}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="relative flex items-center border border-gray-300 rounded-full px-3 py-2 shadow-sm w-full focus-within:ring-2 focus-within:ring-[#4f46e5] mt-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              className="flex-1 bg-transparent outline-none pl-1 pr-8 text-gray-800 placeholder:text-gray-300 placeholder:text-lg placeholder:font-semibold rounded-full"
            />
            <FaSearch className="absolute right-4 pointer-events-none text-gray-300" />
          </div>
          <Link to="/login" className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-[#4f46e5] text-white hover:bg-blue-700 px-5 py-2 rounded-3xl font-bold text-lg flex items-center justify-center gap-2">
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
