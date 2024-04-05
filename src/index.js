const express=require("express");
const {PORT,Node_ENV}=require("../src/config/serverConfig.js");

const userService=require("./services/user-service");


const db=require("./models/index.js");
const {User,Role}=require("./models/index.js");

const app=express();
const apiRouter=require("./Routes/index");
const bodyParser = require("body-parser");
const startServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.use("/AuthService/api",apiRouter);
    app.get("/",(req,res)=>{
        return res.send("ok");
    })

    app.listen(PORT,async(req,res)=>{
        const user=await User.findOne({
            where:{
                email:"sanju.watson0110@gmail.com"
            }
        });
        const role1=await Role.findOne({
            where:{
                name:"ADMIN"
            }
        });
        const role2=await Role.findOne({
            where:{
                name:"AIRLINE BUSINESS"
            }
        });
        await user.addRoles([role1,role2]);
      
       
        console.log(`server is listening on the Port ${PORT}`);
        
       
    })
}
startServer();