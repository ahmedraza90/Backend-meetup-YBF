const { BaseError } = require('../helpers/errorHandling')
const { formatResponse, createResponse } = require('../helpers/formatter')
var QRCode = require('qrcode')
const { sendMessage, getTextMessageInput } = require("../helpers/watsapp.js");
const User = require('../models/qr');

async function send_watsApp(data) {
    const { name, email, phoneNumber } = data;
    const oldUser = await User.findOne({
        $or: [
            { email },
            { phoneNumber }
        ]
    });
    if (oldUser) {
        return formatResponse(
            200,
            "Fail",
            "Number already exist"
        );
    }
    try {
        await User.create(data)
        return formatResponse(
            200,
            "Success",
        );
    } catch (e) {
        console.log(e)
        process.exit()
    }
    // var datas = getTextMessageInput(phoneNumber, 'Welcome to the OasisX Demo App');
    // try {
    //   await sendMessage(datas)
    // await User.create(data)
    // console.log('success')
    // return formatResponse(
    //   200,
    // "Success",
    //  );
    //  } catch (e) {
    //    console.log(e)
    //  process.exit()
    // }
}
async function generate_qr_code(link) {
    try {
        QRCode.toDataURL(link, { errorCorrectionLevel: 'H' }, function (err, url) { 
            console.log(url)
            process.exit()
        })
    } catch (e) {
        console.log(e)
        process.exit()
    }
}
async function get_all_users() {
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
async function get_user_by_phone(phoneNumber) {

    const data = await User.find({ phoneNumber }).exec();
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
    send_watsApp,
    generate_qr_code,
    get_all_users,
    get_user_by_phone
}
