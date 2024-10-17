const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    password: {
        type: String,
        
    },
    hobby: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },
    city: {
        type: String,
        
    },
    createdAt: {
        type: String,
        
    }
})

const admin = mongoose.model("Admin", adminSchema)

module.exports = admin