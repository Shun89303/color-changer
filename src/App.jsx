import {useState, useEffect} from 'react';
import './App.css'

function App() {
  const [bgColor, setColor] = useState('black');
  const [butColor, setButColor] = useState('white');

  const conStyle = {
    position: 'absolute',
    backgroundColor: bgColor,
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
  }

  const butStyle = {
    backgroundColor: butColor,
    color: 'slategrey',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    padding: '20px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
  }

  function handleColorChange() {
    setColor('white')
    setButColor('black')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setColor('black')
      setButColor('white')
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='container' style={conStyle}>
        <button style={butStyle} onClick={handleColorChange}>Change color</button>
      </div>
    </div>
  )
}

export default App
