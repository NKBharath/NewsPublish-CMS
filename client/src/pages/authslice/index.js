import axios from "axios";

const registeruser = async (formdata) => {
  const plainFormData = Object.fromEntries(formdata.entries()); // ✅ convert FormData to plain object

  try {
    const res = await axios.post(
      'http://localhost:3000/api/auth/register',
      plainFormData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    console.log("Response from server:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during registration:", error);
    return { error };
  }
};

export { registeruser };
