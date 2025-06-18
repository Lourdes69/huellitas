import React from 'react'
import Header from '../Components/estaticos/Header'
import tiendaImg from '../../public/tienda.png' 



function Contacto() {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row items-stretch bg-[#fefefe] m-16">
        
        <div className="w-3/5 lg:w-1/2 p-10 flex flex-col justify-between">
        
            <h1 className="text-5xl font-bold mb-2">Contáctanos</h1>
              <div className='flex flex-row justify-around items-center'>
            <div className="mb-6">
              <h2 className="font-semibold text-lg">Tienda</h2>
              <p>Av. Sarmiento. Arenales 12</p>
              <p>+52-1-33-12345678</p>
              <p>info@midominio.com</p>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold text-lg">Horario laboral</h2>
              <p>Lun - Vie: 7:00 - 22:00</p>
              <p>Sábados: 8:00 - 22:00</p>
              <p>Domingo: 8:00 - 15:00</p>
            </div>
             </div>
            <h2 className="text-xl font-bold ">Huellitas Shop está aquí para responder tus preguntas</h2>
         

          <form className="space-y-4 ">
            <div className="flex gap-4">
              <input type="text" placeholder="Nombre" className="w-1/2 p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="w-1/2 p-2 border border-gray-300 rounded" />
            </div>
            <input type="text" placeholder="Teléfono" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Mensaje" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600">
              Enviar
            </button>
          </form>
        </div>

        {/* Imagen de tienda */}
        <div className="w-full lg:w-1/2">
          <img
            src={tiendaImg}
            alt="Interior de la tienda"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Contacto
