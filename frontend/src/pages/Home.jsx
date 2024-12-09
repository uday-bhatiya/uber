import React, { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import LogoutBtn from '../components/LogoutBtn.jsx'

const Home = () => {

  const { user} = useContext(UserDataContext)

  return (
    <div>
      <LogoutBtn />
    </div>
  )
}

export default Home