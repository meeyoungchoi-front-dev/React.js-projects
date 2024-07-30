import React from 'react'
import "./Modal.css"

const Modal = ( {onSubmit, onCancel, onClose, children} ) =>  {

// Handler for clicking outside the modal
const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-container') {
        onClose('The modal was closed');
    }
  };
  return (
    
    <div className="modal-container" onClick={handleOutsideClick}>
        <div className='modal'>
            <div className='modal-header'>
                <p className='close' onClick={() => onClose("the modal was closed")}>&times;</p>
            </div>
            <div className='modal-content'>
                <h1>{children}</h1>
            </div>
            <div className='modal-footer'>
                <button className='btn btn-submit'  onClick={() => onClose("the sumbit button was clicked")}>Submit</button>
                <button className='btn btn-cancel'  onClick={() => onCancel("the cancel button was clicked")}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal;
