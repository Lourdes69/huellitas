import { useContext } from 'react';
import Header from "../Components/estaticos/Header"
import Image from "../../public/imgheader.png"
import ProductList from '../Components/ProductList'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Category from '../Components/estaticos/Category';
import Footer from '../Components/estaticos/Footer';
import { CartContext } from '../Components/Context/CartContext';



function Home() {
 const {  cargando, } = useContext(CartContext);
  return (
  <>
      <Header />
    
      <main className="relative bg-fixed bg-center bg-cover h-[535px] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="bg-white/70 p-6 rounded">
          <h1 className="text-4xl font-bold text-black">Bienvenido a nuestra tienda</h1>
          <p className="text-lg text-black mt-2">Tu mascota merece una vida llena de sabor y bienestar.</p>
          <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded">Ver productos</button>
        </div>
      </main>
      <Category />
      {
        cargando ? <AiOutlineLoading3Quarters /> :
         <ProductList />
      }
     <Footer />
      
      </>

  )
}

export default Home
