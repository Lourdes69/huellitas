import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import { FaCartArrowDown } from 'react-icons/fa';
import Header from '../Components/estaticos/Header';
import Footer from '../Components/estaticos/Footer';
import ProductosRelacionados from "../Components/ProductosRelacionados";

function DetallesProductos() {
  const { productos, cargando, handleAddToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = productos.find(producto => producto.id === Number(id));
  const [cantidad, setCantidad] = useState(1);

  if (cargando) {
    return <p className="text-center text-orange-600 text-lg mt-10">Cargando producto...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-600 text-lg mt-10">Producto no encontrado</p>;
  }

  return (
    <section>
      <div className=' shadow-lg mb-6'>
        <Header />
      </div>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 border rounded-xl p-6 shadow-lg bg-white">
          <div className="md:w-1/2">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="rounded-lg w-full h-auto object-cover mb-4"
            />
            <div className="flex gap-2">
              <img src={product.imagen} alt="thumb" className="w-16 h-16 rounded-md border" />
              <img src={product.imagen} alt="thumb" className="w-16 h-16 rounded-md border" />
              <img src={product.imagen} alt="thumb" className="w-16 h-16 rounded-md border" />
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">{product.nombre}</h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-gray-600 text-sm">(124 reseñas)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-orange-600">${product.precio}</span>
              <span className="line-through text-gray-400">${(product.precio + 22.5).toFixed(2)}</span>
              <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">Ahorra $22.50</span>
            </div>
            <p className="text-gray-700">{product.descripcion}</p>
            <div className="text-green-600 font-semibold">
              {product.stock > 0 ? `${product.stock} unidades disponibles` : "Sin stock"}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Cantidad:</span>
              <div className="flex border rounded-md">
                <button
                  className="px-3 py-1 hover:bg-orange-300"
                  onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
                  disabled={cantidad <= 1}
                >-</button>
                <input
                  type="number"
                  value={cantidad}
                  readOnly
                  className="w-12 text-center border-l border-r"
                />
                <button
                  className="px-3 py-1 hover:bg-orange-300"
                  onClick={() => setCantidad(cantidad < product.stock ? cantidad + 1 : cantidad)}
                  disabled={cantidad >= product.stock}
                >+</button>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <div className="">
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
                  onClick={() => handleAddToCart({ ...product, cantidad })}
                >
                  <FaCartArrowDown size={20} className='text-white' />
                  Agregar al Carrito
                </button>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductosRelacionados productoActual={product} productos={productos} />
      <Footer />
    </section>
  );
}

export default DetallesProductos;
