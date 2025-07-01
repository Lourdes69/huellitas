import React from 'react';
import { Link } from 'react-router-dom';
import { FaDog, FaCat, FaHome, FaStore, FaPaw  } from 'react-icons/fa';
import { MdWarning } from 'react-icons/md';
import Header from '../Components/estaticos/Header';
import "../App.css"

function NotFound() {
  return (
    <>
      <div className="shadow-lg mb-6">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6 h-[120px]">
          <span className="text-9xl font-bold fuente-principal text-orange-500 opacity-20 select-none">4</span>
          <span className="bg-orange-500 p-2 rounded-full shadow-md animate-bounce  text-white flex items-center justify-center">
            <FaPaw size={55}/>
          </span>
          <span className="text-9xl font-bold fuente-principal text-orange-500 opacity-20 select-none">4</span>
        </div>
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-700 mb-2 fuente-principal">¡Ups! Página Perdida</h1>
        <div className='space-y-4 w-full max-w-md '>
        <p className="text-gray-600 mb-3 text-xl">
          Parece que esta página se fue a pasear como un cachorro travieso.{' '}
          <span className="text-orange-500 font-semibold">¡No la podemos encontrar!</span>
        </p>
        </div>

        <div className="flex items-center gap-6 my-6">
          <div className="flex flex-col items-center">
            <div className="bg-orange-400 text-white p-4 rounded-full shadow-md text-2xl">
              <FaDog />
            </div>
            <span className="text-sm mt-2 text-gray-600">Perrito confundido</span>
          </div>
          <span className="text-2xl text-gray-400 font-bold">+</span>
          <div className="flex flex-col items-center">
            <div className="bg-teal-400 text-white p-4 rounded-full shadow-md text-2xl">
              <FaCat />
            </div>
            <span className="text-sm mt-2 text-gray-600">Gatito perdido</span>
          </div>
        </div>

        <div className="shadow-xl p-8 rounded-2xl mt-6 mb-6 border-l-4 border-orange-600 max-w-2xl mx-auto text-sm text-gray-600 space-y-8 bg-white ">
          <div className="flex items-start gap-6">
            <div className="text-orange-600  rounded-full bg-yellow-200 p-3 mt-1"><MdWarning size={25}/></div>
            <div className="text-left">
              <h2 className="font-bold text-lg text-gray-800 mb-1">¿Qué pasó?</h2>
              <p className=" text-sm text-gray-600 leading-relaxed font-semibold">
                La página que buscas no existe o fue movida. Pero no te preocupes, tenemos muchos productos increíbles esperándote en nuestra tienda.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-y-8 sm:space-y-0 sm:space-x-6 flex-col sm:flex-row items-center justify-center w-full max-w-md mt-6">
          <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 px-8 py-3 rounded-xl shadow-lg text-lg transition">
            <FaHome /> Volver al Inicio
          </Link>
          <Link to="/productos" className="bg-[#4f46e5] hover:bg-blue-800 text-white flex items-center gap-2 px-8 py-3 rounded-xl text-lg shadow-lg transition">
            <FaStore /> Ver Productos
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
