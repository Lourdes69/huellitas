
import React, { createContext, useState, useContext} from 'react';
import { useNavigate  } from 'react-router-dom';
import { CartContext } from './CartContext';

 
const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
 const { setIsAuthenticated } = useContext(CartContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let validationErrors = {}
    if (!email) {
      validationErrors.email = 'El email es requerido'
    }
    if (!password) {
      validationErrors.password = 'La contraseña es requerida'
    }

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors)
      return
      
    }

    try {
      const res = await fetch('/data/user.json')
      const user = await res.json()
      const foundUser = user.find(
        user => user.email === email && user.password === password
      )
       console.log('Usuario encontrado:', foundUser)

      if (!foundUser) {
        setError({ email: 'Credenciales inválidas' })
      } else {
        setIsAuthenticated(true)
        if (foundUser.role === "admin") {
          navigate('/admin')
        } else {
          navigate('/')
        }
      }
    } catch (error) {
      setError({ email: 'Error de conexión' })
    }
  }

    return (
        <AuthContext.Provider value={{email, setEmail, password, setPassword, error, setError, handleSubmit, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );

 }

 export const useAuth = () => useContext(AuthContext); 
