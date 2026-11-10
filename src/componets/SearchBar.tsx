import { FaSearch } from "react-icons/fa"

type SearchBarProps = {
  busqueda: string;
  onBusquedaChange: (valor: string) => void;
  orden: "asc" | "desc";
  onOrdenChange: (valor: "asc" | "desc") => void
}


export const SearchBar = ({ busqueda, onBusquedaChange, orden, onOrdenChange }: SearchBarProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      {/* Buscador */}
      <div className="relative w-[400px]">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar contacto..."
          value={busqueda}
          onChange={(e) => onBusquedaChange(e.target.value)}
          className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Select */}
      <select
        value={orden}
        onChange={(e) =>
          onOrdenChange(e.target.value as "asc" | "desc")
        }
        className="border border-gray-300 rounded-xl px-4 py-3 bg-white"
      >
        <option value="asc">Ordenar por: Nombre (A-Z)</option>
        <option value="desc">Ordenar por: Nombre (Z-A)</option>
      </select>
    </div>
  )
}
