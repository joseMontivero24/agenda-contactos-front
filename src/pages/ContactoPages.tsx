// Pagina principal

import { useState } from "react";
import { ContactTable } from "../componets/ContactTable"
import { Header } from "../componets/Header"
import { SearchBar } from "../componets/SearchBar"



export const ContactoPages = () => {

  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="flex">
        

        <div className="flex-1 p-8">
            <Header/>
            <SearchBar
              busqueda={busqueda}
              onBusquedaChange={setBusqueda}
            />
            <ContactTable busqueda={busqueda}/>
        </div>
    </div>
  )
}
