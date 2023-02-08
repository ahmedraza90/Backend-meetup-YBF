const { BaseError } = require('../helpers/errorHandling')
const { formatResponse, createResponse } = require('../helpers/formatter')
const { mixmax } = require('../helpers/mixmax')
const POAP = require('../models/POAP')

async function add_POAP(data) {
    // const lengths =await User.count()
    // if(lengths >100){
    //     return formatResponse(
    //         200,
    //         "sold out",
    //         "sold out"
    //     )
    // }
    const { email } = data;
    const oldUser = await POAP.findOne({ email });
    if (oldUser) {
        return formatResponse(
            200,
            "Fail",
            "Email already registered"
        );
    }
    await POAP.create(data)
    return formatResponse(
        200,
        "Success",
    );
}

async function POAP_get_all_users() {
    const data = await POAP.find({}).exec();
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

async function POAP_get_user_by(query) {
    
    const par = Object.keys(query)[0]
    if (["name", "twitter", "email"].includes(par) == false) {
        return formatResponse(
            200,
            "Wrong query parameters"
        );
    }
    const data = await POAP.find(query).exec();
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
    add_POAP,
    POAP_get_all_users,
    POAP_get_user_by
}
