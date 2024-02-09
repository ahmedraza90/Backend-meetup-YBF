const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        merkleRoot: {
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

module.exports = mongoose.model("merkle", userSchema);
