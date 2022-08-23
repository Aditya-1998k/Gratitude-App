const mongoose=require("mongoose")

const uploadSchema= mongoose.Schema({
    image:String
})

const uploadModal=mongoose.model("Upload",uploadSchema);
module.exports=uploadModal