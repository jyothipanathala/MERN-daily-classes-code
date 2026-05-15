const Colleges=require("../model/CollegeModel");
//add college
const addCollege=(req,res)=>{
    try{
 const {name,code,address,departments,email}=req.body;

 const newCollege={
    name:name,
    code:code,
    address:address,
    departments:departments,
    email:email
 };
 Colleges.insertOne(newCollege);
 res.status(200).json({message:"new college record added successfully"})

    }catch(error)
    {

         res.stutus(500).json({message:"Failed add college record"})
    }
}

module.exports=addCollege