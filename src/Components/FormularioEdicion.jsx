import React, { useEffect, useState } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado);

    useEffect(() => {
        setProducto(productoSeleccionado);
    }, [productoSeleccionado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };

    return (
        <div className='flex items-center justify-center bg-gray-100 my-7'>

            <form className='bg-white p-8  rounded-lg border border-gray-300 shadow-2xl w-full max-w-md' onSubmit={(e) => {
                e.preventDefault();
                onActualizar(producto);
            }}>
                <h2 className='text-2xl font-bold mb-6 text-center'>Editar Producto</h2>
                <div className='mb-4'>
                    <label className='block font-semibold mb-1'>ID</label>
                    <input
                        type="text"
                        name="id"
                        value={producto.id || ''}
                        onChange={handleChange}
                        readOnly
                        className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'

                    />
                </div>
                <div className='mb-4'>
                    <label className='block font-semibold mb-1'>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={producto.nombre || ''}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block font-semibold mb-1'>Precio</label>
                    <input
                        type="text"
                        name="precio"
                        value={producto.precio || ''}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block font-semibold mb-1'>Descripción</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={producto.descripcion || ''}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-1'>Imagen</label>
                    <input
                        type="text"
                        name="imagen"
                        value={producto.imagen || ''}
                        onChange={handleChange}
                        className='w-full px-3 py-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>
                <button type="submit" className='w-full bg-orange-600 hover:bg-blue-600 text-white text-lg px-4 py-2 rounded-md font-semibold transition-colors'>Actualizar</button>
            </form>
        </div>
    );
}

export default FormularioEdicion;
