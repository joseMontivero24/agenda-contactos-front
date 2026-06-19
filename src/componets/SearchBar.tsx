import { FaSearch } from "react-icons/fa"


export const SearchBar = () => {
  return (
    <div className="flex justify-between items-center mb-8">
        {/* Buscador */}
        <div className="relative w-[`400px`]">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input type="text" 
            name="buscar"
            placeholder="Buscar contacto..."
            className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Select */}
        <select className="border border-gray-300 rounded-xl px-4 py-3 bg-white">
            <option>Ordenar por: Nombre (A-Z)</option>
            <option>Ordenar por: Nombre (Z-A)</option>
        </select>
    </div>
  )
}
