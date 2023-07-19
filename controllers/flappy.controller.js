const {formatResponse} = require('../helpers/formatter')
const {FlappyService} = require('../services')

async function save(req, res) {
    try {
        const response = await FlappyService.flappy_save_user(req.body)
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
async function update(req, res) {
    try {
        const response = await FlappyService.flappy_update_user(req.body)
        console.log(response)
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
        const response = await FlappyService.flappy_get_all_users()
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
    update,
    get_all_users,   
}