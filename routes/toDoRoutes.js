const express=require("express")
const router=express.Router()
const  {getToDo,createToDo, updateToDo, deleteToDo}=require("../controllers/toDocontrol")

router.get('/',getToDo)
router.post("/create",createToDo)
router.post("/update",updateToDo)
router.delete("/delete/:id",deleteToDo)

module.exports=router