import { Outlet } from "react-router-dom";
import Userheader from "./header";
import Userfooter from "./footer";

function Userlayout() {
    return ( 
        <div className="flex flex-col bg-red-500">
            <Userheader/>
            <main className="w-full bg-yellow-50 p-1 h-screen">
                <Outlet/>
            </main>
            <Userfooter/>
        </div>
     );
}

export default Userlayout;