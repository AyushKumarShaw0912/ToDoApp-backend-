const toDoModel=require("../models/toDoModel")

module.exports.getToDo=async(req,res)=>{
   const todos=await toDoModel.find({})
   res.send(todos)
}
module.exports.createToDo=async(req,res)=>{
   const {task}=req.body;
  await toDoModel.create({
    task
   }).then(()=>{
    res.json({success:true})
   
   })
   .catch((err)=>console.log(err))
}

module.exports.updateToDo=async(req,res)=>{
    const{_id,task}=req.body
    toDoModel.findByIdAndUpdate(_id,{task}).then(()=>{
    res.set(201).send("Task updated")

    })
}

module.exports.deleteToDo=async(req,res)=>{
    toDoModel.findByIdAndRemove(req.params.id,req.body).then(()=>{
        res.json({ success: true })
    })

}