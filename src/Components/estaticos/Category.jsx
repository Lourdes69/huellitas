
import React from 'react'
import oferta from "../../../public/oferta.png"
import perro from  "../../../public/perro.png"
import gato from "../../../public/gato.png"

const Category = () => {
  return (
    <div className=''>
      <h2 className='text-slate-900 text-3xl px-9 mt-14'>Nuestras Categorías</h2>
      <ul className='object-contain flex justify-around gap-8 mt-4 py-2 px-9 '>
        <li><img className='w-[434px] h-[534px] ' src={oferta} alt="Oferta" /></li>
        <li><img className='w-[434px] h-[534px] ' src={perro} alt="Perro" /></li>
        <li><img className='w-[434px] h-[534px] ' src={gato} alt="Gato" /></li>
      </ul>
    </div>
  )
}

export default Category
