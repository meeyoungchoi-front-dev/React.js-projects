import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const [showTimer, setShowTimer] = useState(false);

  const handleCountUpdate = () => {
      setCount(count + 1);
  };

  // 마운팅
  useEffect(() => {
    console.log('마운팅');
  }, []);

  // 마운트 + [ name ] 변경될때만 실행
  useEffect(() => {
    console.log("렌더링");
  });

  // 마운트 + [ name ] 변경될때만 실행
  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  // 마운트 + [ count ] 변경될때만 실행
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name {name}</span>
      {showTimer && <Timer/>}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
