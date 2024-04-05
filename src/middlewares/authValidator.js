const AuthValidatorReq=(req,res,next)=>{
    if(!req.query.email||!req.query.password){
        return res.status(400).json({
            data:{},
            status:false,
            message:"Please enter email and password in the request",
            err:{}

            
        })
    }
    next();
}
const validateIsAdmin=(req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            data:{},
            status:false,
            message:"Please enter the id",
            err:{}
        })
    }
    next();
}
module.exports={
    AuthValidatorReq,
    validateIsAdmin
}