require("./config/db").connect();
require("dotenv").config();
const express = require("express");
var bodyParser = require('body-parser')
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', '*')
    next()
})


module.exports = {app, router:express.Router()};
