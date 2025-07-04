import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from './Context/CartContext'
import  "../App.css";
import SeccionPromocional from './estaticos/SeccionPromocional';
import Footer from './estaticos/Footer';
import FiltroProductos from './FiltroProductos';
import Testimonials from './Testimonials';

function ProductList({ limit, mostrarTitulo = true, mostrarFiltro = true, titulo = "Productos Destacados" }) {
  const { productosFiltrados } = useContext(CartContext);

  const productosAMostrar = limit ? productosFiltrados.slice(0, limit) : productosFiltrados;

  return (
    <>
      <section className='mt-10 px-4 bg-[#f3f4f6] py-12'>
        {mostrarFiltro && <FiltroProductos />}
        <div className='mx-auto px-4 container'>
          {mostrarTitulo && (
            <h1 className='text-slate-900 text-3xl font-bold fuente-principal'>{titulo}</h1>
          )}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
            {productosAMostrar.map((producto) => (
              <Productos key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <SeccionPromocional />
      <Footer />
    </>
  )
}

export default ProductList