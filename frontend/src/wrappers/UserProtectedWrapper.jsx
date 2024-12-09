import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const location = useLocation();
    const {user, setUser, loading, setLoading} = useContext(UserDataContext);

    useEffect(() => {
        const verifyUser = async () => {
            setLoading(true);
            if (!token) {
                navigate('/login');
            } 
    
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.data.success) {
                    setUser(response.data.user);
                }
            } catch (error) {
                localStorage.removeItem('token');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        verifyUser();

    }, [ token ])

  return children;
}

export default UserProtectedWrapper