import { useState } from 'react';
// import {createPortal} from "react-dom";
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  }

  return (
    <div className="App">
      {message}
      <button className='btn btn-open' onClick={() => setModalOpen(true)}>open</button>
        {modalOpen && (
          // createPortal 
          // (
          <Modal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick}>
            <h1>This is the modal component</h1>
            <p>This is the modal description</p>
         </Modal>
        //  , document.body)

        )}  
    </div>
  );
}

export default App;
