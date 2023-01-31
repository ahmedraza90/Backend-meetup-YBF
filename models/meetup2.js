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
            // validate: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ | ^null$/,
        },
        country: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
        strict: true,
        strictQuery: false
    }
);

module.exports = mongoose.model("meetupUsers#2", userSchema);
