import React from 'react'
import Header from '../Components/estaticos/Header'
import ImagPerfil from "../../public/img-acerca.jpeg"
import { FaHeart } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import Footer from '../Components/estaticos/Footer'
import SeccionPromocional from '../Components/estaticos/SeccionPromocional';
import Valores from '../Components/Valores';


function AcercaDe() {
  return (
    <>
      <div className=' shadow-lg mb-6'>
        <Header />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center p-10 gap-10'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center space-y-6'>
          <h1 className="text-3xl font-bold text-[#111827]">TU TIENDA PARA MASCOTAS</h1>
          <p className="text-lg text-[#111827] leading-relaxed">Todo lo que necesitas para consentir a tu mascota.</p>
          <p className="text-lg text-[#111827]">En nuestra tienda, ofrecemos una amplia variedad de productos para mascotas, desde alimentos y juguetes hasta accesorios y cuidado personal. Nos apasiona el bienestar de tus amigos peludos y estamos aquí para ayudarte a encontrar lo mejor para ellos.</p>
          <p className="text-lg text-[#111827]">Nos enorgullece ofrecer productos de alta calidad y un excelente servicio al cliente. Nuestro equipo está siempre disponible para responder tus preguntas y ayudarte a elegir los productos adecuados para tu mascota.</p>
          <p className="text-lg text-[#111827]">¡Gracias por elegir nuestra tienda para consentir a tu mascota!</p>
          <ul className='flex justify-center items-center space-x-4 text-2xl'>
            <li><FaHeart size={30} color='red' /></li>
            <li><FaPaw size={30} color='brown' /></li>
            <li><BsFillStarFill size={30} color='orange' /> </li>

          </ul>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            className='h-[600px] w-[480px] object-cover rounded-xl shadow-lg'
            src={ImagPerfil}
            alt="Imagen de perfil"
          />
        </div>
      </div>
     <Valores />
      <SeccionPromocional />
      <Footer />
    </>
  )
}

export default AcercaDe