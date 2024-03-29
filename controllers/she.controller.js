const {formatResponse} = require('../helpers/formatter')
const {sheService} = require('../services')

async function save(req, res) {
    try {
        const response = await sheService.save_she(req.body)
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
        const response = await sheService.she_get_all_users()
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
        const response = await sheService.she_get_user_by(req.query)
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
    save,
    get_all_users,   
    get_user_by
}