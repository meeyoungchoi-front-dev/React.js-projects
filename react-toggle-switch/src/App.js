import Form from "./components/Form";
import './App.css';
import React, { createContext, useState } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
      setTheme((curr) => (curr === "lignt" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Form/>
        <div className="switch">
          <label>{theme === "light" ? "light mode" : "dark mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
