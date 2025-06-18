
import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        fetch("/data/data.json")
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProductos(datos)
                setCargando(false)
            })
            .catch(error => {
                console.error("Error al cargar los datos:", error)
                setCargando(false)
                setError(true)
            })
    }, [])

    const productosFiltrados = busqueda
        ? productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        : productos;

    const handleAddToCart = (producto) => {
        const productInCart = cart.find((item) => item.id === producto.id)
        if (productInCart) {
            setCart(
                cart.map((item) =>
                    item.id === producto.id
                        ? {
                            ...item,
                            cantidad: Math.min(item.cantidad + producto.cantidad, item.stock)
                        }
                        : item
                )
            )
        } else {
            toast.success(`Producto ${producto.nombre} agregado al carrito`, {
               
            });
            setCart([...cart, { ...producto }])
        }
    };

    const handleRemoveFromCart = (producto) => {
         toast.error(`Producto ${producto.nombre} se ha eliminado del carrito`, {
               
            });

        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === producto.id) {
                    return { ...item, cantidad: item.cantidad - 1 }
                } else {
                    return item
                }
            }).filter(item => item.cantidad > 0)
        })
    };

    return (

        <CartContext.Provider value={
            {
                cart,
                productos,
                cargando,
                error,
                isAuthenticated,
                handleAddToCart,
                handleRemoveFromCart,
                setIsAuthenticated,
                setBusqueda,
                productosFiltrados,
                busqueda
            }
        }>
            {children}
        </CartContext.Provider>
    );
}