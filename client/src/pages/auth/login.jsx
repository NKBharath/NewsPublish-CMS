import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginuser } from '../authslice';
import { toast } from 'sonner';
import { Button } from '../../components/ui/button';
import { useDispatch } from 'react-redux';

const Loginpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const formdata = Object.fromEntries(form.entries());
    dispatch(loginuser(formdata)).then((data)=>{
      if(data?.payload?.success){
        toast.success("User logged in successfully");
        navigate('/user/home');
      }else{
        toast.error(data?.payload?.message );
      }
    })
  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-left '>
            <h1 className='text-3xl font-bold text-black tracking-tight'>Login your Account</h1>
            <p className='mt-2'>New User?</p>
            <Link to='/auth/register' className='font-medium ml-2 hover:underline'>Register</Link>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name='email' className="border border-gray-300 rounded-md p-2" placeholder="Enter your email" required/>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name='password' className="border border-gray-300 rounded-md p-2" placeholder="Enter your password" required/>
            </div>    
            <Button className='mt-2 w-full' type="submit">submit</Button>    
        </form>
    </div>
  )
}

export default Loginpage