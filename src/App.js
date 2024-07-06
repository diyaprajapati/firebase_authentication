import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create'
import Login from './components/Login'
import Main from './components/Main';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
