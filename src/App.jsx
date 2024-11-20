import React from 'react'

import Login from './Login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Member from './Member'
import Home from './Home'
import Profile from './Profile'
import AddMember from './AddMember'
import EditMember from './EditMember'
import Start from './Start'
import MemberDetail from './MemberDetail'
import MemberLogin from './MemberLogin'

function App() {
  
  return (
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard />}>
      <Route path='' element={<Home/>}></Route>
        <Route path='/member' element={<Member/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/create' element={<AddMember/>}></Route>
        <Route path='/memberEdit/:id' element={<EditMember/>}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/memberLogin' element={<MemberLogin />}></Route>
      <Route path='/memberdetail/:id' element={<MemberDetail />}></Route>

      </Routes>
  
   
   </BrowserRouter>
  )
}

export default App
