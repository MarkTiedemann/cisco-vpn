'use strict'

const vpn = require('.')({
    server: '<server>',
    username: '<username>',
    password: '<password>'
})

vpn.connect()
    .then(() => console.log('connected!'))
    .then(vpn.disconnect)
    .then(() => console.log('disconnected!'))
    .catch(err => console.error(err))
