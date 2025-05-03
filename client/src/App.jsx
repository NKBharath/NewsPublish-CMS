import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registerpage from './pages/auth/register'
import Loginpage from './pages/auth/login'
import AuthLayout from './components/auth/authlayout'
const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<AuthLayout/>}>

        <Route path='register' element={<Registerpage/>}/>
        <Route path='login' element={<Loginpage/>}/>
      </Route>
    </Routes>
  )
}

export default App