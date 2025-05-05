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
import Adminhome from './pages/admin/home'
import Adminlayout from './components/admin/layout'
import Addpublisher from './pages/admin/addpublisher'
import AdminPublisherlist from './pages/admin/publisherlist'
const App = () => {
  //const {user, isAuthenticated} = useSelector((state)=>(state.auth));
  const user = "admin";
  const isAuthenticated = true;
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
      <Route path='/admin' element={
        <Checkauth isAuthenticated={isAuthenticated} user={user}>
          <Adminlayout/>
        </Checkauth>
      }>
        <Route path='home' element={<Adminhome/>}/>
        <Route path='addpublisher' element={<Addpublisher/>}/>
        <Route path='publisherlist' element={<AdminPublisherlist/>}/>
      </Route>
    </Routes>
  )
}

export default App