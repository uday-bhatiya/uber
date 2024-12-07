import React, { useState } from 'react';
import axios from 'axios';

const UserSignup = () => {

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

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
      } else {
        setError(response.data.message || 'Registration failed. Please try again.');
      }

      console.log("User register success");
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
    <div>UserSignup</div>
  )
}

export default UserSignup