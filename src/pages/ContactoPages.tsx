// Pagina principal

import { Sidebar } from "../componets/Sidebar"


export const ContactoPages = () => {
  return (
    <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
            <h1 className="text-4xl font-bold">Contactos</h1>
        </main>
    </div>
  )
}
