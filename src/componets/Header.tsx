import { FaPlus } from "react-icons/fa"


export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-shadow-slate-800">Contactos</h1>

        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition duration-300">
            <FaPlus/>
            Nuevo Contacto
        </button>
    </header>
  )
}
