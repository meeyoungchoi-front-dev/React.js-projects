import React from 'react'
import {createPortal} from "react-dom";

const mountElement = document.getElementById("overlays");

const Overlays = ({isOpen}) => {
  return  createPortal(
    <>
      <p>Test</p>
    </>
   , mountElement);
}

export default Overlays