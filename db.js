const mongoose=require("mongoose")
require("dotenv").config()
const mongo_url=process.env.MONGO_URL||"mongodb://127.0.0.1:27017/todo"
const dbConnect= async()=>{
   await mongoose.connect(mongo_url,{useNewUrlParser:true})
   console.log( mongoose.connection.readyState)

}
module.exports=dbConnect