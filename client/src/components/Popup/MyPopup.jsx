import React from 'react';
import Popup from 'reactjs-popup';

const MyPopup = () => {
  const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
  return (
    <Popup
      className="popup-container"
      overlayClassName="popup-overlay"
      closeOnDocumentClick
    >
      <div className="popup-content">
        {/* <h2>Dear {userData.name}</h2> */}
        <p>Do you want to register for Event?</p>
        <div className="popup-buttons">
          <button className="btn btn-primary">Register</button>
          <button className="btn btn-secondary" onClick={() => Popup.close()}>Cancel</button>
        </div>
      </div>
    </Popup>
  );
};

export default MyPopup;
