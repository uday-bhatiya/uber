import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogoutBtn = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleUserLogout = async () => {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.data.success) {
            localStorage.removeItem('token');
            navigate('/captain-login');
        }
    }
  return (
    <button className='bg-[#111] hover:bg-[#2a2929] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base' onClick={handleUserLogout}>Logout</button>
  )
}

export default CaptainLogoutBtn