import { Outlet } from "react-router-dom";

export default function LayoutDashboard() {

    return (
        <div className="bg-gray-100 min-w-screen min-h-screen flex flex-row text-gray-600 ">
            <div className="min-w-fit bg-cyan-600 py-2">
                <Menu />

            </div>
            <div className="px-6 py-4 w-full">
                <Outlet />

            </div>
        </div>
    )
}

const Menu = () => {



    return (
        <>
            <nav className="w-fit h-screen p-2 absolute md:static">
                <p className="font-bold tracking-wide text-2xl bg-white p-2 rounded-md text-cyan-500">MENU AQUI</p>
            </nav>
        </>

    )
}