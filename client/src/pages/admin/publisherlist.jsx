import React, { useEffect, useState } from 'react';

function AllUsers() {
  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Registered Users</h1>
      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Caategory</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Contact No</th>
          </tr>
        </thead>
        {/* <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="text-center">
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}

export default AllUsers;
