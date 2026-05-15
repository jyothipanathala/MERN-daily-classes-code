const addCollege=require("../controller/collegeController")
const express=require("express");
const router=express.Router()

router.post("/add-college",addCollege)

module.exports=router;