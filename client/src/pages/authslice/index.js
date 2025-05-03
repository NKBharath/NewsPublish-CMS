import axios from "axios";

const registeruser = async (formdata) => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', {
        username: formdata.username,
        email: formdata.email,
        password: formdata.password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true // Optional based on your backend
      });
  
      console.log("Response from server:", res.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  export { registeruser };