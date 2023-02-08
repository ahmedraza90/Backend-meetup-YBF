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
            required: true,
            trim: true,
            lowercase: true,
        },
        twitter: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        HowManyPOAP: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        describe:{
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        useCases:{
            type:Array,
            required: true,

        }
    },
    {
        timestamps: true,
        strict: true,
        strictQuery: false
    }
);

module.exports = mongoose.model("POAP", userSchema);
