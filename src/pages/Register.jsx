import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Context/AuthContext';
import logoPerfil from "../../public/logo.ico";
import logo from "../../public/img-login.png";
import { FaGoogle, FaRegHeart, FaRegWindowClose, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';


const Register = () => {
    const navigate = useNavigate();
    const { email, setEmail, password, setPassword, error, register } = useAuth();
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!email || !password) return;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        await register();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden my-6">
                <button
                    className="absolute top-4 right-6 text-orange-400 hover:text-orange-700 text-2xl font-bold z-10"
                    onClick={() => navigate('/')}
                    aria-label="Cerrar"
                >
                    <FaRegWindowClose size={30} />
                </button>
                <div className="md:w-1/2 p-10 bg-gradient-to-br from-orange-300 to-blue-300 text-white flex flex-col items-center justify-center">
                    <div className="text-center">
                        <img src={logoPerfil} alt="" className="w-2/3 mx-auto mb-4" />
                        <img src={logo} alt="Mascotas" className="mx-auto mb-6 w-64 h-64 rounded-2xl" />
                        <ul className="space-y-4 text-white font-bold text-left">
                            <li className="flex items-center text-lg gap-2">
                                <FaRegHeart size={20} /> Productos de calidad
                            </li>
                            <li className="flex items-center text-lg gap-2">
                                <TbTruckDelivery size={25} /> Envío gratis
                            </li>
                            <li className="flex items-center text-lg gap-2">
                                <BsFillStarFill size={20} /> Miles de clientes felices
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 p-10">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">¡Crear Cuenta!</h2>
                    <p className="text-center text-gray-600 font-semibold mb-6">Únete a nuestra comunidad de amantes de mascotas</p>
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="mb-2 block">Nombre</label>
                                <div className="relative mt-2">
                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        className="w-full pl-10 py-3 font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block">Apellido</label>
                                <div className="relative mt-2">
                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Tu apellido"
                                        className="w-full pl-10 py-3 border font-semibold border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 block">Correo Electronico</label>
                            <div className="relative mt-2">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 py-3 border font-semibold border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                                    required
                                />
                            </div>
                            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                        </div>
                        <div>
                            <label className="mb-2 block">Contraseña</label>
                            <div className="relative mt-2">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="Tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 py-3 border font-semibold border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 block">Confirmar Contraseña</label>
                            <div className="relative mt-2">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="Confirma tu contraseña"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full pl-10 py-3 border font-semibold border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 text-white font-bold rounded-lg bg-gradient-to-r from-orange-300 to-[#4f46e5] hover:opacity-90"
                        >
                            Crear Cuenta
                        </button>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-sm text-gray-500">O continúa con</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 w-2/3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                            >
                                <FaGoogle /> Google
                            </button>
                        </div>
                        <div className="text-center text-sm mt-2">
                            ¿Ya tienes cuenta? <a href="/login" className="text-orange-500 hover:underline">Inicia sesión aquí</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
