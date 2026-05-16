const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    phone: {type:String,required:true,unique:true,length:10},
    password: {type:String,required:true},
    address: {type:String,required:true},
    city: {type:String,required:true},
    userType: {type:String,required:true,default:"user"},
    state: {type:String,required:true},
    zipCode: {type:String,required:true},
},{timestamps:true});
 const userModel=mongoose.model("users",UserSchema);
 module.exports=userModel;