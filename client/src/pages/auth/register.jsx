import { Button } from '../../components/ui/button';
import React from 'react'
import { Link } from 'react-router-dom'
import { registeruser } from '../authslice';

function Registerpage () {

    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData(event.target);
        registeruser(formdata).then((data)=>{
            if(data?.payload?.success){
                alert("User Created Successfully")
            }
        })

    }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-left '>
            <h1 className='text-3xl font-bold text-black tracking-tight'>Create New Account</h1>
            <p className='mt-2'>Already have an Account?</p>
            <Link to='/auth/login' className='font-medium ml-2 hover:underline'>Loign</Link>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-gray-700">User Name</label>
                <input type="text" id="username" name='username' className="border border-gray-300 rounded-md p-2" placeholder="Enter User Name" required/>
            </div>
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

export default Registerpage
