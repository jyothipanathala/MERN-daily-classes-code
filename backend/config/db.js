const mongoose=require("mongoose");

const connection=async()=>{
try{

 await mongoose.connect("mongodb://localhost:27017/bits_Colleges");
    console.log("DB Connected successfully");

} catch(error){
  console.log("Failed to connect DB")
}
};

module.exports=connection;


