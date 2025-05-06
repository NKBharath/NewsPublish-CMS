const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    role:{
        type: String,
        default: 'publisher',
    },
    category:{
        type: String,
        required: true,
    }
})

const PublisherModel = mongoose.model('publishers', publisherSchema);
module.exports = PublisherModel;