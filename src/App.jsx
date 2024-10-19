import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import FormWS from './pages/Nuevoworkpages/FormWS'
import Messages from './pages/Messages/Messages'




function App() {
  return (
  <div className='App'>  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/workspace/new' element={<FormWS/>}/>
      <Route path="/workspace/:workspace_id/:channels_id" element={<Messages/>}/>
    </Routes>
  </div>
  )
}
export default App

