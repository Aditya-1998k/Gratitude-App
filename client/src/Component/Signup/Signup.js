import React from 'react';
import axios from "axios";
import {useState} from "react";
import "./Signup.css";
import {useNavigate} from "react-router-dom"

function Signup() {

  const [Signupdata, setSignupData]=useState([]);
  const navigate=useNavigate();
  const handleInputChange=(e,id)=>{
    setSignupData({...Signupdata, [id]:e.target.value})
    console.log(Signupdata)
  }
  const handleSignup=()=>{
    axios({
      method:"POST",
      url:"http://localhost:3001/user/signup",
      headers:{

      },
      data:Signupdata
    }).then((res)=>{
      alert("user added successfully")
      navigate("/")
    }).catch((err)=>{
      alert("Password and Confirm Password not matching")
      console.log(err)
    })
  }

  return (
    <>
      <div className='login-main'>
            <div className='login-submain'>
              <div style={{marginBottom:"20px"}}>
                <h2>Join The Club</h2>
              </div>
              <div class="col-sm-10">
                <input class="form-control" type="text" style={{width:"280px"}} placeholder="Email"  onChange={(e)=>handleInputChange(e,"email")}/>
              </div>
              <div class="col-sm-10">
                <input type="password" style={{width:"280px"}} class="form-control" id="floatingPassword" placeholder="Password"  name='password' onChange={(e)=>handleInputChange(e,"password")}/>
              </div>
              <div class="col-sm-10">
                <input type="password" style={{width:"280px"}} class="form-control" id="floatingPassword" placeholder="Confirm Password"  name='password' onChange={(e)=>handleInputChange(e,"confirmpassword")}/>
              </div>
              <div class="form-floating my-3">
              <button style={{width:"280px"}} type="button" class="btn btn-secondary" onClick={()=>handleSignup()}>Signup</button>
              </div>
              <div class="form-floating my-3">
              <button style={{marginTop:"20px",width:"280px"}} type="button" class="btn btn-outline-primary" onClick={()=>navigate("/")}>Login</button>
              </div>
            </div>
      </div>
    </>
  )
}

export default Signup