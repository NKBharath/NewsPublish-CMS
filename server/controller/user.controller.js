const { default: mongoose } = require("mongoose");
const UsersModel = require("../models/users.model")
const ObjectId = mongoose.Types.ObjectId;

const viewuser = async (req, res)=>{
    try{
        const user = await UsersModel.find({}, '-password');
        res.status(200).json({
            success:true,
            message:"User fetched successfully",
            user,
        })
    } catch(errror){
        res.status(500).json({
            success:false,
            message:"Internal server error",
        })
    }
}

const deleteuser = async (req, res)=>{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    try{
        const user = await UsersModel.deleteOne(query);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found",
            })
        }
        return res.status(200).json({
            success:true,
            message:"User deleted successfully",
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error",
        })
    }
}

module.exports={viewuser, deleteuser};