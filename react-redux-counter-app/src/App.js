import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { increment, decrement } from './stores/actions'; 

function App() {
  // 스토어에 저장되어 있는 상태를 선택해주는 역할을 한다
  const count = useSelector((state) => state.count);

  // 디스패치 : 액션을 스토어로 전달한다
  const dispatch = useDispatch();

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
      <div className='card text-center p-4 shadow'>
        <h1 className='card-title'>Counter</h1>
        <h3>{count}</h3>
        <div className='card-body'>
          <button
            className='btn btn-primary me-2'
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className='btn btn-danger'
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;