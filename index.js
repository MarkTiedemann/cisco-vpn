'use strict'

const { exec } = require('child_process')
const { writeFile } = require('fs')
const tmp = require('tmp')
const x = require('throw-if-missing')

module.exports = ({ exe = 'C:/Program Files (x86)/Cisco/Cisco AnyConnect Secure Mobility Client/vpncli.exe',
                    server = x`server`, username = x`username`, password = x`password`, yes = `yes`, group = `group` }) => {

    this.connect = () =>
        new Promise((resolve, reject) =>
            tmp.file({ prefix: 'vpn-', postfix: '.txt' }, (err, path, fd, cleanup) => {
                if (err) reject(err)
                else writeFile(path, `${yes}${group}${username}\n${password}\n`, err => {
                    if (err) reject(err)
                    else exec(`"${exe}" connect ${server} -s < ${path}`, (err, stdout) => {
                        cleanup()
                        if (err) reject(err)
                        else if (!stdout.trim().endsWith('state: Connected')) reject(new Error(stdout))
                        else resolve()
                    })
                })
            })
        )

    this.disconnect = () =>
        new Promise((resolve, reject) =>
            exec(`"${exe}" disconnect`, (err, stdout) => {
                if (err) reject(err)
                else if (!stdout.trim().endsWith('state: Disconnected')) reject(new Error(stdout))
                else resolve()
            })
        )

    return this
}
