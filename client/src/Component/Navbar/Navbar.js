import React from 'react';
import {useNavigate} from "react-router-dom";

function Navbar() {

    const navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem("authToken");
        navigate("/")
    }

  return (
    <>
        <nav class="navbar navbar-expand-lg bg-secondary" style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
        <div class="container-fluid">
            <h1 class="navbar-brand">Gratitude App</h1>
            <span class="navbar-text">
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary">Write a Gratitude</button>
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary">About</button>
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary">Contact Us</button>
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary" onClick={()=>handleLogout()}>Logout</button>
            </span>
        </div>
        </nav>
    </>
  )
}

export default Navbar