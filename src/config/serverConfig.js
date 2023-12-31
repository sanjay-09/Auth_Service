const dotenv=require("dotenv");
const bcrypt=require("bcrypt");
dotenv.config({
    path:"../../.env"
});
const PORT=process.env.PORT;
const JWT_KEY=process.env.JwtKey;


module.exports={
    PORT:PORT,
    SALT:bcrypt.genSaltSync(10),
    JWT_KEY:JWT_KEY
}