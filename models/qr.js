const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        phoneNumber: {
            type: Number,
            unique: true,
            required: true,
            unique: true,
        }

    },
    {
        timestamps: true,
        strict: true,
        strictQuery: false
    }
);

module.exports = mongoose.model("ybfUsers", userSchema);
