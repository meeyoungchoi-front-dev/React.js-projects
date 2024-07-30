import React , { useRef, useEffect, useState}  from 'react';
import styles from '../App.css';

const ModalPopup = () =>  {
const toggleRef = useRef(null);
const [isPopupVisible, setPopupVisible] = useState(false);
const [isActive, setIsActive] = useState(false);

const showPopup = () => {
    setPopupVisible(true);
}

const closePopup = () => {
    setPopupVisible(false);
}
 
return (
    <div className={styles.container}>
    {/* 팝업 열기 버튼 */}
    <button className={`${styles.showBtn} ${isActive ? styles.active : ''}`} onClick={showPopup}>
        Show Popup
    </button>

    {/* 팝업 조건부 렌더링 */}
    {isPopupVisible && (
        <div className={`${styles.popBox} ${isActive ? styles.active : ''}`}>
        <h1>Hello World</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolores
            modi quaerat sapiente recusandae rerum veniam dolorem officiis! Hic
            voluptatem doloribus dolorum facere quo voluptatibus adipisci, quas
            alias sequi sit.
        </p>
        {/* 팝업 닫기 버튼 */}
        <button className={`${styles.closePop}`} onClick={closePopup}>
            OK
        </button>
        </div>
    )}
</div>
)}

export default ModalPopup