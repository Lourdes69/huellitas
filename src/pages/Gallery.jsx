
import React from 'react'
import Header from '../Components/estaticos/Header'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductList from '../Components/ProductList'

function Gallery({ productos, cargando, agregarAlCarrito }) {
  return (
    <>
      <Header />
      <div>

        {
          cargando ? <AiOutlineLoading3Quarters /> :
            <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />
        }

      </div>
    </>
  )
}

export default Gallery
