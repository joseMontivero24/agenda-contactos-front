
import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import type { Contacto } from "../models/Contacto";
import { ContactForm } from "../componets/forms/ContactForm";
import {
  obtenerContactoPorId,
  actualizarContacto
} from "../services/contactoService";

export const EditarContactPages = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [contacto, setContacto] = useState<Contacto | null>(null);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const idContacto = Number(id);

    if (!id || !Number.isSafeInteger(idContacto) || idContacto <= 0) {
      return;
    }

    let activo = true;

    const cargarContacto = async () => {
      try {
        const datos = await obtenerContactoPorId(idContacto);

        if (activo) {
          setContacto(datos);
        }
      } catch (error) {
        console.error("Error al cargar el contacto:", error);

        if (activo) {
          setError("No se pudo cargar el contacto.");
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    };

    void cargarContacto();

    return () => {
      activo = false;
    };
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContacto((anterior) => {
      if (!anterior) return anterior;

      return {
        ...anterior,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contacto || guardando) return;

    const idContacto = Number(id);

    if (!id || !Number.isSafeInteger(idContacto) || idContacto <= 0) {
      return;
    }

    const resultado = await Swal.fire({
      title: "¿Actualizar contacto?",
      text: "Se guardarán los cambios realizados.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar"
    });

    if (!resultado.isConfirmed) return;

    try {
      setGuardando(true);

      await actualizarContacto(idContacto, contacto);

      await Swal.fire({
        title: "Actualizado",
        text: "El contacto se actualizó correctamente.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });

      navigate("/");

    } catch (error) {
      console.error("Error al actualizar el contacto:", error);

      await Swal.fire({
        title: "Error",
        text: "No se pudo actualizar el contacto.",
        icon: "error"
      });
    } finally {
      setGuardando(false);
    }
  };

  if (!id || !Number.isSafeInteger(Number(id)) || Number(id) <= 0) {
    return <p>El ID del contacto no es válido.</p>;
  }

  if (cargando) {
    return <p>Cargando contacto...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!contacto) {
    return <p>No se encontró el contacto.</p>;
  }

  return (
    <ContactForm
      contacto={contacto}
      onChange={handleChange}
      onSubmit={handleSubmit}
      modo="editar"
      guardando={guardando}
      onCancelar={() => navigate("/")}
    />
  );
};
