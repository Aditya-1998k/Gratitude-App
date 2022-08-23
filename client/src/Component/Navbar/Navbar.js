import React, { useState , useEffect} from 'react';
import {useNavigate , Link} from "react-router-dom";
import axios from "axios";

function Navbar() {
    const [user, setuser]=useState()
    const navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem("authToken");
        navigate("/")
    }
    const authToken=localStorage.getItem("authToken")
    useEffect(()=>{
        axios({
          method:"GET",
          url:"http://localhost:3001/post/get",
          headers:{
            authorization:authToken
          }
        }).then((data)=>{
          setuser(data.data[0].email)
          console.log(data.data[0])
        }).catch((err)=>{
          console.log(err);
        })
  },[authToken])

  return (
    <>
        <nav class="navbar navbar-expand-lg bg-secondary" style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
        <div class="container-fluid">
            <h1 class="navbar-brand"><Link to="/home" style={{textDecoration:"none",color:"white"}}>Gratitude App</Link></h1>
            <span class="navbar-text">
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary"><Link to="/addpost" style={{textDecoration:"none",color:"white"}}>Write a Gratitude</Link></button>
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary"><Link to="/about" style={{textDecoration:"none",color:"white"}}>About Us</Link></button>
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary">{user}</button>
                    <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary" onClick={()=>handleLogout()}>Logout</button>
            </span>
        </div>
        </nav>
    </>
  )
}

export default Navbar