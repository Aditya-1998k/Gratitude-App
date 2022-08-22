const userModal=require("../Modal/userModal");
const express=require("express");
const bcrypt=require("bcrypt");
const salt=10;
const jwt=require("jsonwebtoken");

const router=express.Router();

router.post("/login",(req, res)=>{
    userModal.find({email:req.body.email}).then((data)=>{
        if(data.length){
                bcrypt.compare(req.body.password,data[0].password).then((token)=>{
                    if(token){
                        const authToken=jwt.sign(data[0].email, process.env.SECRET_KEY);
                        res.status(200).send(authToken)
                    }else{
                        res.status(400).send("Invalid Password")
                    }
                })
        }else{
            res.status(400).send("User does not exist")
        }
    })
})

router.post("/signup", (req, res)=>{
    if(req.body.password===req.body.confirmpassword){
        userModal.find({email : req.body.email}).then((data)=>{
            if(data.length){
                res.status(400).send("User Already Exist")
            }else{
                bcrypt.genSalt(salt).then((saltHash)=>{
                    bcrypt.hash(req.body.password,saltHash).then((passwordHash)=>{
                            userModal.create({email:req.body.email,password:passwordHash}).then(()=>{
                                res.status(200).send("User Added Successfully")
                            })
                    })
                })
            }
        })
    }else{
        res.status(400).send("Password Not Matching")
    }
})

module.exports=router;