const {formatResponse} = require('../helpers/formatter')
const {fidoService} = require('../services')

async function merkle_root(req, res) {
    try {
        const response = await fidoService.merkleRoot()
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
        const response = await fidoService.wallet_checker(req.params)
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
async function contract_deploy(req, res) {
    try {
        const response = await fidoService.contract_deploy(req.params)
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
async function contract_read(req, res) {
    try {
        const response = await fidoService.contract_read()
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
    merkle_root,
    get_user_by,
    contract_deploy,
    contract_read
}