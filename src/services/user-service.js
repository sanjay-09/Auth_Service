const userRepository=require("../repository/user-repository");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
const bcrypt=require("bcrypt");
const ClientError = require("../utils/client-error");
const {StatusCodes}=require("http-status-codes");


class userService{
    constructor(){
        this.UserRepository=new userRepository();
    }
    async create(data){
        try{
            console.log("service");
            const response=await this.UserRepository.create(data);
            console.log(response);
            return response;

        }
        catch(error){
            throw error;
            
        }
    }
    async destroy(userId){
        try{
            
            const res=await this.UserRepository.destroy(userId);
            return res;

        }
        catch(err){
            throw err;
        }
    }
    async getById(userId){
        try{
            const res=await this.UserRepository.getById(userId);
            return res;

        }
        catch(err){
            throw err;
        }
    }
    async signIn(inComingEmail,inComingPassword){
        try{
            //get the user on the basis of the inComingEmail
            const user=await this.UserRepository.getByEmail(inComingEmail);
            console.log(user);
        
            if(!user){
               
               
               
                throw new ClientError(
                    "attribute not found",
                     "Invalid email sent in the request",
                     'Please check the email,their is no record of email',
                     StatusCodes.NOT_FOUND

                )
            }
           
            const result=this.checkPassword(inComingPassword,user.password);
        
            if(!result){
                throw {error:"Plesse enter the correct password"}
            }
            const token=this.createToken({email:user.email,id:user.id});
            return token;


        }
        catch(err){
            throw {err};
        }
    }
     createToken(user){
        try{
           
            const token=jwt.sign(user,process.env.JwtKey,{expiresIn:'1d'});
            return token;

        }
        catch(err){
            throw err;
        }
    }
    verifyToken(token){
        try{
            const response= jwt.verify(token,process.env.JwtKey);
            return response;


        }
        catch(err){
            throw err;
        }
    }
    checkPassword(inComingPassword,hashedPassword){
        try{

            const result=bcrypt.compareSync(inComingPassword,hashedPassword);
        
            return result;
        }
        catch(err){
            throw err;
        }
    }
    async authenticateUser(token){
        try{
            const response=this.verifyToken(token);
            if(!response){
                throw {error:"Invalid token"}
            }
            const user=await this.UserRepository.getById(response.id);
            console.log(user);
            if(!user){
                throw {error:"This user is not present in db"}
            }
            return user.id;
 
        }
        catch(err){
            throw err;

        }
    }
    async isAdmin(userId){
        try{
            return await this.UserRepository.isAdmin(userId);

        }
        catch(err){
            throw err;
        }
    }

}
module.exports=userService;