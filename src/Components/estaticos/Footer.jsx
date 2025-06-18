import React from 'react'
import { CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";



function Footer() {
  return (
    <footer className='bg-blue-950 text-white flex justify-around items-center py-11 ' >
      <span className=' text-xl mb-2'>Síguenos
        <ul className='flex gap-3 list-none py-3 m-0'>
          <li><CiFacebook size={25} /></li>
          <li><CiInstagram size={25} /></li>
          <li><CiYoutube size={25} /></li>
        </ul>
      </span>

      <div className=''>
        <h1 className='text-xl mb-2'>Contacto</h1>
        <p>Av. Sarmiento. Arenales 12</p>
        <p>+52-1-33-12345678</p>
      </div>
      <div className='flex flex-col  '>
        <h3 className='text-xl mb-2'>Info</h3>
        <span className=''>Contacto</span>
        <span className=''>Política de privacidad</span>
        <span className=''>Envío y devoluciones</span>

      </div>
    </footer>
  )
}

export default Footer