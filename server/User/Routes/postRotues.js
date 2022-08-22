const postModal=require("../Modal/postModal");
const express=require("express");
const jwt=require("jsonwebtoken")

const router=express.Router();

router.post("/add", async(req,res)=>{
    const user_email=jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    await postModal.create({email:user_email, title:req.body.title, image:req.body.image, description:req.body.description, date: new Date().toLocaleDateString()}).then((data)=>{
        res.status(200).send("Post added Successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get("/get", async(req,res)=>{
    const user_email=jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    await postModal.find({email:user_email}).then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})  
router.post("/delete", (req, res)=>{
    const user_email=jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    postModal.findByIdAndDelete({_id:req.body._id,email:user_email}).then((data)=>{
        res.status(200).send("deleted successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router;