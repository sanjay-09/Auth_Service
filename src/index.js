const express=require("express");
const {PORT}=require("./config/serverConfig")
const app=express();
const startServer=()=>{

    app.listen(PORT,(req,res)=>{
        console.log(`server is listening on the Port ${3000}`)
    })
}
startServer();