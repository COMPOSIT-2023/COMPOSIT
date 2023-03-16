import React from 'react'

const Success = () => {
    
  return (
    <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <h1>2<span>0</span><b>0</b>!</h1>
                        <h3>Successfully Got From backend</h3>
                        <p>The page you were looking for could not be found.</p>
                        <Link 
                            to="/" 
                            className="btn btn-primary"
                            onClick={this.toggleNavbar}
                        >
                            Return Home page
                        </Link>
                    </div>
                </div>
            </div>
  )
}

export default Success

