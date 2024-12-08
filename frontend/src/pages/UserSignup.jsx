import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

const UserSignup = () => {

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submitHandler = async (e) => {

    setLoading(true);
    e.preventDefault();

    try {
      const userData = {
        fullName: {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, userData);

      if (response.data.success) {
        setMessage('User registered successfully!');
        navigate('/home');
      } else {
        setError(response.data.message || 'Registration failed. Please try again.');
      }

    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className='w-screen h-screen py-4 px-2'>

      <div className='w-full h-full flex items-center justify-center gap-5'>

        <div className='w-[45%] h-full md:flex hidden'>

        </div>

        <div className='w-full md:w-[45%] h-full flex flex-col justify-between'>
          <div className='m-2'>

            <img className='w-16 mb-8' src="assests/uber-logo-black.png" alt="uber-logo" />
            <form onSubmit={(e) => {
              submitHandler(e)
            }}>

              <label className='text-lg w-1/2  font-medium mb-2'>What's your name</label>
              <div className='flex gap-4 mb-7'>
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                  type="text"
                  placeholder='First name'
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
                <input
                  required
                  className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                  type="text"
                  placeholder='Last name'
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
              </div>

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
                className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
              >{loading? 'Loading please wait' : 'Create account'}</button>

            </form>


            <div className='flex gap-2'>
              <p>Already user?</p> <Link className='text-blue-800 hover:text-blue-900' to='/login'>login</Link>
            </div>
          </div>
          <div>
            <p className='text-[0.8rem] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
              Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default UserSignup