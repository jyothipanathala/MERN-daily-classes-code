const Students=("../model StudentModel");


const addStudent=(req,res)=>{
    try{
        const{name,rollNo,branch,phone,email,address
    }=req.body;

    const newStudent={
        name: name,
        rollNo: rollNo,
        branch: branch,
        phone: phone,
        email: email,
        address: address,
    };
    Students.insertOne(newStudent);
    res.status(200).json({message:"Student Added Successfully "});

    }catch(e){
        res.status(500).json({message:'failed to add the student'})
        console.log(err);

    }
};
module.exports=addStudent;