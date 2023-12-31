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
        return res.status(error.status).json({
            data:{},
            status:false,
            message:error.message,
            err:error.explanation
        })

    }

}

const destroy=async(req,res)=>{
    try{
        const res=await UserService.destroy(req.params.id);
        return res.status(201).json({
            data:res,
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
            err:err
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
        const response=await UserService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Successfully signin",
            err:{}
            
        })

    }
    catch(err){
       return res.status(500).json({
        data:{},
        status:false,
        message:"Cannot signIn",
        err:{err}
       })
    }
}
const isAuthenticated=async(req,res)=>{
    try{
        const token=req.headers['x-access-token'];
        const response=await UserService.authenticateUser(token);
        return res.status(500).json({
            data:response,
            status:true,
            message:"token validated",
            err:{}


        })

    }
    catch(err){
        return res.status(500).json({
            data:response,
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