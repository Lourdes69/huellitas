
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false);


    useEffect(() => {
        fetch("/data/data.json")
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProducto(datos)
                setCargando(false)
            })
            .catch(error => {
                console.error("Error al cargar los datos:", error)
                setCargando(false)
                setError(true)
            })
    }, [])



    const cargarProductos = async () => {
        try {
            const res = await fetch("https://684c7334ed2578be881ed91b.mockapi.io/ecommerce/productos");
            const data = await res.json();
            setProducto(data);


        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    };



    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch("https://684c7334ed2578be881ed91b.mockapi.io/ecommerce/productos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            });
            if (!respuesta.ok) {
                throw new Error("Error al agregar producto");
            }
            const data = await respuesta.json();
            Swal.fire({
                title: ":)!",
                text: "Producto agregado exitosamente!",
                icon: "success"
            });
            cargarProductos();
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };

    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`https://684c7334ed2578be881ed91b.mockapi.io/ecommerce/productos/${producto.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            });

            if (!respuesta.ok) {
                throw new Error("Error al actualizar el producto");
            }

            const data = await respuesta.json();
            alert("Producto actualizado exitosamente");
            setOpenEditor(false);
            setSeleccionado(null);
            cargarProductos();
        } catch (error) {
            console.error("Error al actualizar producto:", error);
        }
    };

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (confirmar) {
            try {
                const respuesta = await fetch(`https://684c7334ed2578be881ed91b.mockapi.io/ecommerce/productos/${id}`, {
                    method: "DELETE"
                });

                if (!respuesta.ok) {
                    throw Error("Error al eliminar producto")
                }
                Swal.fire({
                    title: ":(!",
                    text: "Producto eliminado exitosamente!",
                    icon: "error"
                });
                cargarProductos();

            } catch (error) {
                console.error("Error al eliminar producto:", error);
            }
        }
    };
    return (
        <AdminContext.Provider
            value={{
                producto,
                cargando,
                open,
                error,
                seleccionado,
                openEditor,
                setOpen,
                setSeleccionado,
                setOpenEditor,
                agregarProducto,
                actualizarProducto,
                eliminarProducto

            }}>
            {children}
            
        </AdminContext.Provider>
    );
};
