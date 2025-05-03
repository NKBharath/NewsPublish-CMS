import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-red-500 w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            News Publish CMS
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
