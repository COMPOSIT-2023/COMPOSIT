import React, { useState } from 'react';
import Popup from 'reactjs-popup';
// import MyPopup from './Popup/MyPopup';

const OpenPopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="popup-buttons btn btn-primary" onClick={openPopup}>Open Popup</button>
      <Popup
        open={isOpen}
        onClose={closePopup}
        modal
      >
        <div className="popup-content">
        {/* <h2>Dear {userData.name}</h2> */}
        <p>Do you want to register for Event?</p>
        <div className="popup-buttons">
          <button className="btn btn-primary">Register</button>
          <button className="btn btn-secondary" onClick={closePopup}>Cancel</button>
        </div>
        </div>
      </Popup>
    </>
  );
};

export default OpenPopupButton;
