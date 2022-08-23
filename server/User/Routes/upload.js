const express=require("express");
const uploadModal=require("../Modal/uploadModal");

const router=express.Router()

router.post("/add", (req, res)=>{
    console.log(req.body.images)
    uploadModal.create({image:req.body.images}).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get("/get", (req, res)=>{
    uploadModal.find().then((images)=>{
        res.status(200).send({images:images})
    })
})
 
module.exports=router