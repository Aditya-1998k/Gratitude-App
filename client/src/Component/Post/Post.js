import React, { useEffect, useState } from 'react'
import axios from "axios";

function Post() {

  const [post, setpost]=useState([])
  const authToken=localStorage.getItem("authToken")
  useEffect(()=>{
        axios({
          method:"GET",
          url:"http://localhost:3001/post/get",
          headers:{
            authorization:authToken
          }
        }).then((data)=>{
          setpost(data.data)
          console.log(data.data[0])
        }).catch((err)=>{
          console.log(err);
        })
  },[authToken])

  const handleDelete=(id)=>{
    axios({
      method:"POST",
      url:"http://localhost:3001/post/delete",
      headers:{
        authorization:authToken
      },
      data:{_id:id}
    }).then(()=>{
      alert("Deleted Successfully");
      window.location.reload()
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
    {post.map((data ,index)=>{
      return(
        <>
            <div class="card" key={index} style={{width: "18rem",display:"block", float:"left", margin:"25px",padding:"10px",boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
            <img src={data.image} class="card-img-top" style={{height:"200px"}} alt="unsplace"/>
            <div class="card-body">
            <p class="card-text"><strong>{data.title}</strong></p>
              <p class="card-text">{data.description}</p>
              <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary" onClick={()=>handleDelete(data._id)}>Delete</button>
              <button style={{margin:"4px",borderRadius:"30px"}} type="button" class="btn btn-primary">Share</button>
            </div>
            </div>
        </>
      )
    })}
    </>
    
  )
}

export default Post