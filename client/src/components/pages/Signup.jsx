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
                                    <label>Username</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Username" 
                                        value={this.state.username}
                                        onChange={e => this.setState({ username: e.target.value })}
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
                                    <label>Contact</label>
                                    <input
                                        type="number"
                                        className="form-control" 
                                        placeholder="Contact" 
                                        value={this.state.contact}
                                        onChange={e => this.setState({ contact: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className="btn-modal btn-primary" onClick={ this.handleSubmit}>Signup</button>
                                
                                {this.state.errorr && <p>{this.state.errorr}</p>}
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