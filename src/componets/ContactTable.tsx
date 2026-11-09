
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import type { Contacto } from "../models/Contacto";
import { obtenerContactos, eliminarContacto } from "../services/contactoService";


type ContactTableProps = {
    busqueda: string;

}

export const ContactTable = ({ busqueda }: ContactTableProps) => {

    const [contactos, setContactos] = useState<Contacto[]>([]);
    const [cargando, setCargando] = useState(true);
    const [eliminandoId, setEliminandoId] = useState<number | null>(null);
    const [error, setError] = useState("");

    const contactosFiltrados = contactos.filter((contacto) => {
        const texto = busqueda.trim().toLocaleLowerCase();
        return (
            contacto.nombre.toLocaleLowerCase().includes(texto) ||
            contacto.apellido.toLocaleLowerCase().includes(texto) ||
            contacto.telefono.toLocaleLowerCase().includes(texto) ||
            contacto.email.toLocaleLowerCase().includes(texto)
        )
    })

    const navigate = useNavigate();

    // Obtener contactos desde Spring Boot
    useEffect(() => {
        let activo = true;

        const cargarContactos = async () => {
            try {
                const datos = await obtenerContactos();

                if (activo) {
                    setContactos(datos);
                }
            } catch (error) {
                console.error("Error al obtener contactos:", error);

                if (activo) {
                    setError("No se pudieron cargar los contactos.");
                }
            } finally {
                if (activo) {
                    setCargando(false);
                }
            }
        };

        void cargarContactos();

        return () => {
            activo = false;
        };
    }, []);

    // Eliminar un contacto
    const handleEliminar = async (contacto: Contacto) => {

        if (contacto.idContacto === undefined || eliminandoId !== null) {
            return;
        }

        const idContacto = contacto.idContacto;

        const resultado = await Swal.fire({
            title: "¿Eliminar contacto?",
            text: `Se eliminará a ${contacto.nombre} ${contacto.apellido}. Esta acción no se puede deshacer.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#dc2626"
        });

        if (!resultado.isConfirmed) return;

        try {
            setEliminandoId(idContacto);

            // Solicitar la eliminación al backend
            await eliminarContacto(idContacto);

            // Actualizar la tabla sin recargar la página
            setContactos((contactosActuales) =>
                contactosActuales.filter(
                    (item) => item.idContacto !== idContacto
                )
            );

            await Swal.fire({
                title: "Eliminado",
                text: "El contacto fue eliminado correctamente.",
                icon: "success",
                timer: 1800,
                showConfirmButton: false
            });

        } catch (error) {
            console.error("Error al eliminar contacto:", error);

            await Swal.fire({
                title: "Error",
                text: "No se pudo eliminar el contacto.",
                icon: "error"
            });

        } finally {
            setEliminandoId(null);
        }
    };

    if (cargando) {
        return <p className="p-4">Cargando contactos...</p>;
    }

    if (error) {
        return <p className="p-4 text-red-600">{error}</p>;
    }

    return (
        <div className="bg-white rounded-xl shadow border overflow-x-auto">

            <table className="w-full">

                <thead>
                    <tr className="border-b bg-slate-100">
                        <th className="text-left p-4">ID</th>
                        <th className="text-left p-4">Nombre</th>
                        <th className="text-left p-4">Teléfono</th>
                        <th className="text-left p-4">Email</th>
                        <th className="text-left p-4">Dirección</th>
                        <th className="text-left p-4">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {contactosFiltrados.map((contacto) => (

                        <tr
                            key={contacto.idContacto}
                            className="border-b hover:bg-slate-50"
                        >

                            <td className="p-4">
                                {contacto.idContacto}
                            </td>

                            <td className="p-4">
                                {`${contacto.nombre} ${contacto.apellido}`}
                            </td>

                            <td className="p-4">
                                {contacto.telefono}
                            </td>

                            <td className="p-4">
                                {contacto.email}
                            </td>

                            <td className="p-4">
                                {contacto.direccion}
                            </td>

                            <td className="p-4">
                                <div className="flex items-center">

                                    <button
                                        type="button"
                                        aria-label={`Editar a ${contacto.nombre} ${contacto.apellido}`}
                                        onClick={() =>
                                            navigate(`/editar-contacto/${contacto.idContacto}`)
                                        }
                                        className="hover:bg-blue-200 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 bg-blue-100 text-blue-600 p-2 rounded-lg m-2"
                                    >
                                        <FaEdit />
                                    </button>

                                    <button
                                        type="button"
                                        aria-label={`Eliminar a ${contacto.nombre} ${contacto.apellido}`}
                                        onClick={() => handleEliminar(contacto)}
                                        disabled={eliminandoId !== null}
                                        className="hover:bg-red-200 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 bg-red-100 text-red-600 p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <FaTrash />
                                    </button>

                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

            {contactosFiltrados.length === 0 && (
                <p className="text-center text-gray-500 p-6">
                    {contactos.length === 0
                        ? "No hay contactos registrados."
                        : "No se encontraron contactos con esa búsqueda."}
                </p>
            )}

        </div>
    );
};
