const {Schema, model} = require('mongoose')

const proyectoSchema = new Schema({
    nombre:{
        type: String,
    },
    descripcion:{
        type: String,
    },
    empladosAsignados:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Empleado'
        }
    ],
    tareasAsginadas:[
        { 
            type: Schema.Types.ObjectId,
            ref: 'Tarea'
        }
    ],
    completado:{
        type: Boolean,
        default: false
    }
},{
    timestamps:{
        createdAt: 'createdAt:',
        updateAt: 'updateAt:'
}})

module.exports = model('Proyecto', proyectoSchema)