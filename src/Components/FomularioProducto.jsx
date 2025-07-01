import React, { useState } from 'react'

const FormularioProducto = ({ onAgregar }) => {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
    });
    const [errores, setErrores] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onAgregar(producto);
        setProducto({
            nombre: '',
            precio: '',
            descripcion: '',
            imagen: '',
        });
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 my-7">
            <form className="bg-white p-8 rounded-lg border border-gray-300 shadow-2xl w-full max-w-md"
                onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Agregar Producto</h2>

                <div className="mb-4">
                    <label htmlFor="nombre" className="block font-semibold mb-1">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={producto.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errores.nombre && <span className="text-red-600">{errores.nombre}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="precio" className="block font-semibold mb-1">Precio</label>
                    <input
                        type="text"
                        name="precio"
                        placeholder="Precio"
                        value={producto.precio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errores.precio && <span className="text-red-600">{errores.precio}</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="descripcion" className="block font-semibold mb-1">Descripción</label>
                    <input
                        type="text"
                        name="descripcion"
                        placeholder="Descripción"
                        value={producto.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errores.descripcion && <span className="text-red-600">{errores.descripcion}</span>}
                </div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-blue-600 text-white text-lg px-4 py-2 rounded-md font-semibold transition-colors">
                    Agregar
                </button>
            </form>
        </div>
    )
}

export default FormularioProducto