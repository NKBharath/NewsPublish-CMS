import axios from "axios";

export const registeruser = async(formdata) =>{
    const response = await axios.post(" http://localhost:3000/api/auth/register",formdata,{
        withcredentials:true,
    })
    return response.data;
}