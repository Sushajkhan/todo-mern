const TodoModel=require("../models/TodoModel");

const getTodo=async(req,res)=>{
  const todo=  await TodoModel.find()
  res.send(todo)
}


const createTodo=async(req,res)=>{
  
    const todo=await TodoModel.create(req.body)
    res.send(todo)
}


const updateTodo=async(req,res)=>{
const{_id, text}=req.body
const todo=await TodoModel.findByIdAndUpdate(_id,{text})
res.send(todo)
}

const deleteTodo=async(req,res)=>{
    const{_id}=req.body
    const todo=await TodoModel.findByIdAndDelete(_id)
    res.send("deleted")
    }



module.exports={getTodo,createTodo,updateTodo,deleteTodo}