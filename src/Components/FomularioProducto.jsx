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
        <form className='bg-white p-4 rounded shadow flex flex-col w-1/2 justify-center' onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>

            <div className="mb-4 ">
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                />
                {errores.nombre && <span className="text-red-600">{errores.nombre}</span>}
            </div>
            <div className="mb-4">
                <label htmlFor="precio">Precio</label>
                <input
                    type="text"
                    name="precio"
                    placeholder="Precio"
                    value={producto.precio}
                    onChange={handleChange}
                />
                {errores.precio && <span className="text-red-600">{errores.precio}</span>}
            </div>
            <div className="mb-4">
                <label htmlFor="descripcion">Descripción</label>
                <input
                    type="text"
                    name="descripcion"
                    placeholder="Descripción"
                    value={producto.descripcion}
                    onChange={handleChange}
                />
                {errores.descripcion && <span className="text-red-600">{errores.descripcion}</span>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Agregar</button>

        </form>
    )
}

export default FormularioProducto