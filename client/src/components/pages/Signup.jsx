// import React from 'react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

class Signup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            contact: '',
            errorr: null,
        };
      }
    
    
    
    handleSubmit = async (e) =>{
        e.preventDefault()
        try {
          await axios.post("/auth/register", this.state)
          this.setState({ errorr: "SignUp Successfull" })
          window.location = '/login'
        } catch (err) {
            console.log(err.response.data, "my")
            this.setState({ errorr: "Email already in use!!" })
            console.log(this.errorr, "react")
        //   setError(err.response.data);
        }
      };

    render(){
        return (
            <section className="signup-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="signup-form">
                            <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                            <h3>Create your Account</h3>

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Name" 
                                        value={this.state.name}
                                        onChange={e => this.setState({ name: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email Address" 
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">

                                    <label>Date of Birth</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        placeholder="dd/mm/yyyy" 
                                        value={this.state.dob}
                                        onChange={e => this.setState({ dob: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Institute ID / Roll No.</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Institute ID" 
                                        value={this.state.rollno}
                                        onChange={e => this.setState({ rollno: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Department</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Department" 
                                        value={this.state.department}
                                        onChange={e => this.setState({ department: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Institution</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Institution" 
                                        value={this.state.institution}
                                        onChange={e => this.setState({ institution: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">

                                    <label>Contact</label>
                                    <input
                                        type="number"
                                        className="form-control" 

                                        placeholder="Contact Number" 

                                        value={this.state.contact}
                                        onChange={e => this.setState({ contact: e.target.value })}
                                    />
                                </div>


                                <div className="form-group">
                                    <label>Address</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Address" 
                                        value={this.state.address}
                                        onChange={e => this.setState({ address: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Year of Graduation</label>
                                    <input 
                                        type="year" 
                                        className="form-control" 
                                        placeholder="Year of Graduation" 
                                        value={this.state.gradyear}
                                        onChange={e => this.setState({ gradyear: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Gender</label>
                                    <select 
                                        name="Gender"
                                        className="form-control"
                                        value={this.state.gender}
                                        onChange={e => this.setState({ gender: e.target.value })}
                                    >
                                    <option value="default">Please Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Others</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn-modal btn-primary">Signup</button>

                                <p>Already a registered user? <Link to="/login">Login!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Signup;