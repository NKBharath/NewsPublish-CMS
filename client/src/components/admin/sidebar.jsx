import { useNavigate } from "react-router-dom";

function Adminsidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-6 p-4">
      <div className="text-4xl font-bold tracking-tight text-black text-center mt-4">
        Admin panel
      </div>
      <div onClick={()=>{navigate('/admin/viewpublisher')}} className="ml-2 text-2xl font-semibold tracking-tighter">
        Publisher List
      </div>
      <div onClick={()=>{navigate('/admin/viewuser')}} className="ml-2 text-2xl font-semibold tracking-tighter">
        User List
      </div>
      <div
        className="ml-2 text-2xl font-semibold tracking-tighter cursor-pointer"
        onClick={ () =>{ navigate("/admin/addpublisher")}}
      >
        Add Publisher
      </div>
      <div className="ml-2 text-2xl font-semibold tracking-tighter">
        Edit Publisher
      </div>
      <div className="ml-2 text-2xl font-semibold tracking-tighter">
        View Publications
      </div>
      <div className="ml-2 text-2xl font-semibold tracking-tighter">
        Post News
      </div>
    </div>
  );
}

export default Adminsidebar;
