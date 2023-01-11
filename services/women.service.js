const { BaseError } = require('../helpers/errorHandling')
const { formatResponse, createResponse } = require('../helpers/formatter')
const { mixmax } = require('../helpers/mixmax')
const User = require('../models/women')

async function save_women(data) {
    // const lengths =await User.count()
    // if(lengths >100){
    //     return formatResponse(
    //         200,
    //         "sold out",
    //         "sold out"
    //     )
    // }
    const { email } = data;
    const oldUser = await User.findOne({ email });
    if (oldUser) {
        return formatResponse(
            200,
            "Fail",
            "Email already registered"
        );
    }
    await User.create(data)
    return formatResponse(
        200,
        "Success",
    );
}

async function women_get_all_users() {
    const data = await User.find({}).exec();
    if (data.length == 0) {
        throw new BaseError("there is no user yet", 401)
    }
    return formatResponse(
        200,
        "Success",
        "",
        { data }
    );
}

async function women_get_user_by(query) {
    
    const par = Object.keys(query)[0]
    if (["name", "country", "phoneNumber", "email"].includes(par) == false) {
        return formatResponse(
            200,
            "Wrong query parameters"
        );
    }
    const data = await User.find(query).exec();
    if (data.length == 0) {
        throw new BaseError("there is no users yet", 401)
    }
    return formatResponse(
        200,
        "Success",
        "",
        { data }
    );
}

module.exports = {
    save_women,
    women_get_all_users,
    women_get_user_by
}
