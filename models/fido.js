const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        walletAddress: {
            type: String,
            required: true,
        },
        proof : {
            type: Array,
            required: true
        }
        
    },
    {
        timestamps: true,
        strict: true,
        strictQuery: false
    }
);

module.exports = mongoose.model("fido_dido", userSchema);
