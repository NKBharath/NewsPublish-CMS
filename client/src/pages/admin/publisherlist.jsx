import React, { useEffect, useState } from 'react';
import { viewpublisher } from '../authslice';
import { useDispatch } from 'react-redux';

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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Registered Users</h1>
      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Contact No</th>
          </tr>
        </thead>
         <tbody>
          {publisher.map((user, idx) => (
            <tr key={idx} className="text-center">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.category}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.mobileNumber}</td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
  );
}

export default AllUsers;
