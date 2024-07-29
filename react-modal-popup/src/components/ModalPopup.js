import React , { useRef, useEffect}  from 'react';
import styles from '../App.css'; // 수정된 경로

const ModalPopup = () =>  {
 // useRef로 DOM 요소에 접근하기 위한 참조 생성
 const toggleRef = useRef(null);

 useEffect(() => {
   const body = document.querySelector('body');
   const toggle = toggleRef.current; // toggleRef.current로 접근
   if (toggle) {
     toggle.onclick = function () {
       toggle.classList.toggle('active');
       body.classList.toggle('active');
     };
   }
 }, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행



  return (
    <div className="{styles.container}">
        <button className="{styles.show-btn}">Show Popup</button>
        <div className="{styles.spop-box}">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolores modi quaerat sapiente recusandae rerum veniam dolorem officiis! Hic voluptatem doloribus dolorum facere quo voluptatibus adipisci, quas alias sequi sit.</p>
            <button className="{styles.close-pop}">OK</button>
        </div>    
    </div>
  )
}

export default ModalPopup