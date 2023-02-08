const {formatResponse} = require('../helpers/formatter')
const {KarakNightsxSweyService} = require('../services')

async function add_KarakNightsxSwey(req, res) {
    try {
        const response = await KarakNightsxSweyService.add_KarakNightsxSwey(req.body)
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
        const response = await KarakNightsxSweyService.KarakNightsxSwey_get_all_users()
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
        const response = await KarakNightsxSweyService.KarakNightsxSwey_get_user_by(req.query)
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
    add_KarakNightsxSwey,
    get_all_users,   
    get_user_by
}