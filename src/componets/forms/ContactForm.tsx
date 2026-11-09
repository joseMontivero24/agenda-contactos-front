
import type { ChangeEvent, SubmitEvent } from "react";
import type { Contacto } from "../../models/Contacto";


type ContactFormProps = {
    contacto: Contacto;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
    modo?: "agregar" | "editar";
    onCancelar?: () => void;
    guardando?: boolean;
}

export const ContactForm = ({ contacto, onChange, onSubmit, modo = "agregar", onCancelar, guardando = false }: ContactFormProps) => {

    const esEdicion = modo === "editar";

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold mb-8">
                {esEdicion ? "Editar Contacto" : "Agregar Contacto"}
            </h1>

            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    <div className="mb-4">
                        <label
                            htmlFor="nombre"
                            className="block mb-2 font-medium">
                            Nombre
                        </label>
                        <input type="text" required name="nombre" id="nombre"
                            value={contacto.nombre}
                            onChange={onChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="apellido"
                            className="block mb-2 font-medium">Apellido</label>
                        <input type="text" required name="apellido" id="apellido"
                            value={contacto.apellido}
                            onChange={onChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="mb-4">
                        <label
                            htmlFor="telefono"
                            className="block mb-2 font-medium">Telefono</label>
                        <input type="tel" required name="telefono" id="telefono"
                            value={contacto.telefono}
                            onChange={onChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-medium">Email</label>
                        <input type="email" required name="email" id="email"
                            value={contacto.email}
                            onChange={onChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="direccion"
                        className="block mb-2 font-medium">Direccion</label>
                    <input type="text" name="direccion" id="direccion"
                        value={contacto.direccion}
                        onChange={onChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                </div>

                <div className="flex justify-end gap-6 mt-8">

                    <button
                        type="submit"
                        disabled={guardando}
                        className="hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 px-6 py-3 rounded-lg bg-blue-600 text-white"
                        >
                        {
                            guardando ? "Guardando..." : esEdicion ? "Guardar cambios" : "Guardar"
                        }
                    </button>

                    <button
                        type="button"
                        onClick={onCancelar}
                        disabled={guardando}
                        className="hover:bg-gray-400 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 px-6 py-3 rounded-lg bg-gray-300">
                        Cancelar
                    </button>



                </div>
            </form>
        </div>
    )
}
