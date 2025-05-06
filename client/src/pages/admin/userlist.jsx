import { useEffect, useState } from "react";
import { deleteuser, viewuser } from "../authslice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

function AdminUserlist() {
  const [user, setuser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchuser() {
      try {
        const userlist = await dispatch(viewuser());
        setuser(userlist.payload || []);
      } catch (error) {
        console.log("some error", error);
      }
    }
    fetchuser();
  }, []);
  function handleDelete(id){
    const confirmdelete = window.confirm("Are you sure you want to delete this user?");
    if(confirmdelete){
        dispatch(deleteuser(id)).then((data)=>{
            if(data?.payload?.success){
                toast.success("User deleted successfully");
                window.location.reload();
            }else {
                toast.error("Failed to delete user");
                console.log(data?.payload?.message);
            }
        })
    }
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <td className="border p-2">S.No</td>
            <td className="border p-2">Name</td>
            <td className="border p-2">Email</td>
            <td className="border p-2">Delete</td>
          </tr>
        </thead>
        <tbody>
          {user.map((user, idx) => (
            <tr key={idx} className="text-center">
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <button className=" p-2 cursor-pointer" onClick={()=>{handleDelete(user._id)}}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUserlist;
