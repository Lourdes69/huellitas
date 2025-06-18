
import React, {useContext} from 'react'
import Header from '../Components/estaticos/Header'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductList from '../Components/ProductList'
import { CartContext } from '../Components/Context/CartContext';

function Gallery() {

  const{cargando} = useContext(CartContext)

  return (
    <>
      <Header />
      <div>

        {
          cargando ? <AiOutlineLoading3Quarters /> :
            <ProductList />
        }

      </div>
    </>
  )
}

export default Gallery
