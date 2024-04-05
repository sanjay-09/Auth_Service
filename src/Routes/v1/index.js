const router=require("express").Router();
const userController=require("../../Controllers/userController");
const { AuthValidator}=require("../../middlewares/index")


router.post("/user",AuthValidator.AuthValidatorReq,userController.create);


router.get("/user/:id",userController.getById);

router.delete("/user/:id",userController.destroy);

router.get("/signin",AuthValidator.AuthValidatorReq,userController.signIn);

router.get("/isAuthenticated",userController.isAuthenticated);

router.get("/isAdmin",AuthValidator.validateIsAdmin,userController.isAdmin);


module.exports=router;