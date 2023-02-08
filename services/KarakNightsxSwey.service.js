const { BaseError } = require('../helpers/errorHandling')
const { formatResponse, createResponse } = require('../helpers/formatter')
const { mixmax } = require('../helpers/mixmax')
const KarakNightsxSwey = require('../models/KarakNightsxSwey')

async function add_KarakNightsxSwey(data) {
    // const lengths =await User.count()
    // if(lengths >100){
    //     return formatResponse(
    //         200,
    //         "sold out",
    //         "sold out"
    //     )
    // }
    const { email } = data;
    const oldUser = await KarakNightsxSwey.findOne({ email });
    if (oldUser) {
        return formatResponse(
            200,
            "Fail",
            "Email already registered"
        );
    }
    await mixmax(email,"Karak Nights x Swey NFT")
    await KarakNightsxSwey.create(data)
    return formatResponse(
        200,
        "Success",
    );
}

async function KarakNightsxSwey_get_all_users() {
    const data = await KarakNightsxSwey.find({}).exec();
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

async function KarakNightsxSwey_get_user_by(query) {
    
    const par = Object.keys(query)[0]
    if (["name","email"].includes(par) == false) {
        return formatResponse(
            200,
            "Wrong query parameters"
        );
    }
    const data = await KarakNightsxSwey.find(query).exec();
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
    add_KarakNightsxSwey,
    KarakNightsxSwey_get_all_users,
    KarakNightsxSwey_get_user_by
}
