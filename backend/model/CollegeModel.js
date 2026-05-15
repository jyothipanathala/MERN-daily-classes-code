 const mongoose=require("mongoose")

 const collegeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String, unique:true,required:true},
    address:{type:String,required:true},
    departments:{type:String,required:true},
    email:{type:String,required:true,unique:true}
},{timestamp:true});

 const collegeModel=mongoose.model("colleges",collegeSchema);

 module.exports=collegeModel;