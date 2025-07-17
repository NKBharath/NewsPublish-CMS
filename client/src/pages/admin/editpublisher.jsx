import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { viewpublisher } from "../authslice";

function AdminEditPublisher() {
  const [publisher, setpublihser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchpublisher() {
      try {
        const publisherlist = await dispatch(viewpublisher());
        setpublihser(publisherlist.payload || []);
      } catch (error) {
        console.log("some error", error);
      }
    }
    fetchpublisher();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Edit Publisher</h1>
      <table className=" border border-collapse border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">S.no</th>
            <th className="border p-2 w-100">Email</th>
          </tr>
        </thead>
        <tbody>
          {publisher.map((user, idx) => (
            <tr key={idx} className="text-center">
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminEditPublisher;
