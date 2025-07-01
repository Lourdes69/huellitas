
import React from 'react'
import { FaHeart, FaHandshake, FaLightbulb } from "react-icons/fa";


const Valores = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.15)]  rounded-3xl p-6 text-center space-y-4">
          <FaHeart size={50} className="text-white  mx-auto bg-red-500 rounded-full p-3" />
          <h3 className="text-xl font-semibold">Amor por los Animales</h3>
          <p className="text-gray-600">
            Cada decisión que tomamos está motivada por nuestro amor genuino hacia las mascotas y su bienestar.
          </p>
        </div>
        <div className="bg-white  shadow-[0_0_30px_0_rgba(0,0,0,0.15)]  rounded-3xl p-6 text-center space-y-4">
          <FaHandshake size={50} className="text-white  mx-auto bg-purple-600 rounded-full p-3" />
          <h3 className="text-xl font-semibold">Servicio Excepcional</h3>
          <p className="text-gray-600">
            Nuestro equipo está comprometido en brindar una experiencia de compra excepcional a cada cliente.
          </p>
        </div>
        <div className="bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.15)]  rounded-3xl p-6 text-center space-y-4">
          <FaLightbulb size={50} className="text-white  mx-auto bg-pink-500 rounded-full p-3" />
          <h3 className="text-xl font-semibold">Innovación</h3>
          <p className="text-gray-600">
            Buscamos nuevas formas de mejorar la vida de las mascotas y sus familias.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Valores
