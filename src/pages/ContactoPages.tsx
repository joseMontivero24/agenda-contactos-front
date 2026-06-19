// Pagina principal

import { ContactTable } from "../componets/ContactTable"
import { Header } from "../componets/Header"
import { SearchBar } from "../componets/SearchBar"
import { Sidebar } from "../componets/Sidebar"


export const ContactoPages = () => {
  return (
    <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
            <Header/>
            <SearchBar/>
            <ContactTable/>
        </main>
    </div>
  )
}
