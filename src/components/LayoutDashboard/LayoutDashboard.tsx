import { Outlet } from "react-router-dom";


export default function LayoutDashboard() {

    return (
        <div className="bg-gray-100 min-w-screen min-h-screen flex flex-row">
            <div className="min-w-fit">
                <img src="" alt="LOGO" />
                <div>
                    
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}