import { FaPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom"



export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-shadow-slate-800">Contactos</h1>

        <button  
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition duration-300"
          onClick={()=> navigate("/agregar-contacto")}
          >
            <FaPlus/>
            Nuevo Contacto
        </button>
    </header>
  )
}
