
import React, { useContext } from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import FormularioProducto from '../Components/FomularioProducto';
import FormularioEdicion from '../Components/FormularioEdicion';
import { CartContext } from '../Components/Context/CartContext';
import { AdminContext } from '../Components/Context/AdminContext';


function Admin() {
  const { setIsAuthenticated } = useContext(CartContext)

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
    <div>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-end space-x-4">
              <li className=''>
                <button onClick={() => setIsAuthenticated(false)} className='bg-red-500 text-white px-2 py-1 rounded'>
                  <FaSignOutAlt />
                </button>
              </li>
              <li className=' text-white'>
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </nav>
          <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 m-2 ">
            {producto.map((product) => (
              <li key={product.id} className="bg-white rounded-lg shadow p-4">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="w-1/3 h-32 object-cover mb-4 text-center flex items-center"
                />
                <span className="block font-semibold">{product.nombre}</span>
                <span className="block text-gray-600">${product.precio}</span>
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => { setOpenEditor(true); setSeleccionado(product); }}>Editar</button>

                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={() => setOpen(true)}>Agregar Producto</button>
      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
      {openEditor && (
        <FormularioEdicion
          productoSeleccionado={seleccionado}
          onActualizar={actualizarProducto}
        />
      )}
    </div>
  )
}

export default Admin
