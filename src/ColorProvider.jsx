import {useReducer, useEffect} from 'react';
import { ColorContext } from './ColorContext';

const initialState = { bgColor: 'black', btnColor: 'white' };

function colorReducer(state, action) {
  switch (action.type) {
    case 'SET_BG':
      return { ...state, bgColor: action.payload };
    case 'SET_BTN':
      return { ...state, btnColor: action.payload };
    case 'RESET':
      return { bgColor: 'black', btnColor: 'white' };
    default:
      return state;
  }
}

export function ColorProvider({ children }) {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'RESET' });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}