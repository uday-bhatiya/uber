import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateUser = (userData) => {
        setUser(userData);
    };

    const value = {
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        updateUser
    }

  return (
    <UserDataContext.Provider value={value}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext