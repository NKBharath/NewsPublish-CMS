import { Outlet } from "react-router-dom";
import Publisherheader from "./header";
import Publishersidebar from "./sidebar";
import Publishfooter from "./footer";

function Publishlayout() {
    return ( 
        <div className="flex flex-row ">
            <div className="hidden lg:flex w-1/4 bg-blue-500 h-screen">
                <Publishersidebar />
            </div>
            <div className="w-full bg-yellow-50 p-1 h-screen">
                <div className="hidden lg:flex h-20 font-bold text-xl p-4 items-center justify-center " >
                    <Publisherheader/>
                </div>
                <main className="w-full bg-yellow-50 p-1 h-screen">
                    <Outlet/>
                </main>
                <div className="w-full p-2">
                    <Publishfooter />
                </div>
            </div>

        </div>
     );
}

export default Publishlayout;