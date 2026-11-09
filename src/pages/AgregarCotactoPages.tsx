import { useState, type ChangeEvent, type SubmitEvent  } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContactForm } from "../componets/forms/ContactForm";
import { guardarContacto } from "../services/contactoService";
import type { Contacto } from "../models/Contacto";

export default function AgregarCotactoPages() {

  const navegate = useNavigate();

  // Estado para almacenar los datos del contacto
  const [contacto, setContacto] = useState<Contacto>({
    
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    direccion: ""
  });

  // Estado para controlar el proceso de guardado
  const [guardando, setGuardando] = useState(false);

  // Actualizar los campos del formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContacto({
      ...contacto,
      [name]: value
    });
  }

  // Enviar el formulario
  const handleSubmit = async (e:  SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

      if (guardando) return;

    // Confirmar antes de guardar
    const resultado = await Swal.fire({
      title: "¿Guardar contacto?",
      text: "Se guardará el contacto en la base de datos",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, guardar",
      confirmButtonColor: "oklch(54.6% 0.245 262.881)",
      cancelButtonText: "Cancelar"
    });

    if (!resultado.isConfirmed) return;

    try {
      setGuardando(true);

      // Enviar los datos a Spring Boot
      await guardarContacto(contacto);

      // Mostrar confirmación de guardado
      await Swal.fire({
        title: "Guardado",
        text: "El contacto fue guardado correctamente",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });

      // Regresar al listado de contactos
      navegate("/");

    } catch (error) {
      console.error("Error al guardar el contacto:", error);

      await Swal.fire({
        title: "Error",
        text: "No se pudo guardar el contacto",
        icon: "error"
      });

    } finally {
      setGuardando(false);
    }
  };
  return (

    <ContactForm 
      contacto={contacto} 
      onChange={handleChange} 
      onSubmit={handleSubmit}
      modo="agregar"
      guardando={guardando}
      onCancelar={()=> navegate("/")}  
    />  
  )
}
