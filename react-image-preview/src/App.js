import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [imageFile, setImagFile] = useState("");
  const imgRef = useRef(null);
  
  const onClick = () => {
    imgRef.current?.click();
  }

  const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.onload = (readerEvent) => {
          setImagFile(readerEvent.target.result);
        };
        reader.readAsDataURL(file);
      }
  }

  return (
    <div>
      <h2>이미지 미리보기</h2>
      <input 
            type="file" 
            accept='image/jpg, image/jpeg, image/png' 
            onChange={e => handleImageUpload(e)}
            ref={imgRef}/>
      <img src={imageFile || process.env.PUBLIC_URL + "/image.png"}  alt="Preview"/>
    </div>
  );
}

export default App;
