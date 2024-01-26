const { send_watsApp, generate_qr_code, get_all_users, get_user_by_phone } = require('./qr.service')
const { send_email, meetup_get_all_users, meetup_get_user_by } = require('./meetup.service')
const { save_women, women_get_all_users, women_get_user_by } = require('./women.service')
const { meetup2_send_email, meetup2_get_all_users, meetup2_get_user_by } = require('./meetup2.service')
const { add_POAP, POAP_get_all_users, POAP_get_user_by } = require('./POAP.service')
const { add_KarakNightsxSwey, KarakNightsxSwey_get_all_users, KarakNightsxSwey_get_user_by } = require('./KarakNightsxSwey.service')
const { save_twinCyclops, twinCyclops_get_all_users, twinCyclops_get_user_by } = require("./TwinCyclops.service")
const { save_ogNFT, ogNFT_get_all_users, ogNFT_get_user_by } = require("./ogNFT.service")
const { save_Samra, Samra_get_all_users, Samra_get_user_by } = require("./samra.service")
const { flappy_save_user,flappy_update_user,flappy_get_all_users,flappy_get_users } = require('./flappy.service')
const { save_africa, africa_get_all_users, africa_get_user_by} = require('./africa.service')
const { save_she,she_get_all_users,she_get_user_by} = require('./she.service')
const { save_form, form_get_all_users, form_get_user_by} = require("./form.service")
const { baller_save_user, baller_get_all_users, baller_get_users, baller_update_user} = require("./baller.service")
const { wallet_checker, merkleRoot} = require("./fido/fido.service")

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
const POAPService = {
    add_POAP,
    POAP_get_all_users,
    POAP_get_user_by
}
const KarakNightsxSweyService = {
    add_KarakNightsxSwey,
    KarakNightsxSwey_get_all_users,
    KarakNightsxSwey_get_user_by
}
const twinCyclopsService = {
    save_twinCyclops,
    twinCyclops_get_all_users,
    twinCyclops_get_user_by
}
const ogNFTService = {
    save_ogNFT,
    ogNFT_get_all_users,
    ogNFT_get_user_by
}
const SamraService = {
    save_Samra,
    Samra_get_all_users,
    Samra_get_user_by
}

const FlappyService = {
    flappy_save_user,
    flappy_update_user,
    flappy_get_all_users,
    flappy_get_users
}

const africaService = {
    save_africa,
    africa_get_user_by,
    africa_get_all_users
}
const sheService = {
    save_she,
    she_get_user_by,
    she_get_all_users
}

const formService = {
    save_form,
    form_get_all_users,
    form_get_user_by
}
const ballerService = {
    baller_save_user,
    baller_update_user,
    baller_get_users,
    baller_get_all_users
}
const fidoService = {
    wallet_checker,
    merkleRoot
}
module.exports = {
    qrService,
    meetupService,
    womenService,
    meetup2Service,
    POAPService,
    KarakNightsxSweyService,
    twinCyclopsService,
    ogNFTService,
    SamraService,
    FlappyService,
    africaService,
    sheService,
    formService,
    ballerService,
    fidoService
}
