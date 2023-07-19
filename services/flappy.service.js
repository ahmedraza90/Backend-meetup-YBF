const { BaseError } = require('../helpers/errorHandling')
const { formatResponse } = require('../helpers/formatter')
const User = require('../models/flappy')

async function flappy_save_user(data) {
    const { walletAddress } = data;
    const oldUser = await User.findOne({ walletAddress });
    if (oldUser) {
        return formatResponse(
            200,
            "Fail",
            "Email already registered"
        );
    }
    await User.create({ walletAddress })
    return formatResponse(
        200,
        "Success",
    );
}

async function flappy_update_user(data) {
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

async function flappy_get_all_users() {
    const excludedFields = ['_id','createdAt','updatedAt','__v']; 
    const scores = await User.find({}).select(excludedFields.map(field => `-${field}`)).sort({score: -1});
    return formatResponse(
        200,
        "Success",
        "",
        { scores }
    );
}

module.exports = {
    flappy_save_user,
    flappy_update_user,
    flappy_get_all_users
}