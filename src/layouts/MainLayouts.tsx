import { Outlet } from "react-router-dom"
import { Sidebar } from "../componets/Sidebar"


export const MainLayouts = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar/>

        <main className="flex-1 p-8 bg-slate-50">
            <Outlet/>
        </main>

    </div>
  )
}
