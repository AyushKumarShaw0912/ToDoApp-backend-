const mongoose=require("mongoose")
const {Schema}=mongoose

const toDoSchema= new Schema({
    task:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("toDo",toDoSchema)