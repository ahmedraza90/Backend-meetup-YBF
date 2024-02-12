const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        link: {
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

module.exports = mongoose.model("fido_link", userSchema);
