import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
 
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorr: null,
      userData: null,
  };
  }
  // registeredData = JSON.parse(localStorage.getItem("COMPuser"))
  
  handleClick = async (e) => {
    // console.log(localStorage.getItem("COMPuser"))
    // console.log(registeredData)
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", this.state);
      const compUser = res.data.details;
      localStorage.setItem("COMPOSITuser", JSON.stringify(compUser));
      this.setState({ errorr: "Login Successful"+compUser._id })
      console.log("logged in")
      const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))

      console.log(userData)
    //   window.location = `/events/${compUser._id}`
    window.location = `/events`
    } catch (err) {
      this.setState({ errorr: err.response.data.message })
      console.log(err.response.data.message, "error")
    }
  };
    

    // onSubmit = (e) => {
    //     e.preventDefault();
    // }

    render(){
        return (
            <section className="login-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="login-form">
                            <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                            <h3>Welcome Back!{this.registeredData}</h3>
                              {/* {
                              this.registeredData ? <h3>Welcome {this.registeredData}</h3>
                              :
                              <h3>Welcome Back!</h3>
                            } */}
                            
                            

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email Address" 
                                        value={this.state.email}
                                        onChange={ e => this.setState({ email: e.target.value }) }
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={ e => this.setState({ password: e.target.value }) }
                                    />
                                </div>

                                <button type="submit" className="btn-modal btn-primary" onClick={this.handleClick}>Login</button>
                                
                                {this.state.errorr && <p>{this.state.errorr}</p>}
                                {/* <p>pp</p> */}
                            
                                {/* {this.state.userData && <p>{this.state.userData}</p>} */}
                                <p>
                                    <Link to="/signup" className="pull-left">Create a new account</Link>
                                    
                                    <Link to="#" className="pull-right">Forgot your password?</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Login;