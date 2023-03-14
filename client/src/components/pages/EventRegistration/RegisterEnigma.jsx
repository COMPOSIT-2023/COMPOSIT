// import React from 'react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import '../Popup/PopupMsg.css'

export default function RegisterEnigma() {
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
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
    
    
    // const participantId = window.location.pathname.split("/")[2];
    const participantId = userData._id
    const [registerEnigmaData, setRegisterEnigmaData] = useState({});
    // const [displayMsg, setDisplayMsg] = useState(null);
    // const [state, setState] = useState({})
    const handleChange = (event) => {
        setRegisterEnigmaData({
            ...registerEnigmaData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e, source) => {
        
        e.preventDefault()
        
        try {
            const res = await axios.post(`/eventRegistration/${source}/${participantId}`, registerEnigmaData )
            console.log(res.data, "nmv")
            setState({ displayMsg: res.data })
            openForm()
            // window.location = '/events'
        }
        catch(error){
            // console.log("hc1")
            // setState({ displayMsg: `${error.response.data} for ${source}` })
            // console.log("errrrrrrrrrr")
            // alert(state.displayMsg)
            
            if (error.response.data.message.split(" ")[0]==="E11000") {
                console.log("errrrrrrrrrr in if")
                setState({ displayMsg: `Dear ${userData.name}. You are already registered for ${source}` })
                openForm()
                // alert(state.displayMsg)
            }
            // else if() {
            //     setState({ displayMsg: `Participant 2 is already registered for Enigma` })
            // }
            else{
                console.log("in else")
                console.log(error)
                setState({ displayMsg: `${error.response.data.message} for ${source}` })
                openForm()
                // alert(state.displayMsg)
            }
            console.log(error)
        }
        // e.preventDefault()
        // try {
        //     await axios.post(`/eventRegistration/${eventName}/${participantId}`, registerEnigmaData )
        //     setDisplayMsg(`Registered Successfully for ${eventName}`)
        //     // this.setState({ displayMsg: `Registered Successfully for ${eventName}` })
        //     alert(displayMsg,"bb")
        //     // window.location = '/events'
        // }
        // catch(error){
        //     setDisplayMsg(`${error.response.data} for ${eventName}`)
        //     // this.setState({ displayMsg: `${error.response.data} for ${eventName}` })
        //     alert(displayMsg, "jj")
        // }
    }

    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Register for Enigma</h3>

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
                            <p className="marquee">
                                <span>Enter the Participant's id of other team member (if any)</span>
                            </p>
                            <br />
                            <div className="form-group">
                                <label>Member 2 Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant 2 Id"
                                    name="pid2"
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary" onClick={(event) => handleSubmit(event, "enigma")}>Register</button>
                            {state && <p>{state.displayMsg}</p>}
                            {/* <p>{state.displayMsg}</p> */}
                            <div className="loginPopup" id='loginPopup'>
                                <div className="formPopup" id="popupForm">
                                    <h2>{state.displayMsg}</h2>

                                </div>
                            </div>
                            <button type="reset" className="btn-modal btn-primary">Reset</button>
                            <p>Already registered for Enigma? <Link to="/login">Login!</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}