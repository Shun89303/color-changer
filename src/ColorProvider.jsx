import {useState, useEffect} from 'react';
import { ColorContext } from './ColorContext';

export function ColorProvider({ children }) {
  const [bgColor, setBgColor] = useState('black');
  const [btnColor, setBtnColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor('black');
      setBtnColor('white');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ColorContext.Provider value={{ bgColor, btnColor, setBgColor, setBtnColor }}>
      {children}
    </ColorContext.Provider>
  );
}