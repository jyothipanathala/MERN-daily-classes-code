const addStudent  =require("../controller/studentController");
const express=rquire("express")
const router=express.Router();

router.post("/add-student",addStudent);

module.exports=router;
