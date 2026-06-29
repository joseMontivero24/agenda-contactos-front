
import { guardarContacto } from "../../services/contactoService";
import Swal from "sweetalert2";
import type { Contacto } from "../../models/Contacto";

type ContactFormProps = {
    contacto: Contacto;
    setContacto: React.Dispatch<React.SetStateAction<Contacto>>;
}

export const ContactForm = ({contacto, setContacto}: ContactFormProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setContacto({
            ...contacto,
            [name]: value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: "¿Guardar contacto?",
            text: "Se guardará el contacto en la base de datos",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sí, guardar",
            confirmButtonColor: "oklch(54.6% 0.245 262.881)",
            cancelButtonText: "Cancelar"
        });
        if (!result.isConfirmed) return;

        try {
            await guardarContacto(contacto);

            setContacto({
                nombre: "",
                apellido: "",
                telefono: "",
                email: "",
                direccion: ""
            });

            Swal.fire({
                title: "Guardado",
                text: "El contacto fue guardado correctamente",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "No se pudo guardar el contacto",
                icon: "error"
            });
        }
    }


    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold mb-8">Agregar Contacto</h1>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    <div className="mb-4">
                        <label
                            htmlFor="nombre"
                            className="block mb-2 font-medium">Nombre</label>
                        <input type="text" required name="nombre" id="nombre"
                            value={contacto.nombre}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="apellido"
                            className="block mb-2 font-medium">Apellido</label>
                        <input type="text" required name="apellido" id="apellido"
                            value={contacto.apellido}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="mb-4">
                        <label
                            htmlFor="telefono"
                            className="block mb-2 font-medium">Telefono</label>
                        <input type="text" required name="telefono" id="telefono"
                            value={contacto.telefono}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-medium">Email</label>
                        <input type="email" required name="email" id="email"
                            value={contacto.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="direccion"
                        className="block mb-2 font-medium">Direccion</label>
                    <input type="text" name="direccion" id="direccion"
                        value={contacto.direccion}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                </div>

                <div className="flex justify-end gap-6 mt-8">

                    <button
                        type="submit"
                        className="hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 px-6 py-3 rounded-lg bg-blue-600 text-white">
                        Guardar
                    </button>

                    <button
                        type="button"
                        className="hover:bg-gray-400 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 px-6 py-3 rounded-lg bg-gray-300">
                        Cancelar
                    </button>



                </div>
            </form>
        </div>
    )
}
