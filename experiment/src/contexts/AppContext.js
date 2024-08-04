import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme || 'dark');

  useEffect(() => {
    console.log('colorScheme', colorScheme);
  });

  useEffect(() => {
    // Load saved theme from storage
    console.log('colorScheme', colorScheme);

    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  useEffect(() => {
    if (colorScheme) {
      setTheme(colorScheme); // set theme to system selected theme
    }
  }, [colorScheme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme); // Save selected theme to storage
  };

  const useSystemTheme = () => {
    setTheme(colorScheme);
    AsyncStorage.setItem('theme', colorScheme);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, useSystemTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
