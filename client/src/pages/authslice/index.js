import axios from "axios";


export const registeruser = async(formdata)=>{
  const plainFormData = Object.fromEntries(formdata.entries()); 
  const response = await axios.post('http://localhost:3000/api/auth/register', plainFormData, {
    withCredentials: true,
  });
  return response.data;
}
