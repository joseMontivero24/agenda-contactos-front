// Pagina principal

import { ContactTable } from "../componets/ContactTable"
import { Header } from "../componets/Header"
import { SearchBar } from "../componets/SearchBar"



export const ContactoPages = () => {
  return (
    <div className="flex">
        

        <div className="flex-1 p-8">
            <Header/>
            <SearchBar/>
            <ContactTable/>
        </div>
    </div>
  )
}
