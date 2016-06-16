
# cisco-vpn

**Wrapper around the Cisco AnyConnect VPN client.**

## Installation

```
npm install cisco-vpn
```

## Quickstart

```js
const vpn = require('cisco-vpn')({
    server: 'vpn.example.org',
    username: 'uncreative-username',
    password: 'super-secret-password'
})

vpn.connect()
    .then(() => console.log('connected!'))

// some time later
vpn.disconnect()
    .then(() => console.log('disconnected!'))
```


## API

### `require('cisco-vpn')(options)`

- **options** `<Object>`:
    - **exe** `<String>`: *default*: `C:/Program Files (x86)/Cisco/Cisco AnyConnect Secure Mobility Client/vpncli.exe`
    - **server** `<String>`: *required*
    - **username** `<String>`: *required*
    - **password** `<String>`: *required*
- **returns** the vpn `<Object>`

### `vpn.connect()`

- **returns** a `<Promise>` which:
    - **resolves** if the vpn was connected
    - **rejects** if an error occured

### `vpn.disconnect()`

- **returns** a `<Promise>` which:
    - **resolves** if the vpn was disconnected
    - **rejects** if an error occured

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
