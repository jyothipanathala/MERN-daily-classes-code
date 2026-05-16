const express=require("express")  // for import express
const app=express();
const env=require("dotenv")
const connection=require("./config/database")
const UserRouter=require("./routes/userRouter")
env.config();
const PORT=process.env.PORT  //PORT is a variable name and store
connection()
app.use(express.json());  //middle layer
app.use("/user",UserRouter);  //middle layer
app.listen(PORT,()=>{
    console.log("server running on :",PORT);
});  // to start sthe server app.listen