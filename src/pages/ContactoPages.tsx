// Pagina principal

import { useState } from "react";
import { ContactTable } from "../componets/ContactTable"
import { Header } from "../componets/Header"
import { SearchBar } from "../componets/SearchBar"



export const ContactoPages = () => {

  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<"asc" | "desc">("asc");

  return (
    <div className="flex">
        

        <div className="flex-1 p-8">
            <Header/>
            <SearchBar
              busqueda={busqueda}
              onBusquedaChange={setBusqueda}
              orden={orden}
              onOrdenChange={setOrden}
            />
            <ContactTable 
              busqueda={busqueda}
              orden={orden}
            />
        </div>
    </div>
  )
}
