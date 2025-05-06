import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const registeruser = createAsyncThunk('/auth/register',async(formdata)=>{
  const response = await axios.post('http://localhost:3000/api/auth/register', formdata, {
    withCredentials: true,
  });
  return response.data;
});

export const loginuser = createAsyncThunk('/auth/login',async(formdata)=>{
  const response = await axios.post('http://localhost:3000/api/auth/login', formdata, {
    withCredentials: true,
  });
  return response.data;
}
);

export const viewuser = createAsyncThunk('/auth/user/viewuser', async()=>{
  const response = await axios.get('http://localhost:3000/api/user/viewuser',{
    withCredentials: true
  })
  return response.data.user;
})

export const deleteuser = createAsyncThunk('/auth/user/deleteuser', async(id)=>{
  const response = await axios.delete(`http://localhost:3000/api/user/deleteuser/${id}`,{
    withCredentials: true,
  })
  return response.data;
})

export const addpublisher = createAsyncThunk('/auth/publisher/registerpublisher', async(formdata)=>{
  const response = await axios.post('http://localhost:3000/api/publisher/registerpublisher', formdata,{
    withCredentials: true,
  });
  return response.data;
})

export const viewpublisher = createAsyncThunk('/auth/publisher/viewpublisher', async()=>{
  const response  = await axios.get('http://localhost:3000/api/publisher/viewpublisher', {
    withCredentials: true,
  })
  return response.data.publisher;
})

export const deletepublisher = createAsyncThunk('/auth/publisher/deletepublisher', async(id)=>{
  const response = await axios.delete(`http://localhost:3000/api/publisher/deletepublisher/${id}`,{
    withCredentials: true,
  })
  return response.data;
})

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetUser: (state, action) => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registeruser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registeruser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registeruser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginuser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  }
});

export const { SetUser, logout } = authslice.actions;
export default authslice.reducer;