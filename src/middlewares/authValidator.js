const AuthValidatorReq=(req,res,next)=>{
    const email=req?.body?.email?req.body.email:req.query.email;
    const password=req?.body?.email ? req.body.password:req.query.password
    if(!email||!password){
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