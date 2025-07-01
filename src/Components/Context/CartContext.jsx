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
    const [categoria, setCategoria] = useState("Todos"); 

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
    
     const productosFiltrados = productos.filter(producto => {
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoria === "Todos" || producto.categoria === categoria;
        return coincideBusqueda && coincideCategoria;
    });

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

    const handleIncreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock) }
                    : item
            )
        );
    };

    const handleDecreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ).filter(item => item.cantidad > 0)
        );
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
                handleIncreaseQuantity, 
                handleDecreaseQuantity, 
                setIsAuthenticated,
                setBusqueda,
                productosFiltrados,
                busqueda,
                categoria,
                setCategoria    
            }
        }>
            {children}
        </CartContext.Provider>
    );
}