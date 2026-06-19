import { FaAddressBook, FaUpload, FaUser, FaUserPlus } from "react-icons/fa"

export const Sidebar = () => {
  
  
  return (
    
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <FaAddressBook size={32}/>
            <div>
              <h1 className="font-bold text-xl">Agenda</h1>
              <p>Contactos</p>
            </div>
          </div>
        </div>


        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-3">
            <li>
              <button className="w-full flex items-center gap-3 bg-blue-600 px-4 py-3 rounded-lg">
                <FaUser/>
                Contactos
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
                <FaUserPlus/>
                Agenda Contacto
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
                <FaUpload />
                Importar contactos
              </button>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <footer className="p-4 border-t border-slate-700">
           © 2026 Agenda Contactos
        </footer>

    </aside>
  )
}
