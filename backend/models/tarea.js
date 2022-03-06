const {Schema, model} = require('mongoose') 

const tareaSchema = new Schema({
    nombreTarea:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    completado:{
        type: Boolean,
        default: false
    },
    asignacion:{
        type: Schema.Types.ObjectId,
        ref: 'Empleado',
        required: true
    }
},{
    timestamps:{
        createdAt: 'createdAt:',
        updateAt: 'updateAt:'
}})

module.exports = model('Tarea', tareaSchema)