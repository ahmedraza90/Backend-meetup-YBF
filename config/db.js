const mongoose = require("mongoose");

// const uri = "mongodb+srv://najib:J$f3C_68N*!nRbR@cluster0.3u6nqfa.mongodb.net/?retryWrites=true&w=majority"
const uri = "mongodb+srv://admin:admin@cluster0.qcvzpxz.mongodb.net/?retryWrites=true&w=majority"
exports.connect = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
    })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};
