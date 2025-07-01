import React, { useState } from 'react'
import Header from '../Components/estaticos/Header'
import tiendaImg from '../../public/tienda.png'
import Footer from '../Components/estaticos/Footer'
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";



function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: '' }); 
  };

  const validarEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let nuevosErrores = {};

    if (!form.nombre) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!form.email) nuevosErrores.email = 'El email es obligatorio.';
    else if (!validarEmail(form.email)) nuevosErrores.email = 'El email no es válido.';
    if (!form.telefono) nuevosErrores.telefono = 'El teléfono es obligatorio.';
    if (!form.mensaje) nuevosErrores.mensaje = 'El mensaje es obligatorio.';

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setForm({ nombre: '', email: '', telefono: '', mensaje: '' });
      setErrores({});
    }
  };

  return (
    <>
      <div className=' shadow-lg mb-6'>
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row bg-[#FFF8F3] mx-auto my-4 sm:my-8 px-2 sm:px-4 py-4 sm:py-8 rounded-lg overflow-hidden min-h-[650px] shadow-sm w-full max-w-6xl">
        <div className="w-full lg:w-1/2 p-3 sm:p-6 md:p-10 flex flex-col justify-between h-full">
          <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">¡Conecta con Huellitas!</h1>
          <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-2 mt-5">
            <div>
              <h2 className="font-semibold text-xl sm:text-2xl mb-3">Tienda</h2>
              <div className='flex items-center gap-3 mb-3'>
                <SiGooglemaps size={20} color='#f59e0b' />
                <p className='text-base sm:text-lg'>Av. Sarmiento. Arenales 12</p>
              </div>
              <div className='flex items-center gap-3 mb-3'>
                <FaPhoneAlt size={20} color='#f59e0b' />
                <p className='text-base sm:text-lg'>+52-1-33-12345678</p>
              </div>
              <div className='flex items-center gap-3 mb-3'>
                <AiOutlineMail size={20} color='#f59e0b' />
                <p className='text-base sm:text-lg'>info@huellitas.com</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="font-semibold text-xl sm:text-2xl mb-1">Horario laboral</h2>
              <ul className="space-y-2 mt-4 text-base sm:text-lg">
                <li>Lun - Vie: 8:00 - 18:00</li>
                <li>Sábados: 8:00 - 18:00</li>
                <li>Domingos: 10:00 - 16:00</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-3 mb-3 mt-5'>
            <AiOutlineMail size={40} color='#f59e0b' className='rounded-2xl bg-orange-100 p-2 sm:p-3 ' />
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">Envíanos un Mensaje</h2>
          </div>
          <form className="space-y-3 leading-7 mt-2" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="w-full sm:w-1/2 flex flex-col">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className={`w-full py-2 px-2 border ${errores.nombre ? 'border-red-400' : 'border-[#e5e7eb]'} focus:border-orange-600 focus:ring-1 focus:ring-orange-600 focus:outline-none rounded`}
                />
                {errores.nombre && <span className="text-red-500 text-sm mt-1">{errores.nombre}</span>}
              </div>
              <div className="w-full sm:w-1/2 flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full py-2 px-2 border ${errores.email ? 'border-red-400' : 'border-[#e5e7eb]'} focus:border-orange-600 focus:ring-1 focus:ring-orange-600 focus:outline-none rounded`}
                />
                {errores.email && <span className="text-red-500 text-sm mt-1">{errores.email}</span>}
              </div>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={handleChange}
                className={`w-full py-2 px-2 border ${errores.telefono ? 'border-red-400' : 'border-[#e5e7eb]'} focus:border-orange-600 focus:ring-1 focus:ring-orange-600 focus:outline-none rounded`}
              />
              {errores.telefono && <span className="text-red-500 text-sm mt-1">{errores.telefono}</span>}
            </div>
            <div className="flex flex-col">
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows="6"
                value={form.mensaje}
                onChange={handleChange}
                className={`w-full min-h-[120px] sm:min-h-[200px] py-4 px-6 resize-none border ${errores.mensaje ? 'border-red-400' : 'border-[#e5e7eb]'} focus:border-orange-600 focus:ring-1 focus:ring-orange-600 focus:outline-none rounded`}
              ></textarea>
              {errores.mensaje && <span className="text-red-500 text-sm mt-1">{errores.mensaje}</span>}
            </div>
            <button type="submit" className="bg-amber-500 text-white py-2 text-lg font-bold px-3 rounded hover:bg-amber-600 w-full transition-colors duration-300">
              Enviar
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 h-[200px] sm:h-[400px] lg:h-[750px] mt-4 lg:mt-0">
          <img
            src={tiendaImg}
            alt="Interior de la tienda"
            className="h-full w-full object-cover rounded"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contacto
