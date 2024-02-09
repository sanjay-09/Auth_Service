const express=require("express");
// const {PORT}=require("../src/config/serverConfig.js");
const PORT=3001;
const userService=require("./services/user-service");
const dotenv=require("dotenv");
dotenv.config({path:"../.env"});

const db=require("./models/index.js");
const {User,Role}=require("./models/index.js");

const app=express();
const apiRouter=require("./Routes/index");
const bodyParser = require("body-parser");
const startServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.use("/AuthService/api",apiRouter);

    app.listen(PORT,async(req,res)=>{
        
        console.log(`server is listening on the Port ${PORT}`);
        
       
    })
}
startServer();