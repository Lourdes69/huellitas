
import React from 'react'
import { FaPaw, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SeccionPromocional = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para ser parte de nuestra familia?</h2>
        <p className="mb-8 text-lg">Miles de mascotas y sus familias ya confían en nosotros</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/productos" className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-100">
            <FaPaw /> Ver Productos
          </Link>
          <Link to="/contacto" className="border border-white text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-orange-600">
            <FaPhoneAlt /> Contáctanos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SeccionPromocional
