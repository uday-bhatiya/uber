import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing, UserLogin, UserSignup, CaptainLogin, CaptainSignup } from './pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-register' element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App