const {send_watsApp,generate_qr_code,get_all_users,get_user_by_phone } = require('./qr.service')
const {send_email,meetup_get_all_users,meetup_get_user_by} = require('./meetup.service')
const {save_women,women_get_all_users,women_get_user_by} = require('./women.service')
const {meetup2_send_email,meetup2_get_all_users,meetup2_get_user_by} = require('./meetup2.service')

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
const meetup2Service = {
    meetup2_send_email,
    meetup2_get_all_users,
    meetup2_get_user_by
}
const womenService = {
    save_women,
    women_get_all_users,
    women_get_user_by

}
module.exports = {
    qrService,
    meetupService,
    womenService,
    meetup2Service
}
