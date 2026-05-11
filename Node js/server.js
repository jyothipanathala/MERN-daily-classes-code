const {displayUser,postUsers,deleteUser,displayUserBasedEmail,updateName}=require("./store/UserStorage");
console.log("before post users:",displayUser());


postUsers({name:"san",email:"admin@gmail.com"});
postUsers({name:"nani",email:"nani@gmail.com"});
postUsers({name:"jyothi",email:"jyo@gmail.com"})

console.log("after post user Details",displayUser());
deleteUser("san");
console.log("after delete User:",displayUser());

console.log(" Email: nani@gmail.com",displayUserBasedEmail('nani@gmail.com'));

 updateName("sanhi ",'san@gmail.com')



 