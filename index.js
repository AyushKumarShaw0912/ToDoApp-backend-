const express=require("express")
const cors=require("cors")
const app= express()
const dbConnect = require("./db")
app.use(express.json())


require("dotenv").config()
app.use(cors())
const port=process.env.PORT||5000;
dbConnect()


app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
})
app.use("/api/v1/",require("./routes/toDoRoutes"))