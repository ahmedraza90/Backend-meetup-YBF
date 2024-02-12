const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        contractAddress: {
            type: String,
            required: true,
        },
        flag : {
            type: Boolean,
            default: false
        }   
    },
    {
        timestamps: true,
        strict: true,
        strictQuery: false
    }
);

module.exports = mongoose.model("fido_dido", userSchema);
