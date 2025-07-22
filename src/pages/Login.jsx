import React, { } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Components/Context/AuthContext'
import { FaGoogle, FaFacebookF, FaRegHeart, FaRegWindowClose } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import logoPerfil from "../../public/logo.ico"
import logo from "../../public/img-login.png"



function Login() {
  const navigate = useNavigate()
  const { email, setEmail, password, setPassword, error, handleSubmit } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 py-6 sm:py-8">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden">
        <button
          className="absolute top-4  right-6 text-orange-400 hover:text-orange-700 text-2xl font-bold z-10"
          onClick={() => navigate('/')}
          aria-label="Cerrar"
        >
          <FaRegWindowClose size={30} />
        </button>
        <div className="md:w-1/2 p-10 bg-gradient-to-br from-orange-300 to-blue-300 text-white flex flex-col items-center justify-center">
          <div className="text-center ">
            <img src={logoPerfil} alt="" className='w-2/3 mx-auto mb-4"' />
            <img src={logo} alt="Mascotas" className="mx-auto mb-6 w-64 h-64 rounded-2xl" />
            <ul className="space-y-4 text-white font-bold text-left">
              <li className="flex items-center text-lg gap-2">
                <FaRegHeart size={20} />
                Productos de calidad
              </li>
              <li className="flex items-center text-lg gap-2">
                <TbTruckDelivery size={25} />
                Envío gratis
              </li>
              <li className="flex items-center text-lg gap-2">
                < BsFillStarFill size={20} />
                Miles de clientes felices
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">¡Bienvenido de vuelta!</h2>
          <p className='text-center mb-6'>Inicia sesión en tu cuenta</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              {error.email && <span className="text-red-600 text-sm">{error.email}</span>}
            </div>
            <div>
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              {error.password && <span className="text-red-600 text-sm">{error.password}</span>}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-orange-400" />
                Recordarme
              </label>
              <a href="#" className="text-orange-500 hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="w-full py-2 text-white font-bold rounded-lg bg-gradient-to-r from-orange-300 to-[#4f46e5] hover:opacity-90">
              Iniciar Sesión
            </button>
            <div className="text-center text-sm mt-2">
              ¿No tienes cuenta? <Link to="/register" className="text-orange-500 hover:underline">Regístrate aquí</Link>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-500">O continúa con</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex gap-4 mt-2 justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-2/3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <FaGoogle /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
