import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContactoPages } from "./pages/ContactoPages"
import AgregarCotactoPages from "./pages/AgregarCotactoPages"
import { MainLayouts } from "./layouts/MainLayouts"



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<MainLayouts/>}>
            <Route path="/" element={<ContactoPages/>}/>
            <Route path="/agregar-contacto" element={<AgregarCotactoPages/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

