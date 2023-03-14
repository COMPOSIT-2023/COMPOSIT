import React from 'react'
import { Link } from 'react-router-dom';
import './PopupMsg.css'

const PopupMsg = () => {
    function openForm() {
        document.getElementById("popupForm").style.display = "block";
    }
    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
    }
      window.onclick = function (event) {
        let modal = document.getElementById('loginPopup');
        let popupBtn = document.getElementById('popupBtn');
        if (event.target !== modal) {
          closeForm();
        }
        if (event.target === popupBtn) {
            openForm();
          }
    }
    return (
        <div className='popupDiv'>
            <div className="openBtn">
            <Link className="pull-left openButton" id='popupBtn' onClick={openForm}>Create a new account</Link>
            </div>
            <div className="loginPopup" id='loginPopup'>
                <div className="formPopup" id="popupForm">
                    <h2>Error</h2>
                    <form action="/action_page.php" className="formContainer">
                        <h2>Please Log in</h2>
                        <label for="email">
                            <strong>E-mail</strong>
                        </label>
                        <input type="text" id="email" placeholder="Your Email" name="email" required />
                        <label for="psw">
                            <strong>Password</strong>
                        </label>
                        <input type="password" id="psw" placeholder="Your Password" name="psw" required />
                        <button type="submit" className="btn">Log in</button>
                        <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default PopupMsg;