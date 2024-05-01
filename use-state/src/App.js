import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const heavyWork = () => {
  return ['홍길동', '김민수'];
};

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState('');
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log('이전 state: ', prevState);
      return([input, ...prevState]); 
    });
  };

  console.log(input);
  console.log("업데이트");

  return (
    <div className="App">
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
      <input type="text" onChange={handleInputChange}/>
      <button onClick = {handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>
  );
}

export default App;
