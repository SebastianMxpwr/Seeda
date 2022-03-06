const Proyecto = require('../models/proyecto')
const Tarea = require('../models/tarea')

const obtenerProyectos = async (req, res) =>{

    const proyectosObtenidos = await Proyecto.find({
      Editado: false,
    }).populate([
      {
        path: 'empladosAsignados',
        match: { blnActivo: true },
      },
      {
          path: 'tareasAsginadas',
          match: {Editado: false}
      }
    ]);
    if(proyectosObtenidos.length == 0){
        res.status(404).send({
            msg: 'No hay proyectos activos'
        })
    }else{
        res.status(200).send({
            msg: 'Proyectos obtenidos correctamente',
            cont: proyectosObtenidos
        })
    }
}

const obtenerProyectosyTareasPorUsuario = async (req, res) =>{

    let idUsuario = req.params.idUsuario
    
    if(!idUsuario){
        res.status(404).send({
            msg: 'No se recibio un id valido'
        })
    }

    const existenciaEnProyecto = await Proyecto.findOne({empladosAsignados: idUsuario})

    if(!existenciaEnProyecto){
        res.status(404).send({
            msg: 'No esta en este proyecto (mostrar este error o no)'
        })
    }else{

        const tareasAsignadasAlUsuario = await Tarea.find({asignacion: idUsuario}).populate('asignacion')
        if(tareasAsignadasAlUsuario.length == 0){
            res.status(404).send({
                msg: 'No hay tareas asignadas para ti'
            })
        }else{
            let temp = []
            for (let i = 0; i < tareasAsignadasAlUsuario.length; i++) {
                const tareaEnProyecto = await Proyecto.findOne({tareasAsginadas: tareasAsignadasAlUsuario[i]._id}).populate('tareasAsginadas')
                if(tareaEnProyecto){
                    temp.push(tareaEnProyecto.tareasAsginadas)
                }
                console.log(temp);
            }
            if(temp.length == 0){
                res.status(404).send({
                    msg: 'No hay tareas asignadas para ti'
                })
            }else{
                res.status(200).send({
                    msg: 'Tareas asignadas para ti',
                    cont: temp
                })
            }
        }
    }
}

const agregarProyectos = async (req, res) =>{

    let body = req.body

    if(!body.empladosAsignados){
        res.status(400).send({
            msg: 'No hay usuarios asginados en este proyecto'
        })
    }
    if(!body.tareasAsginadas){
        res.status(400).send({
            msg: 'Se requiren tareas para asignar en este proyecto'
        })
    }

    const proyectoAgregado = await Proyecto.create(body)
    if(!proyectoAgregado){
        res.status(500).send({
            msg: 'No se pudo aregar el proyecto'
        })
    }else{
        res.status(200).send({
            msg: 'Proyecto creado con exito',
            cont: proyectoAgregado
        }) 
    }

}

const agregarEmpleados = async (req, res)=>{

    const {idProyecto} = req.params
    const {empladosAsignados} = req.body
    
    const nuevoEmpleado = await Proyecto.findByIdAndUpdate(idProyecto,{$push:{empladosAsignados: empladosAsignados}}, {new:true})
    if(!nuevoEmpleado){
        res.status(500).send({
            msg: 'No se pudo agragar al nuevo empleado'
        })
    }else{
        res.status(200).send({
            msg: 'emleado asignado',
            cont: nuevoEmpleado
        })
    }
}

const agregarTareas = async (req, res)=>{
    const {idProyecto} = req.params
    const {tareasAsginadas} = req.body
    
    const nuevaTarea = await Proyecto.findByIdAndUpdate(idProyecto,{$push:{tareasAsginadas: tareasAsginadas}}, {new:true})
    if(!nuevaTarea){
        res.status(500).send({
            msg: 'No se pudo agregar la nueva tarea'
        })
    }else{
        res.status(200).send({
            msg: 'tarea asignado',
            cont: nuevaTarea
        })
    }
}

const completarProyecto = async (req, res)=>{

    let id = req.params.id

    if(!id){
        res.status(404).send({
            msg: 'No se recibio un id valido'
        })
    }

    const proyectoEditado = await Proyecto.findByIdAndUpdate(id,{Editado: true},{new:true})
    if(!proyectoEditado){
        res.status(500).send({
            msg: 'No se pudo completar el proyecto intente de nuevo'
        })
    }else{
        res.status(200).send({
            msg: 'Exito al completar'
        })
    }
}

const editarProyecto = async (req, res)=>{

    let body = req.body
    let id = req.params.id

    if(!id){
        res.status(404).send({
            msg: 'No se recibio un id valido'
        })
    }

    const proyectoEditado = await Proyecto.findByIdAndUpdate(id,body,{new:true})
    if(!proyectoEditado){
        res.status(500).send({
            msg: 'No se pudo editar el proyecto intente de nuevo'
        })
    }else{
        res.status(200).send({
            msg: 'Exito al editar',
            cont: proyectoEditado
        })
    }
}

const eliminarProyecto = async (req, res)=>{

    let id = req.params.id

    if(!id){
        res.status(404).send({
            msg: 'No se recibio un id valido'
        })
    }

    const proyectoEliminado= await Proyecto.findByIdAndUpdate(id,{Editado: true},{new:true})
    if(!proyectoEliminado){
        res.status(500).send({
            msg: 'No se pudo eliminar el proyecto intente de nuevo'
        })
    }else{
        res.status(200).send({
            msg: 'Exito al eliminar'
        })
    }
}

module.exports = {
    obtenerProyectos,
    obtenerProyectosyTareasPorUsuario,
    agregarProyectos,
    completarProyecto,
    editarProyecto,
    eliminarProyecto,
    agregarEmpleados,
    agregarTareas
    
}