const express=require("express");
const mongoose=require("mongoose");
const userController=require("./User/Routes/userRoutes");
const postController=require("./User/Routes/postRotues")
const multer=require("multer")();
require("dotenv").config();
const cors=require("cors");


const app=express();
//creating server
app.listen(3001,(res, err)=>{
    if(!err){
        console.log("server created successfully")
    }else{
        console.log(err)
    }
})

app.get("/", (req, res)=>{
    res.status(200).send("Hi i am you back end")
})

mongoose.connect("mongodb://127.0.0.1:27017/gratitudeApp", (data)=>{
    console.log("Connected to database")
})
app.use(cors())
app.use(multer.array());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/user",userController)
app.use("/post",postController)