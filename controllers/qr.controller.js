const {formatResponse} = require('../helpers/formatter')
const {qrService} = require('../services')

async function send_watsApp(req, res) {
    try {
        console.log(req.body)
        const response = await qrService.send_watsApp(req.body)
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
async function generate_qr_code(req, res) {
    try {
        const { link } = req.body
        const response = await qrService.generate_qr_code(link)
        if (response) {
            console.log(response)
            return res.send(response)
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function get_all_users(req, res) {
    try {
        const response = await qrService.get_all_users()
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
async function get_user_by_phone(req, res) {
    try {
        const response = await qrService.get_user_by_phone(req.params.id)
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
    send_watsApp,
    generate_qr_code,
    get_all_users,   
    get_user_by_phone
}