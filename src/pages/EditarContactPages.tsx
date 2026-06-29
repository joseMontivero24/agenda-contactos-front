import { obtenerContactoPorId } from "../services/contactoService";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import type { Contacto } from "../models/Contacto";

export const EditarContactPages = () => {
    const [contacto, setContacto] = useState<Contacto>({
        idContacto: 0,
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        direccion: ""
    })

    useEffect(() => {
        cargarContacto();
    }, []);

    const { id } = useParams();
    const cargarContacto = async () => {
        const idContacto = Number(id);
        const datos = await obtenerContactoPorId(idContacto);
        setContacto(datos);
    }

    return (
        <div className="flex">

            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Editar Contacto</h1>
                <p>{contacto.nombre}</p>
                <p>{contacto.apellido}</p>
                <p>{contacto.telefono}</p>
                <p>{contacto.email}</p>
                <p>{contacto.direccion}</p>
            </main>
        </div>
    )
}
