import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addpublisher } from "../authslice";
import { toast } from "sonner";

function Addpublisher() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const formdata = Object.fromEntries(form.entries());
    dispatch(addpublisher(formdata)).then((data) => {
      if (data?.payload?.success) {
        toast.success("Publisher added successfully");
        navigate("/admin/viewpublisher");
      } else {
        toast.error(data?.payload?.message || "something went rong");
      }
    });
  }
  return (
    <div className="flex flex-col ml-4 text-left items-center justify-center">
      <h1 className="mt-6 mb-6 font-bold tracking-tight text-3xl text-center  text-black">
        Add a publisher
      </h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-lg font-semibold tracking-tight">
            Publisher Name
          </label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Enter publisher name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold tracking-tight">
            Publisher Email
          </label>
          <input
            type="email"
            name="email"
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Enter publisher email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold tracking-tight">
            Publisher Category
          </label>
          <input
            type="text"
            name="category"
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Enter publisher Category"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold tracking-tight">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Enter publisher mobile number"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold tracking-tight">
            Publisher Address
          </label>
          <input
            type="tel"
            name="address"
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Enter publisher mobile number"
            required
          />
        </div>
        
        <button className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600">
          Add Publisher
        </button>
      </form>
    </div>
  );
}

export default Addpublisher;
