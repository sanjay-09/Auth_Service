const {StatusCodes}=require("http-status-codes");
class AppError extends Error{
    constructor(name="AppError",message="Something went Wrong",explanation="Something went Wrong",status=StatusCodes.INTERNAL_SERVER_ERROR){
        super();
        this.name=name,
        this.message=message,
        this.explanation=explanation,
        this.status=status;
    }
}
module.exports=AppError;