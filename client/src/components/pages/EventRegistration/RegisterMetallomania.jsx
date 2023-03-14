import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import '../Popup/PopupMsg.css'

export default function RegisterMetallomania() {
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    const participantId = userData._id
    const [registerMetallomaniaData, setRegisterMetallomaniaData] = useState({});
    const [state, setState] = useState({})

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
    const handleChange = (event) => {
        setRegisterMetallomaniaData({
            ...registerMetallomaniaData,
            [event.target.name]: event.target.value,
        })
    }
    const onClickHandler = async (e, source) => {
        e.preventDefault()
        try {
            await axios.post(`/eventRegistration/${source}/${participantId}`, participantId)
            setState({ displayMsg: `Dear ${userData.name}. You have Successfully registered for ${source}.` })
            openForm()
        }
        catch (error) {
            if (error.response.data.message.split(" ")[0] === "E11000") {
                setState({ displayMsg: `Dear ${userData.name}. You are already registered for ${source}` })
                openForm()
            }
            else {
                setState({ displayMsg: `${error.response.data.message} for ${source}` })
                openForm()
            }
        }
    };
    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Register for Metallomania</h3>
                        <form>
                            <div className="form-group">
                                <label>Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    value={userData._id}
                                    name="pid1"
                                    onChange={handleChange}
                                    required
                                    disabled
                                />
                            </div>
                            <button type="submit" className="btn-modal btn-primary" onClick={(event) => onClickHandler(event, "metallomania")}>Register</button>
                            {state && <p>{state.displayMsg}</p>}
                            <div className="loginPopup" id='loginPopup'>
                                <div className="formPopup" id="popupForm">
                                    <h2>{state.displayMsg}</h2>
                                    <Link to="/events" className='popupTextLink'>Register for other events.</Link>
                                </div>
                            </div>
                            <p>Already registered for Metallomania? <Link to="/events">Register for other events.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}