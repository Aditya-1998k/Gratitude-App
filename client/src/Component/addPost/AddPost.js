import React, { useState } from 'react';
import "../Signup/Signup.css";
import {useNavigate} from "react-router-dom";
import axios from "axios"

function AddPost() {

    const navigate=useNavigate();
    const [postdata, setpostdata]=useState([]);
    const handleOnchange=(e,id)=>{
        setpostdata({...postdata,[id]:e.target.value})
        console.log(postdata)
    }
const authToken=localStorage.getItem("authToken")
const handleClick=()=>{
    
          axios({
            method:"POST",
            url:"http://localhost:3001/post/add",
            headers:{
              authorization:authToken
            },
            data:postdata
          }).then(()=>{
            alert("data added successfully");
            navigate("/home")
          }).catch((err)=>{
            console.log(err);
          })
    
}

  return (
    <>
        <div className='login-main'>
            <div className='login-submain'>
              <div style={{marginBottom:"20px"}}>
                <h2>Show Your Gratitude</h2>
              </div>
              <div class="col-sm-10">
                <input class="form-control" type="text" style={{width:"280px"}} placeholder="Title" onChange={(e)=>handleOnchange(e,"title")} />
              </div>
              <div class="col-sm-10">
                <input type="text" style={{width:"280px"}} class="form-control"  placeholder="Image Address" onChange={(e)=>handleOnchange(e,"image")}/>
              </div>
              <div class="col-sm-10">
                <textarea maxLength={90} style={{width:"280px",position:"relative", left:"223px"}} class="form-control" aria-label="With textarea" placeholder='Write here..' onChange={(e)=>handleOnchange(e,"description")}></textarea>
              </div>
              <div class="form-floating my-3">
              <button style={{width:"280px"}} type="button" class="btn btn-secondary" onClick={()=>handleClick()}>Add</button>
              </div>
            </div>
      </div>
    </>
  )
}

export default AddPost