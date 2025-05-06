const PublisherModel = require("../models/publisher.model");

const registerpublisher = async (req, res) => {
    const {name, email, category, mobileNumber, address} = req.body;
    try{
        const publisher = await PublisherModel.findOne({email});
        if(publisher){
            return res.json({
                message: "Publisher already existes",
                success: false,
            })
        }
        const newPublisher = new PublisherModel({
            name,
            email,
            category,
            mobileNumber,
            address,
        })
        await newPublisher.save();
        return res.status(200).json({
            message: "Publisher registered successfully",
            success: true,
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            message: "internal server error",
            success: false,
        })
    }
}

const viewpublisher = async(req, res) => {
    try{
        const publisher = await PublisherModel.find({}, "-password");
        return res.status(200).json({
            status:true,
            message:"Publisher fetched successfully",
            publisher,
        })

    }
    catch(error){
        res.status(500).json({
            status:false,
            message:"Internal server error",
        })
    }
}

module.exports = {
    registerpublisher,
    viewpublisher,
};