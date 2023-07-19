const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        score: {
            type: Number,
            default: 0
        },
        walletAddress: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
        strict: true,
        strictQuery: false
    }
);

module.exports = mongoose.model("flappy", userSchema);
