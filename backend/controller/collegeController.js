const Colleges = require("../model/CollegeModel");
//add college
const addCollege =async (req, res) => {
    try {
        const { name, code, address, departments, email } = req.body;

        const newCollege = {
            name: name,
            code: code,
            address: address,
            departments: departments,
            email: email,
        };
       await Colleges.insertOne(newCollege);
        res.status(200).json({ message: "new college record added successfully" })
    } catch (error) {
        res.status(500).json({ message: "Failed add college record" })
    }
};
//get colleges

const getAllColleges=async(req,res)=>{
    try{
       const foundColleges= await Colleges.find();
// condition to send response with foundColleges empty
       if(!foundColleges.length==0){
        res.status(400).json({message:"colleges not found"})
       }
       //global succesfull response
       res.status(200).json({foundColleges})
    }catch(error){
        res.status(500).json({message:"failed to retrieve data"})
    }
};
const deleteCollege=async(req,res)=>{
    try{
       const deleteDocument=await Colleges.findByIdAndDelete(req.params.id);
       console.log(deleteDocument);
        
       res.status(200).json({message:"record deleted successfully"})

    }catch(error){
        res.status(500).json({message:"failed to college details"})
    }

};
const getCollegeBasedOnId=async(req,res)=>{
    try{
        const foundCollege = await Colleges.findById(req.params.id);
        res.status(200).json({foundCollege})

    }catch(error){
        res.status(500).json({message:"failed to get college details"})
    }
};

const updateCollegeDetails=async(req,res)=>{
    try{
        const updateCollegeDetails=req.body;
        const updatedCollege=await Colleges.findByIdAndUpdate(req.params.id,updateCollegeDetails,
            
            {new:true},);
        res.status(200).json({message:"updated successfully"})

    }catch(error){
        res.status(500).json({message:"failed to update college details"})
    }
};

const updateEmail=async(req,res)=>{
    try{
        const UpdatedEmail=await Colleges.findOneAndUpdate(
           {email: req.params.email},
            {email:req.body.email},
            {new:true},
        );
        res.status(200).json({message:"email updated successfully"});

    }catch(error){
        res.status(500).json({message:"failed to update email"})
    }
};
module.exports = {addCollege,getAllColleges,deleteCollege,getCollegeBasedOnId,updateCollegeDetails,updateEmail};