const {formatResponse} = require('../helpers/formatter')
const {meetup2Service} = require('../services')

async function send_email(req, res) {
    try {
        const response = await meetup2Service.meetup2_send_email(req.body)
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function get_all_users(req, res) {
    try {
        const response = await meetup2Service.meetup2_get_all_users()
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function get_user_by(req, res) {
    try {
        // console.log(req)
        const response = await meetup2Service.meetup2_get_user_by(req.query)
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}

module.exports = {
    send_email,
    get_all_users,   
    get_user_by
}