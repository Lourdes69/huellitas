import React, { useContext } from 'react';
import { FaPaw, FaBaseballBall, FaTable, FaBone, FaTag } from "react-icons/fa";
import { CartContext } from './Context/CartContext';
import "../App.css";

const FiltroProductos = () => {
    const { categoria, setCategoria } = useContext(CartContext);

    return (
        <>
            <div className='flex items-center justify-center gap-3 mb-8 flex-col sm:flex-row'>
                <FaPaw size={35} color='orange' />
                <p className='text-gray-800 font-bold text-3xl sm:text-4xl mt-2 fuente-principal text-center sm:text-left'>Productos para tu Mascota</p>
            </div>
            <p className='text-center text-gray-800 text-lg sm:text-xl font-bold mb-6'>Encuentra todo lo que necesita tu mejor amigo</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-10 w-full'>
                <div className="w-full sm:w-auto">
                    <button
                        className={`flex items-center justify-center w-full sm:w-auto gap-2 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl transition-colors ${
                            categoria === 'Todos'
                                ? 'bg-orange-500 text-white hover:bg-orange-400'
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
                        }`}
                        onClick={() => setCategoria('Todos')}
                    >
                        <FaTable />
                        Todos
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button
                        className={`flex items-center justify-center w-full sm:w-auto gap-2 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl transition-colors ${
                            categoria === 'Comidas'
                                ? 'bg-orange-500 text-white hover:bg-orange-400'
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
                        }`}
                        onClick={() => setCategoria('alimento')}
                    >
                        <FaBone />
                        Comidas
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button
                        className={`flex items-center justify-center w-full sm:w-auto gap-2 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl transition-colors ${
                            categoria === 'Juguetes'
                                ? 'bg-orange-500 text-white hover:bg-orange-400'
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
                        }`}
                        onClick={() => setCategoria('juguetes')}
                    >
                        <FaBaseballBall />
                        Juguetes
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button
                        className={`flex items-center justify-center w-full sm:w-auto gap-2 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl transition-colors ${
                            categoria === 'Accesorios'
                                ? 'bg-orange-500 text-white hover:bg-orange-400'
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
                        }`}
                        onClick={() => setCategoria('accesorios')}
                    >
                        <FaTag />
                        Accesorios
                    </button>
                </div>
            </div>
        </>
    )
}

export default FiltroProductos
