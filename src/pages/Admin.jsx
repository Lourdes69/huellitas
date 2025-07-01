import React, { useContext } from 'react';
import { FaSignOutAlt,  FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import FormularioProducto from '../Components/FomularioProducto';
import FormularioEdicion from '../Components/FormularioEdicion';
import { CartContext } from '../Components/Context/CartContext';
import { AdminContext } from '../Components/Context/AdminContext';


function Admin() {
  const { setIsAuthenticated } = useContext(CartContext);
  const {
    producto,
    cargando,
    open,
    seleccionado,
    openEditor,
    setOpen,
    agregarProducto,
    actualizarProducto,
    setOpenEditor,
    setSeleccionado,
    eliminarProducto
  } = useContext(AdminContext);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <nav className="bg-orange-400 text-white p-4 flex justify-between items-center rounded">
        <h1 className="text-xl font-bold">Huellitas Shop</h1>
        <div className="flex items-center space-x-4">
          <a href="/admin" className="hover:underline text-lg font-bold">Admin</a>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-white text-black px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition duration-300 "
          >
            <FaSignOutAlt color='black'/>
          </button>
        </div>
      </nav>

      <section className="bg-white p-6 rounded shadow mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Panel de Administrador</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-red-500 text-white p-4 rounded shadow">
            <p className="text-sm">Total Productos</p>
            <p className="text-2xl font-bold">{producto.length}</p>
          </div>
          {/* banner estatico */}
          <div className="bg-green-500 text-white p-4 rounded shadow">
            <p className="text-sm">Ventas Hoy</p>
            <p className="text-2xl font-bold">23</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded shadow">
            <p className="text-sm">Stock Bajo</p>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-orange-400 text-white p-4 rounded shadow">
            <p className="text-sm">Ingresos</p>
            <p className="text-2xl font-bold">$2,450</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Productos</h3>
          <button
            onClick={() => setOpen(true)}
            className="bg-orange-500 text-white font-bold px-4 py-2 rounded hover:bg-orange-700"
          >
            + Nuevo Producto
          </button>
        </div>

        {cargando ? (
          <p>Cargando productos...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Producto</th>
                  <th className="py-2 px-4 text-left">Categoría</th>
                  <th className="py-2 px-4 text-left">Precio</th>
                  <th className="py-2 px-4 text-left">Stock</th>
                  <th className="py-2 px-4 text-left">Estado</th>
                  <th className="py-2 px-4 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {producto.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-2 px-4 flex items-center space-x-2">
                      <img src={product.imagen} alt={product.nombre} className="w-10 h-10 rounded-full" />
                      <span>{product.nombre}</span>
                    </td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded text-white text-sm ${product.categoria === 'Perro' ? 'bg-blue-500' : 'bg-teal-500'}`}>{product.categoria}</span>
                    </td>
                    <td className="py-2 px-4">${product.precio}</td>
                    <td className="py-2 px-4">{product.stock}</td>
                    <td className="py-2 px-4">
                      {product.stock <= 5 ? (
                        <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm">Stock Bajo</span>
                      ) : (
                        <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Activo</span>
                      )}
                    </td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => { setOpenEditor(true); setSeleccionado(product); }}
                        className="text-blue-500 hover:text-blue-700"
                      ><FaRegEdit size={20} />
                      </button>
                      <button
                        onClick={() => eliminarProducto(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaRegTrashAlt size={20}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
      {openEditor && (
        <FormularioEdicion
          productoSeleccionado={seleccionado}
          onActualizar={actualizarProducto}
        />
      )}
    </div>
  );
}

export default Admin;
