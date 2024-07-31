import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlays from './components/Overlays';




function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      
      <Overlays isOpen={isOpen}/>
      <button onClick={() => setIsOpen(true)}> toggle module</button>
    </>
  );
}

export default App;
