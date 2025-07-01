import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function ProductosRelacionados({ productoActual, productos }) {
  const relacionados = productos
    .filter(p => p.categoria === productoActual.categoria && p.id !== productoActual.id)
    .slice(0, 3);

  if (relacionados.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold my-4 mx-8 text-gray-800 fuente-principal">Productos relacionados</h2>
      <div className="flex flex-wrap gap-4 mb-6 mx-8 ">
        {relacionados.map(producto => (
          <Link
            to={`/productos/${producto.id}`}
            key={producto.id}
            className="border rounded-lg p-3 shadow hover:shadow-lg transition cursor-pointer bg-white max-w-sm w-60 no-underline text-inherit"
          >
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="font-semibold text-base">{producto.nombre}</h3>
            <p className="text-orange-600 font-bold text-sm">${producto.precio}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductosRelacionados;
