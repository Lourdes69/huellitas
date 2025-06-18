import React, { useContext } from 'react'
import { CartContext } from '../Components/Context/CartContext'
import {  useAuth } from '../Components/Context/AuthContext'



function Login() {
  const { setIsAuthenticated } = useContext(CartContext)

  const { email, setEmail, password, setPassword, error, handleSubmit } = useAuth()

  return (
    <div>
      <h2 className='text-3xl font-bold text-center'>Iniciar Sesión</h2>
      <form className='flex flex-col gap-4 w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            
            
          />
          {error.email && <span className='text-red-600 '>{error.email}</span>}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            
          />
          {error.password && <span className='text-red-600'>{error.password}</span>}
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login