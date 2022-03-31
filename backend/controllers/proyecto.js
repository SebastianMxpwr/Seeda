'use strict'

const Proyecto = require('../models/proyecto')
const Tarea = require('../models/tarea')

const obtenerProyectos = async (req, res) =>{

    const proyectosObtenidos = await Proyecto.find({
        blnActivo: false,
    }).populate([
      {
        path: 'empladosAsignados',
        match: { blnActivo: true },
      },
      {
          path: 'tareasAsginadas'
      }
    ]);
    if(proyectosObtenidos.length == 0){
        res.status(404).send({
            msg: 'No hay proyectos activos'
        })
    }else{
        const tasks = []
        const employees = []
        for (let i = 0; i < proyectosObtenidos.length; i++) {
           for (let j = 0; j < proyectosObtenidos[i].tareasAsginadas.length; j++) {
            tasks.push(proyectosObtenidos[i].tareasAsginadas[j]);
               
           }
        }

        for (let i = 0; i < proyectosObtenidos.length; i++) {
           for (let j = 0; j < proyectosObtenidos[i].empladosAsignados.length; j++) {
               employees.push(proyectosObtenidos[i].empladosAsignados[j])
 
           }  
        }
        res.status(200).send({
            msg: 'Proyectos obtenidos correctamente',
            cont1: proyectosObtenidos,
            cont2: tasks,
            cont3: employees,
        })
    }
}

const obtenerProyectoPorId = async (req, res)=>{
    const { id } = req.params

    if(!id){
        res.status(400).send({
            msg: 'no se recibio un id valido'
        })
    }

    const proyectoEncontrado = await Proyecto.findById(id).populate([
        {
          path: 'empladosAsignados',
          match: { blnActivo: true },
        },
        {
            path: 'tareasAsginadas'
        }
      ]);
    
      if(!proyectoEncontrado){
          res.status(404).send({
              msg:'El proyecto no se encontro o no existe'
          })
      }else{
        const tasks = []
        const employees = []
        for (let i = 0; i < proyectoEncontrado.length; i++) {
           for (let j = 0; j < proyectoEncontrado[i].tareasAsginadas.length; j++) {
            tasks.push(proyectoEncontrado[i].tareasAsginadas[j]);
               
           }
        }

        for (let i = 0; i < proyectoEncontrado.length; i++) {
           for (let j = 0; j < proyectoEncontrado[i].empladosAsignados.length; j++) {
               employees.push(proyectoEncontrado[i].empladosAsignados[j])
 
           }  
        }
        res.status(200).send({
            msg: 'Proyectos obtenidos correctamente',
            cont1: proyectoEncontrado,
            cont2: tasks,
            cont3: employees,
        })
      }

}

const obtenerProyectosPorUsuario = async (req, res) =>{

    let idUsuario = req.params.idUsuario
    
    if(!idUsuario){
        res.status(404).send({
            msg: 'No se recibio un id valido'
        })
    }

    const existenciaEnProyecto = await Proyecto.find({empladosAsignados: idUsuario, completado: false})
    .populate('empladosAsignados')
    .populate('tareasAsginadas')

    if(existenciaEnProyecto.length == 0){
        res.status(404).send({
            msg: 'No esta en ningun proyecto'
        })
    }else{
        const tasks = []
        const employees = []
        for (let i = 0; i < existenciaEnProyecto.length; i++) {
           for (let j = 0; j < existenciaEnProyecto[i].tareasAsginadas.length; j++) {
            tasks.push(existenciaEnProyecto[i].tareasAsginadas[j]);
               
           }
        }

        for (let i = 0; i < existenciaEnProyecto.length; i++) {
           for (let j = 0; j < existenciaEnProyecto[i].empladosAsignados.length; j++) {
               employees.push(existenciaEnProyecto[i].empladosAsignados[j])
 
           }  
        }
       
        
        res.status(200).send({
            msg: 'Proyectos asignados',
            cont: existenciaEnProyecto,
            cont2: tasks,
            cont3: employees
        })

        
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

    console.log(id);
    const proyectoEditado = await Proyecto.findByIdAndUpdate(id,{completado: true},{new:true})
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
        logger.info(`Empleados obtenidos ${proyectoEliminado}`)
        res.status(200).send({
            msg: 'Exito al eliminar'
        })
    }
}

module.exports = {
    obtenerProyectos,
    obtenerProyectosPorUsuario,
    agregarProyectos,
    completarProyecto,
    editarProyecto,
    eliminarProyecto,
    agregarEmpleados,
    agregarTareas
    
}