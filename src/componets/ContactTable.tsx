import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import type { Contacto } from "../models/Contacto";
import { obtenerContactos } from '../services/contactoService';


export const ContactTable = () => {

    const [contactos, setContactos] = useState <Contacto[]>([]);
    
      const cargarContactos = async () => {

    try {

      const datos = await obtenerContactos();
      setContactos(datos);

    } catch(error) {
      console.error(error);
    }

  };
    useEffect(() => {
      cargarContactos();
    }, [])
    



  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full">
            <thead>
                <tr className="border-b bg-slate-100">
                    <th className="text-left p-4">
                        Nombre
                    </th>
                    <th className="text-left p-4">
                        Telefono
                    </th>
                    <th className="text-left p-4">
                        Email
                    </th>
                    <th className="text-left p-4">
                        Dirección
                    </th>
                    <th className="text-center p-4">
                        Acciones
                    </th>
                </tr>
            </thead>
            {/* Aqui va la tabla dinamica */}
            <tbody>
                {
                    contactos.map((contacto, indice) =>(
                        <tr key={indice} className='border-b hover:bg-slate-50'>
                            
                            <th className='p-4'>
                                {contacto.idContacto}
                            </th>
                            <td className='p-4'>
                                {`${contacto.nombre} ${contacto.apellido}`}
                            </td>
                            <td className='p-4'>
                                {contacto.telefono}
                            </td>
                            <td className='p-4'>
                                {contacto.email}
                            </td>
                            <td className='p-4'>
                                {contacto.direccion}
                            </td>

                            {/* Botones Delet-Edit */}
                            <td className='p-4'>
                                <button className='bg-blue-100 text-blue-600 p-2 rounded-lg m-2'>
                                    <FaEdit/>
                                </button>

                                <button className='bg-red-100 text-red-600 p-2 rounded-lg'>
                                    <FaTrash/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
