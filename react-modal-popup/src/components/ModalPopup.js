import React , { useRef, useEffect}  from 'react';
import styles from '../App.css';

const ModalPopup = () =>  {
 const toggleRef = useRef(null);

 useEffect(() => {
   const body = document.querySelector('body');
   const toggle = toggleRef.current; 
   if (toggle) {
     toggle.onclick = function () {
       toggle.classList.toggle('active');
       body.classList.toggle('active');
     };
   }
 }, []);

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