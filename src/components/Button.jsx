import React from 'react';
import { useTheme } from '../themes/ThemeContext';

const Button = () => {
  const { changeTheme } = useTheme();

  return (
    <button onClick={changeTheme}>
      Cambiar Tema
    </button>
  );
};

export default Button;
