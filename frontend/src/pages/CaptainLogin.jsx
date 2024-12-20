import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext.jsx';

const CaptainLogin = () => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    const captainData = ({
      email: email,
      password: password
    });

    setEmail('');
    setPassword('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
      // console.log(response)

      if (response.data.success) {
        setMessage('Captain logged successfully!');
        setCaptain(response.data.captain);
        localStorage.setItem('token', response.data.token)
        navigate('/captain-home');
      } else {
        setError(response.data.message || 'Registration failed. Please try again.');
      }

    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className='w-screen h-screen py-4 px-2 '>

      <div className='w-full h-full flex items-center justify-center gap-5'>

        <div className='w-full md:w-[45%] h-full flex flex-col justify-between'>

          <div className='m-2'>
            <img className='w-16 mb-2' src="assests/uber-driver.png" alt="uber-logo" />
            <form onSubmit={(e) => submitHandler(e)} className=''>
              <label className='text-lg font-medium mb-2'>What's your email</label>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email"
                placeholder='email@example.com'
              />

              <label className='text-lg font-medium mb-2'>Enter Password</label>

              <input
                className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                required type="password"
                placeholder='password'
              />

              <button
                type='submit'
                className='bg-[#111] hover:bg-[#2a2929] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
              >Login</button>

            </form>

            <div className='flex gap-2'>
              <p>New Captain ?</p> <Link className='text-blue-800 hover:text-blue-900' to='/captain-register'>register</Link>
            </div>
          </div>

          <div className='flex gap-2'>
          <Link 
            to='/login' 
            className='w-full text-white bg-red-600 hover:bg-red-500 py-2 rounded-lg text-center'>Continue as User</Link>
          </div>

        </div>

        <div className='w-[45%] h-full md:flex hidden'>

        </div>

      </div>

    </div>
  )
}

export default CaptainLogin