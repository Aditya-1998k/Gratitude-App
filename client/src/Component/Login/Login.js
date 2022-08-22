import React from 'react';
import axios from "axios"
import {useState} from "react";
import "../Signup/Signup.css";
import {useNavigate} from "react-router-dom";

function Login() {

  const [logindata, setloginData]=useState([])
  const navigate=useNavigate()

  const handleInputChange=(e,id)=>{
    setloginData({...logindata,[id]:e.target.value})
    console.log(logindata)
  }
const handleLogin=()=>{
    axios({
      method:"POST",
      url:"http://localhost:3001/user/login",
      headers:{

      },
      data:logindata
    }).then((res)=>{
      localStorage.setItem("authToken", res.data)
      alert("login successfully")
      navigate('/home')
    }).catch((err)=>{
      console.log(err)
    })
}
  return (
    <>
        <div className='login-main'>
            <div className='login-submain'>
              <div style={{marginBottom:"20px"}}>
                <h2>Feel The Gratitude</h2>
              </div>
              <div class="col-sm-10">
                <input class="form-control" type="text" style={{width:"280px"}} placeholder="Email"  onChange={(e)=>handleInputChange(e,"email")}/>
              </div>
              <div class="col-sm-10">
                <input type="password" style={{width:"280px"}} class="form-control" id="floatingPassword" placeholder="Password"  name='password' onChange={(e)=>handleInputChange(e,"password")}/>
              </div>
              <div class="form-floating my-3">
              <button style={{width:"280px"}} type="button" class="btn btn-secondary" onClick={()=>handleLogin()}>Login</button>
              </div>
              <div class="form-floating my-3" >
              <button style={{marginTop:"20px",width:"280px"}} type="button" class="btn btn-outline-primary" onClick={()=>navigate("/signup")}>Signup</button>
              </div>
            </div>
      </div>
    </>
  )
}

export default Login