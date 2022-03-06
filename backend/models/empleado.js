const {Schema, model} = require('mongoose')

const empleadoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    contrasena:{
        type: String,
        required: true,
    },
    edad:{
        type: String,
        required: true,
    },
    cargo:{
        type: String,
        required: true,
    },
    tipoUsuario:{
        type: String,
        default: 'Trabajador'
    },
    blnActivo:{
        type: Boolean,
        default: true
    },
},{
    timestamps:{
        createdAt: 'createdAt:',
        updateAt: 'updateAt:'
}})

module.exports = model('Empleado', empleadoSchema)