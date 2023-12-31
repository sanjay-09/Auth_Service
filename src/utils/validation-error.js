const { StatusCodes } = require("http-status-codes");
const AppError=require("./error-codes");
class validateError extends AppError{
    constructor(error){
       let errorName=error.name;
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        
        super(errorName,
            "Something went wrong",
            explanation,
            StatusCodes.BAD_REQUEST);

    }
}
module.exports=validateError;