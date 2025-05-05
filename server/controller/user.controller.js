const UsersModel = require("../models/users.model")


const viewuser = async (req, res)=>{
    try{
        const user = await UsersModel.find({}, '-password');
        res.status(200).json({
            status:true,
            message:"User fetched successfully",
            user,
        })
    } catch(errror){
        res.status(500).json({
            status:false,
            message:"Internal server error",
        })
    }
}

module.exports={viewuser};