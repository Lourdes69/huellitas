import { useContext } from 'react';
import Header from "../Components/estaticos/Header"
import Image from "../../public/banner.png"
import ProductList from '../Components/ProductList'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Category from '../Components/estaticos/Category';
import { CartContext } from '../Components/Context/CartContext';
import { Link } from 'react-router-dom';
import "../App.css";



function Home() {
  const { cargando, } = useContext(CartContext);
  return (
    <>
      <Header />
      <main
        className="relative object-cover bg-fixed bg-center bg-cover h-[300px] sm:h-[400px] md:h-[535px] flex items-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="mx-2 mt-6 sm:mx-4 sm:mt-10 md:ml-16 md:mt-20 w-full sm:w-4/5 md:w-1/2 z-10 relative">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-8 fuente-principal">
            Todo para tus mejores amigos
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white font-medium mt-2 w-full sm:w-3/4 md:w-2/3 fuente-principal">
            Encuentra todo lo que tu mascota necesita: alimentos premium, accesorios, juguetes y servicios de cuidado profesional.
          </p>
          <Link to="/productos">
            <button className="mt-4 bg-orange-600 text-sm sm:text-base md:text-xl text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-full fuente-principal transition-opacity hover:bg-[#d97706] w-full sm:w-auto">
              Ver productos
            </button>
          </Link>
        </div>
      </main>
      <Category />
      {
        cargando ? <AiOutlineLoading3Quarters /> :
          <ProductList limit={4} mostrarTitulo={true} mostrarFiltro={false}/>
      }
      

    </>

  )
}

export default Home
