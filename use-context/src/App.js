import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ThemeContext } from './context/ThemeContext.js';
import Page from './components/Page';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page isDark={isDark} setIsDark={setIsDark}/>
    </ThemeContext.Provider>
  ) 
}

export default App;
