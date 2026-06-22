import axios from "axios";
import type { Contacto } from "../models/Contacto";

const API_URL = "http://localhost:8080/ac-app/contactos";


export const obtenerContactos = async (): Promise<Contacto[]> => {
  const respuesta = await axios.get<Contacto[]>(API_URL);
  return respuesta.data;
};