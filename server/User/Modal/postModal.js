const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})

const postModal=mongoose.model("postData",postSchema)
module.exports=postModal;