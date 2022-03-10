const jwt = require('jwt-simple')
const moment = require('moment')
const secret = 'SebasHacker'

exports.creaToken = (empleado) =>{

    const payload = {
        sub: empleado._id,
        nombres: empleado.nombre,
        email: empleado.email,
        tipoUsuario: empleado.tipoUsuario,
        iat: moment().unix(),
        expiresIn: moment().add(1,'days').unix()
    }

    return jwt.encode(payload, secret)
}