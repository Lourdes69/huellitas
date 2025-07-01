import React from 'react'
import perro from "../../../public/oferta.png"
import gato from "../../../public/gato.png"
import juguetes from "../../../public/juguetes.png"
import comida from "../../../public/comida.png"
import accesorio from "../../../public/accesorio.png"
import '../../App.css'
const Category = () => {
  return (
    <section className=' py-10'>
      <h2 className=' text-3xl px-9 font-bold mt-14 text-center fuente-principal'>Nuestras Categorías</h2>
      <div className='object-contain flex flex-row justify-around  mt-4 py-2 px-9 flex-wrap gap-4 cursor-pointer'>
        <div className='flex flex-col items-center gap-2 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-b-2xl border-b-4 border-b-orange-400 hover:scale-105 bg-white'>
          <img className='w-[166px] h-[160px] rounded-t-2xl transition-transform duration-300' src={perro} alt="Perro" />
          <span className='text-gray-800 font-medium py-3'> Perros</span>
        </div>
        <div className='flex flex-col items-center gap-2 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-b-2xl border-b-4 border-b-orange-400 hover:scale-105 bg-white'>
          <img className='w-[166px] h-[160px] rounded-t-2xl transition-transform duration-300' src={gato} alt="Gato" />
          <span className='text-gray-800 font-medium py-3'> Gatos</span>
        </div>
        <div className='flex flex-col items-center gap-2 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-b-2xl border-b-4 border-b-orange-400 hover:scale-105 bg-white'>
          <img className='w-[166px] h-[160px] rounded-t-2xl object-contain transition-transform duration-300' src={juguetes} alt="juguetes" />
          <span className="text-gray-800 font-medium py-3" > Juguetes</span>
        </div>
        <div className='flex flex-col items-center gap-2 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-b-2xl border-b-4 border-b-orange-400 hover:scale-105 bg-white'>
          <img className='w-[166px] h-[160px] rounded-t-2xl transition-transform duration-300' src={comida} alt="juguetes" />
          <span className="text-gray-800 font-medium py-3" > Comidas</span>
        </div>
        <div className='flex flex-col items-center gap-2 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-b-2xl border-b-4 border-b-orange-400 hover:scale-105 bg-white'>
          <img className='w-[166px] h-[160px] rounded-t-2xl transition-transform duration-300' src={accesorio} alt="juguetes" />
          <span className="text-gray-800 font-medium py-3" >Accesorios</span>
        </div>
      </div>

    </section>
  )
}

export default Category
