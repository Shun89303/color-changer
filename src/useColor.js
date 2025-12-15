import {useState, useEffect} from 'react';
 
 export function useColor(initialBg = 'black', initialBtn = 'white', intervalTime = 2000) {
    const [bgColor, setBgColor] = useState(initialBg);
    const [btnColor, setBtnColor] = useState(initialBtn);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor('black')
      setBtnColor('white')
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  const manualChange = (newBg, newBtn) => {
    setBgColor(newBg)
    setBtnColor(newBtn)
  };

  return [bgColor, btnColor, manualChange];
 }