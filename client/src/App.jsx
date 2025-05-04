import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registerpage from './pages/auth/register'
import Loginpage from './pages/auth/login'
import AuthLayout from './components/auth/authlayout'
import Userlayout from './components/user/layout'
import Userhome from './pages/user/home'
import Publishlayout from './components/publisher/layout'
import Publishhome from './pages/publisher/home'
import Checkauth from './components/common/check-auth'
import { useSelector } from 'react-redux'
const App = () => {
  const {user, isAuthenticated} = useSelector((state)=>(state.auth));
  return (
    <Routes>
      <Route path='/auth' element={
        <Checkauth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout/>
        </Checkauth>
      }>
        <Route path='register' element={<Registerpage/>}/>
        <Route path='login' element={<Loginpage/>}/>
      </Route>
      <Route path='/user' element={
        <Checkauth isAuthenticated={isAuthenticated} user={user}>
          <Userlayout/>
        </Checkauth>
      }>
        <Route path='home' element={<Userhome/>}/>
      </Route>
      <Route path='/publisher' element={
        <Checkauth isAuthenticated={isAuthenticated} user={user}>
          <Publishlayout/>
        </Checkauth>
      }>
        <Route path='home' element={<Publishhome/>}/>
      </Route>
    </Routes>
  )
}

export default App