import React from 'react'
import logo from "../../../public/logo.ico"
import { CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className='bg-[#1f2937] text-gray-400 py-12 px-4'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-start'>
          <img src={logo} alt="Logo" className='w-20 h-20 mb-2' />
          <h5 className='text-lg mb-3 mt-2'>Tu tienda de confianza para todas las necesidades de tus mascotas.</h5>
          <ul className='flex gap-3 list-none py-3 m-0'>
            <li className='hover:text-white cursor-pointer'><CiFacebook size={25} /></li>
            <li className='hover:text-white cursor-pointer'><CiInstagram size={25} /></li>
            <li className='hover:text-white cursor-pointer'><CiYoutube size={25} /></li>
          </ul>
        </div>
        <div className='ml-5'>
          <h4 className='text-xl mb-4 text-white font-bold'>Enlaces Rápidos</h4>
          <ul className='space-y-2 '>
            <li className=' text-lg hover:text-white cursor-pointer'>Inicio</li>
            <li className=' text-lg hover:text-white cursor-pointer'>Tienda</li>
            <li className=' text-lg hover:text-white cursor-pointer'>Acerca de</li>
            <li className=' text-lg hover:text-white cursor-pointer'>Contacto</li>
          </ul>
        </div>
        <div>
          <h4 className='text-xl mb-4 text-white font-bold'>Nuestros Servicios</h4>
          <ul className='space-y-2'>
            <li className='text-lg hover:text-white cursor-pointer'>Consulta Veterinaria</li>
            <li className='text-lg hover:text-white cursor-pointer'>Tienda de Mascotas</li>
            <li className='text-lg hover:text-white cursor-pointer'>Adopción de Mascotas</li>
            <li className='text-lg hover:text-white cursor-pointer'>Paseo de Mascotas</li>
          </ul>
        </div>
        <div>
          <h4 className='text-xl mb-4 text-white font-bold'>Contacto</h4>
          <div className='flex items-center gap-3 mb-3'>
            <SiGooglemaps size={20} color='#f59e0b'/>
            <p className='text-lg'>Av. Sarmiento. Arenales 12</p>
          </div>
          <div className='flex items-center gap-3 mb-3'>
            <FaPhoneAlt size={20} color='#f59e0b'/>
            <p className='text-lg'>+52-1-33-12345678</p>
          </div>
          <div className='flex items-center gap-3 mb-3'>
            <AiOutlineMail size={20} color='#f59e0b'/>
            <p className='text-lg'>info@huellitas.com</p>
          </div>
          <div className='flex items-center gap-3'>
            <FaRegClock size={20} color='#f59e0b'/>
            <p className='text-lg'>Lu-Sab: 9:00 - 18:00</p>
          </div>
        </div>
      </div>
      <div className=' mt-8 border-t border-gray-600 pt-4 flex justify-between'>
        <p className='text-sm'>© 2025 Huellitas. Desarrollado por Lourdes Avalos.</p>
      <ul className='flex gap-4 list-none m-0'>
        <li><a href="#" className='text-gray-400 hover:text-white'>Política de Privacidad</a></li>
        <li><a href="#" className='text-gray-400 hover:text-white'>Términos de Servicio</a></li>
      </ul>
      </div>
    </footer>
  )
}

export default Footer