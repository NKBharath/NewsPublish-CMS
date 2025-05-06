import React, { useEffect, useState } from 'react';
import { deletepublisher, viewpublisher } from '../authslice';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

function AllUsers() {
    const [publisher, setpublihser] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        async function fetchpublisher(){
            try{
                const publisherlist = await dispatch(viewpublisher());
                setpublihser(publisherlist.payload || []);
            } catch(error){
                console.log("some error",error);
            }
        }
        fetchpublisher();
    },[]);
    function handleDelete(id){
        const confirmDelete = window.confirm("Are you sure you want to delete this publisher?");
        if(confirmDelete){
          dispatch(deletepublisher(id)).then((data)=>{
            if(data?.payload?.success){
              toast.success("Publisher deleted successfully");
              window.location.reload();
            }else{
              toast.error("Failed to delete publisher");
            }
          })
        }
    }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Registered Users</h1>
      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className='border p-2'>S.No</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Contact No</th>
            <th className='border p-2'>Delete</th>
          </tr>
        </thead>
         <tbody>
          {publisher.map((user, idx) => (
            <tr key={idx} className="text-center">
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.category}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.mobileNumber}</td>
              <td className='border p-2'>
                <button onClick={()=>{handleDelete(user._id)}}>❌</button>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
  );
}

export default AllUsers;
