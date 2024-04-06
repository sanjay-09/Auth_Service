const userService=require("../services/user-service");
const UserService=new userService();

const create=async(req,res)=>{
    try{
        console.log("controller");
        const user=await UserService.create({
            email:req.body.email,
            password:req.body.password
        });

        
        return res.status(201).json({
            data:user,
            status:true,
            message:"Succesffuly created the user",
            err:{}

        })

    }
    catch(error){
    
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannnot create the user",
            err:error.message
        })

    }

}

const destroy=async(req,res)=>{
    try{
        const response=await UserService.destroy(req.params.id);
        return res.status(201).json({
            data:response,
            status:true,
            message:"deleted a user",
            err:{}

        })

    }
    catch(err){
       
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot delete the city",
            err:err.message
        })
       
    }
}

const getById=async(req,res)=>{
    try{
        const result=await UserService.getById(req.params.id);
        return res.status(200).json({
            data:result,
            status:true,
            message:"succesfully fetched the user",
            err:{}
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot get the city",
            err:err
        })
    }
}
const signIn=async(req,res)=>{
    try{
       
        const response=await UserService.signIn(req.query.email,req.query.password);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Successfully signin",
            err:{}
            
        })

    }
    catch(error){
       
       return res.status(500).json({
        data:{},
        status:false,
        message:error.err.message,
        err:error.err.explanation
       })
    }
}
const isAuthenticated=async(req,res)=>{
    try{
        const token=req.headers['x-access-token'];
        
        const response=await UserService.authenticateUser(token);
       
        return res.status(200).json({
            data:response,
            status:true,
            message:"token validated",
            err:{}


        })

    }
    catch(err){
        return res.status(200).json({
            data:{},
            status:false,
            message:"Cannot authenticate",
            message:err

        })
    }
}
const isAdmin=async(req,res)=>{
    try{
        const response=await UserService.isAdmin(req.body.id);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Successfully checked the admin request",
            err:{}
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not validated the admin request",
            err:{err}
        })
    }
}
module.exports={
    create,
    destroy,
    getById,
    signIn,
    isAuthenticated,
    isAdmin

}