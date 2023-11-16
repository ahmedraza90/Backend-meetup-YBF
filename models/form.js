const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        twitter: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
        },
        walletAddress: {
            type: String,
            unique: true,
            required: true,
        },
        answer: {
            type: String,
            required: true,            
        }
        
    },
    {
        timestamps: true,
        strict: true,
        strictQuery: false
    }
);

module.exports = mongoose.model("form", userSchema);
