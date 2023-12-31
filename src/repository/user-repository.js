const {User,Role}=require("../models/index");
const validateError=require("../utils/validation-error");
class userRepository{
    async create(data){
        try{
            console.log("repo");
            const user=await User.create(data);
            return user;

        }
        catch(error){
            console.log("in the error block")
        
            if(error.name=="SequelizeValidationError"){
               
                throw new validateError(error);
              




            }
            
            
        }
    }
    async destroy(userId){
        try{
            await User.destroy({
                where:{
                    id:userId
                }
            });
            return true;

        }
        catch(err){
            throw err;
        }
    }
 async getById(userId){
    try{
        console.log(userId)
        const res=await User.findByPk(userId,{
             attributes:["email","id"]
        });
        console.log(res);
        return res;

    }
    catch(err){
        throw err;
    }
 }
async getByEmail(inComingEmail){
    try{
        const email=await User.findOne({
            where:{
                email:inComingEmail
            }
        })
        
        return email;
        
    }
    catch(err){
        throw err;
    }
}
async isAdmin(userId){
    try{
        const user=await User.findByPk(userId);
        const adminRole=await Role.findOne({
            where:{
                name:"ADMIN"
            }
        })
        return user.hasRole(adminRole);

    }
    catch(err){
        throw err;
    }
}

}
module.exports=userRepository;