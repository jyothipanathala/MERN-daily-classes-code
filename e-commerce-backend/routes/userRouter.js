 const express=require("express");
 const {register,login, getAllUsers, getUserBasedOnId, updateProfile, forgetPassword} = require("../controller/UserController");
 const router=express.Router();

 router.post("/register",register);
 router.post("/login",login);
 router.get("/get-users",getAllUsers);
 router.get("/get-user/:id",getUserBasedOnId);
 router.patch("/update-profile",updateProfile);
 router.patch("/forget-password",forgetPassword);
 

 module.exports=router;