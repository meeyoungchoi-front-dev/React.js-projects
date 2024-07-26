import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [imageFiles, setImageFiles] = useState([]);
  const imgRef = useRef(null);
  
  const onClick = () => {
    imgRef.current?.click();
  }

  const handleImageUpload = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...imageFiles];
   
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setImageFiles(imageUrlLists);
  };

  // 이미지 URL 해제
  useEffect(() => {
    return () => {
      imageFiles.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [imageFiles]);

  return (
    // <div>
    //   <h2>이미지 미리보기</h2>
    //   <input 
    //         type="file" 
    //         multiple
    //         accept='image/jpg, image/jpeg, image/png' 
    //         onChange={e => handleImageUpload(e)}
    //         ref={imgRef}/>    
    //   <div>
    //   <button onClick={onClick}>이미지 업로드</button>
    //   <div>
    //     {imageFiles.map((image, id) => {
    //       <div key={id}>
    //         <img src={image || process.env.PUBLIC_URL + "/image.png"}  alt="Preview"/>
    //       </div>
    //     })} 
    //   </div>
    //   </div>
    // </div>
    <div>
    <h2>이미지 미리보기</h2>
    <input 
      type="file" 
      multiple
      accept='image/jpg, image/jpeg, image/png' 
      onChange={handleImageUpload}
      ref={imgRef}
      style={{ display: 'none' }} // 파일 입력 필드를 숨깁니다.
    />
    <button onClick={onClick}>이미지 업로드</button>
    <div>
      {imageFiles.map((image, id) => (
        <div key={id}>
          <img src={image} alt="Preview" />
        </div>
      ))}
    </div>
  </div>
  );
}

export default App;
