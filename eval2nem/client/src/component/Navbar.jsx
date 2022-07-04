import React from "react";
import {Link} from 'react-router-dom'
export const Navbar = () => {

  return (
    <>
    <div className="nav">
        <div>
            <Link to="/nav">Home</Link>
        </div>
        <div>
            <Link to="/signup">Signuppage</Link>
        </div>
        <div>
            <Link to='/view'>View Notes</Link>
        </div>
        <div>
            <Link to='/add'>Add Notes</Link>
        </div>
      
        
    </div>
    </>
  )
}