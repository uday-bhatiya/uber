import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext.jsx';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { captain, setCaptain, loading, setLoading } = useContext(CaptainDataContext);

    useEffect(() => {
        const verifyCaptain = async () => {
            setLoading(true);
            
            if (!token) {
                navigate('/captain-login');
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data.success) {
                    setCaptain(response.data.captain);
                }
            } catch (error) {
                localStorage.removeItem('token');
                navigate('/captain-login');
            } finally {
                setLoading(false);
            }
        }

        verifyCaptain();
    }, [token])
  return children;
}

export default CaptainProtectedWrapper