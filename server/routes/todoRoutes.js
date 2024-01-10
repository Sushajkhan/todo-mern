const express=require("express");
const { getTodo, createTodo, updateTodo, deleteTodo } = require("../controllers/todoControllers");
const router=express.Router();

router.get("/",getTodo)
router.post("/create",createTodo)
router.put("/update",updateTodo)
router.delete("/delete",deleteTodo)

module.exports=router;