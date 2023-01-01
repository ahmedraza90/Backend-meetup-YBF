const {send_watsApp,generate_qr_code,get_all_users,get_user_by_phone } = require('./qr.service')
const {send_email,meetup_get_all_users,meetup_get_user_by} = require('./meetup.service')

const qrService = {
    send_watsApp,
    generate_qr_code,
    get_all_users,
    get_user_by_phone
}
const meetupService = {
    send_email,
    meetup_get_all_users,
    meetup_get_user_by
}
module.exports = {
    qrService,
    meetupService
}
