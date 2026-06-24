

export const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-8">Agregar Contacto</h1>
        
        <form>
            <div className="grid grid-cols-2 gap-6">
                <div className="mb-4">
                    <label 
                        htmlFor="nombre"
                        className="block mb-2 font-medium">Nombre</label>
                    <input type="text" required name="nombre" id="nombre"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="apellido"
                        className="block mb-2 font-medium">Apellido</label>
                    <input type="text" required name="apellido" id="apellido"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="mb-4">
                    <label 
                        htmlFor="telefono"
                        className="block mb-2 font-medium">Telefono</label>
                    <input type="number" required name="telefono" id="telefono"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="email"
                        className="block mb-2 font-medium">Email</label>
                    <input type="email" required name="email" id="email"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                </div>
            </div>

            <div className="mb-4">
                <label 
                    htmlFor="direccion"
                    className="block mb-2 font-medium">Direccion</label>
                <input type="text" name="direccion" id="direccion"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
            </div>

            <div className="flex justify-end gap-6 mt-8">

                <button 
                    type="submit"
                    className="hover:bg-blue-700 hover:shadow-lg hover:-traslate-y-1 active:traslate-y-0 active:scale-95 px-6 py-3 rounded-lg bg-blue-600 text-white">
                        Guardar
                </button>

                <button 
                    type="button"
                    className="hover:bg-gray-400 hover:shadow-lg hover:-traslate-y-1 active:traslate-y-0 active:scale-95 px-6 py-3 rounded-lg bg-gray-300">
                        Cancelar
                </button>



            </div>
        </form>
    </div>
  )
}
