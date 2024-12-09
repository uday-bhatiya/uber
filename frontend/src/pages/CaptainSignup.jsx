import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext.jsx';

const CaptainSignup = () => {

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {

    setLoading(true);
    e.preventDefault();

    try {

      const captainData = {
        fullName: {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: color,
          plate: plate,
          capacity: capacity,
          vehicleType: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      if (response.data.success) {
        setMessage('Captain registered successfully!');
        setCaptain(response.data.captain);
        localStorage.setItem('token', response.data.token);
        navigate('/captain-home');
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
      setColor('');
      setPlate('');
      setCapacity('');
      setVehicleType('');
    }
  }

  return (
    <div className='w-screen h-screen py-4 px-2'>

      <div className='w-full h-full flex items-center justify-center gap-5'>

        <div className='w-full md:w-[45%] h-full flex flex-col justify-between'>

          <div className='m-2'>

            <img className='w-16 mb-8' src="assests/uber-driver.png" alt="uber-logo" />

            <form onSubmit={(e) => {
              submitHandler(e)
            }}>

              <label className='text-lg w-full  font-medium mb-2'>Captain's name</label>
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

              <label className='text-lg font-medium mb-2'>Captain's email</label>
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

              <label className='text-lg font-medium mb-2'>Vehicle Information</label>
              <div className='flex gap-4 mb-7'>
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  type="text"
                  placeholder='Vehicle Color'
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value)
                  }}
                />
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  type="text"
                  placeholder='Vehicle Plate'
                  value={plate}
                  onChange={(e) => {
                    setPlate(e.target.value)
                  }}
                />
              </div>
              <div className='flex gap-4 mb-7'>
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  type="number"
                  placeholder='Vehicle Capacity'
                  value={capacity}
                  onChange={(e) => {
                    setCapacity(e.target.value)
                  }}
                />
                <select
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                  value={vehicleType}
                  onChange={(e) => {
                    setVehicleType(e.target.value)
                  }}
                >
                  <option value="" disabled>Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="motorcycle">Moto</option>
                </select>
              </div>

              <button
                type='submit'
                className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
              >{loading ? 'Loading please wait' : 'Create account'}</button>

            </form>

            <div className='flex gap-2'>
              <p>Already captain?</p> <Link className='text-blue-800 hover:text-blue-900' to='/captain-login'>login</Link>
            </div>

          </div>
          <div>
            <p className='text-[0.8rem] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
              Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
        </div>

        <div className='w-[45%] h-full md:flex hidden'>

        </div>

      </div>

    </div>
  )
}

export default CaptainSignup