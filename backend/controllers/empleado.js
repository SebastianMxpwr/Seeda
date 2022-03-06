const Empleado = require('../models/empleado')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('../libs/jwt')

const obtenerTodosEmpleados = async (req, res) => {

    const empleados = await Empleado.find({blnActivo:true})

    if(!empleados){
        res.status(404).send({
            msg: 'No hay empleados'
        })
    }else{
        res.status(200).send({
            msg: 'Obtenidos con exito',
            cont: empleados
        })
    }
}

const obtenerEmpleado = async (req, res) => {

    let id = req.params.id

    if(!id){
        res.status(400).send({
            msg: 'No se recivio un id correcto'
        })
    }
    const empleado = await Empleado.findById(id)

    if(!empleado){
        res.status(404).send({
            msg: 'No existe el empleado'
        })
    }else{
        res.status(200).send({
            msg: 'Obtenido con exito',
            cont: empleado
        })
    }
}

const registroEmpleado = async(req, res)=>{
    let body = req.body

    const EmpleadoDuplicado = await Empleado.find({email: body.email})

    if(EmpleadoDuplicado == 0){
        if(!body.contrasena){
            res.status(400).send({
                msg: 'No se introdujo una contraseña'
            })
        }else{
            bcrypt.hash(body.contrasena,null,null, async(req,hash)=>{
                if(hash){
                    body.contrasena = hash
                    const reg = await Empleado.create(body)
                    res.status(200).send({
                        msg:'Empleado Creado',
                        res: reg
                    })
                }else{
                    res.status(400).send({
                        msg: 'Error del servidor, intente de nuevo'
                    })
                }
            })
        }
    }else{
        res.status(400).send({
            msg: 'Ya existe este empleado'
        })
    }
}

const loginEmpleado = async(req,res)=>{
    let body = req.body

    const EmpleadoEncontrado = await Empleado.findOne({email: body.email})

    if(!EmpleadoEncontrado){
        res.status(404).send({
            msg: 'El empleado no existe'
        })
    }else{
        bcrypt.compare(body.contrasena, EmpleadoEncontrado.contrasena, async(err, check)=>{
            if(check){
                res.status(200).send({
                    data: EmpleadoEncontrado,
                    jwt: jwt.creaToken(EmpleadoEncontrado)
                })
            }else{
                res.status(400).send({
                    msg: 'la contraseña no es correcta'
                })
            }
        })
    }
}

const modificarEmpleado = async(req, res)=>{
    let id = req.params.id
    let body = req.body

    if(!id){
        res.status(400).send({
            msg: 'no se recibio un id valido'
        })
    }

    const empleadoEncontrado = await Empleado.findById(id)
    if(!empleadoEncontrado){
        res.status(400).send({
            msg: 'No existe el empleado'
        })
    }
    const empleadoEncontradoActualizado = await Empleado.findByIdAndUpdate(id,body,{new:true})
    if(!empleadoEncontradoActualizado){
        res.status(400).send({
            msg: 'No se pudo actualizar el empleado'
        })
    }else{
        res.status(200).send({
            ok: true,
            msg: 'Exito al actualizar el empleado',
            status:200,
            cont: empleadoEncontradoActualizado
        })
    }
}

const eliminarEmpleado = async (req,res) => {

    let id = req.params.id
    let body = req.body

    if(!id){
        res.status(400).send({
            msg: 'No se recibio un id valido'
        })
    }
    const empleadoEncontrado = await Empleado.findById(id)

    if(!empleadoEncontrado){
        res.status(404).send({
            msg: 'El usuario no existe'
        })
    }else{

        const empleadoEncontradoEliminado = await Empleado.findByIdAndUpdate(id, {$set: {blnActivo:false}},{new:true})
        if(!empleadoEncontradoEliminado){
            res.status(400).send({
               ok: false,
               msg: 'No se pudo eliminar el empeado por alguna razon',
               status: 400
           })
       }else{
           res.status(200).send({
               ok: true,
               msg: 'Exito al eliminar el emleado',
               status:200,
               cont:empleadoEncontradoEliminado
           })
       }

    }

}

module.exports = {
    registroEmpleado,
    loginEmpleado,
    modificarEmpleado,
    obtenerTodosEmpleados,
    obtenerEmpleado,
    eliminarEmpleado
}