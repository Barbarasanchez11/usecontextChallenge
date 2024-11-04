import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();


export const useTheme = () => {
  return useContext(ThemeContext);
};


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

 
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark'); 
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={theme}> 
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
