import React, { useState } from "react";
import './App.css';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };



  return (
    <div className="App">
      <div className="menu-toggle" id="mobile-menu" onClick={toggleSidebar}>
        <img src="/asset/image.png" alt="hamburger-menu" />
      </div>
      
      <nav>
        <div className="nav-logo">
          <h1>LoGo</h1>
        </div>
        <ul>
          <li><a href="#men">MEN</a></li>
          <li><a href="#women">WOMEN</a></li>
          <li><a href="#kids">KIDS</a></li>
          <li><a href="#sports">SPORTS</a></li>
        </ul>
        <div className="search-container">
          <input type="text" className="search-input" />
          <button className="search-button">검색</button>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarActive ? "active" : ""}`} id="sidebar">
        <button className="close-btn" id="close-btn" onClick={closeSidebar}>
          &times;
        </button>
        <div className="nav-logo">
          <h1>LoGo</h1>
        </div>
        <ul>
          <li><a href="#men">MEN</a></li>
          <li><a href="#women">WOMEN</a></li>
          <li><a href="#kids">KIDS</a></li>
          <li><a href="#sports">SPORTS</a></li>
        </ul>
        <div className="search-container">
          <input type="text" />
          <button>검색</button>
        </div>
      </div>

      <div className="container">
        <div className="box1">Banner</div>
      </div>

      <div className="item-list">
        <div className="item1">item1</div>
        <div className="item1">item2</div>
        <div className="item1">item3</div>
        <div className="item1">item4</div>
        <div className="item1">item5</div>
        <div className="item1">item6</div>
      </div>
    </div>
  );
}

export default App;
