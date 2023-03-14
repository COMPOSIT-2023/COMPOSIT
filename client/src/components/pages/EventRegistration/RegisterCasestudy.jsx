import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import '../Popup/PopupMsg.css'

export default function RegisterCasestudy() {
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    const participantId = userData._id
    const [registerCasestudyData, setRegisterCasestudyData] = useState({});
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
        setRegisterCasestudyData({
            ...registerCasestudyData,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = async (e, eventName) => {
        e.preventDefault()
        try {
            const res = await axios.post(`/eventRegistration/${eventName}/${participantId}`, registerCasestudyData)
            setState({ displayMsg: `Dear ${userData.name}. You have Successfully registered for ${eventName}.` })
            openForm()
        }
        catch (error) {
            console.log(error)
            setState({ displayMsg: `Dear ${userData.name}. ${error.response.data} for ${eventName}` })
            openForm()
        }
    };
    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Register for Case Study</h3>
                        <form>
                            <div className="form-group">
                                <label>Team Leader's (Your's) Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant 1 Id"
                                    value={userData._id}
                                    name="pid1"
                                    required
                                    disabled
                                />
                            </div>
                            <p class="marquee">
                                <span>Enter the Participant's id of other team member (if any)</span>
                            </p>
                            <br />
                            <div className="form-group">
                                <label>Member 2 Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    name="pid2"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Member 3 Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    name="pid3"
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary" onClick={(event) => handleSubmit(event, "caseStudy")}>Register</button>
                            <button type="reset" className="btn-modal btn-primary">Reset</button>
                            <p>Already registered for Case Study? <Link to="/events">Register for other events.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="loginPopup" id='loginPopup'>
                <div className="formPopup" id="popupForm">
                    <h2>{state.displayMsg}</h2>
                    <Link to="/events" className='popupTextLink'>Register for other events.</Link>
                </div>
            </div>
        </section>
    )
}