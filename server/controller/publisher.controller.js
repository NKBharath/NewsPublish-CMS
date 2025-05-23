const PublisherModel = require("../models/publisher.model");


const registerpublisher = async (req, res) => {
    const {name, email, category} = req.body;
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
module.exports = {
    registerpublisher,
};