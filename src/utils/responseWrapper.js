const errorHandler=(statusCode,message)=>{
    return{
        statusCode,
        message,
    }
}
module.exports=errorHandler;