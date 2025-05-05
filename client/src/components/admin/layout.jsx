import { Outlet } from "react-router-dom";
import Adminsidebar from "./sidebar";

function Adminlayout() {
    return ( 
        <div className="flex h-screen bg-amber-600">
            <div className="w-1/4 bg-yellow-300">
                <Adminsidebar />
            </div>
            <main className="w-3/4 bg-yellow-100 p-4">
                <Outlet />
            </main>
        </div>
     );
}

export default Adminlayout;