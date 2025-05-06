// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(
    localStorage.getItem('newsletter-subscribed') === 'true'
  );

  const value = {
    user,
    setUser,
    isSubscribed,
    setIsSubscribed
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};