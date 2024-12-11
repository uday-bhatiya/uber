import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing, UserLogin, UserSignup, CaptainLogin, CaptainSignup, Home, CaptainHome, Riding } from './pages';
import UserProtectedWrapper from './wrappers/UserProtectedWrapper.jsx';
import CaptainProtectedWrapper from './wrappers/CaptainProtectedWrapper.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/register' element={<UserSignup />} />
        <Route path='/captain-home' element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-register' element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App