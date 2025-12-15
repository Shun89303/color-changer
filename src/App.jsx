import {useColor} from './useColor';
import './App.css'

function App() {
  const [bgColor, btnColor, changeColors] = useColor();

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
    backgroundColor: btnColor,
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

  return (
    <div className='container' style={conStyle}>
      <button style={butStyle} onClick={() => changeColors('white', 'black')}>
        Change color
        </button>
    </div>
  )
}

export default App