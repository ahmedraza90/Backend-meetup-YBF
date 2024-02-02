const { BaseError } = require('../helpers/errorHandling')
const { formatResponse } = require('../helpers/formatter')
const User = require('../models/baller')

async function baller_save_user(data) {

    const { walletAddress } = data;
    const oldUser = await User.findOne({ walletAddress });
    if (oldUser) {
        return formatResponse(
            200,
            "Fail",
            "User already registered"
        );
    }
    await User.create(data)
    return formatResponse(
        200,
        "Success",
    );
    
}

async function baller_update_user(data) { 
     
    const { walletAddress, score } = data;
    try {
        await User.findOneAndUpdate({ walletAddress }, { score });
        // const scores = await User.find({});
        const excludedFields = ['_id','createdAt','updatedAt','__v']; 
        const scores = await User.find({}).select(excludedFields.map(field => `-${field}`)).sort({score: -1});
        return formatResponse(200,"Success","",[scores])
    } catch (error) {
        console.error("Error while updating user:", error);
    }

}

async function baller_get_all_users() {

    const excludedFields = ['_id','createdAt','updatedAt','__v']; 
    const scores = await User.find({}).select(excludedFields.map(field => `-${field}`)).sort({score: -1});
    return formatResponse(
        200,
        "Success",
        "",
        { scores }
    );

}

async function baller_get_users(walletAddress) {
 
    try {
        const excludedFields = ['_id','createdAt','updatedAt','__v']; 
        const scores = await User.findOne({ walletAddress }).select(excludedFields.map(field => `-${field}`));
        return formatResponse(200,"Success","",scores._doc)
    } catch (error) {
        console.error("Error while updating user:", error);
    }

}

module.exports = {
    baller_save_user,
    baller_update_user,
    baller_get_all_users,
    baller_get_users
}