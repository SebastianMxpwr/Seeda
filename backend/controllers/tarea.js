const Tarea = require('../models/tarea')
const logger = require('../libs/logger')


const obtenerTodasTareas = async (req,res) => {

    try {
        const tareasObtenidas = await Tarea.find({ completado: false });
        if (tareasObtenidas.length === 0) {
            res.status(404).send({
                msg: "No hay tareas pendientes",
            });
        } else {
            res.status(200).send({
                msg: "Tareas obtenidas",
                cont: tareasObtenidas,
            });
        }
    } catch (error) {
        res.status(500).send({
            msg: "Ocurrio un error de sistema vueva a intentarlo",
        });
    }

}

const ObtenerTareaId = async (req, res) => {
  try {
    let {id} = req.params;
    if(!id){
        res.status(400).send({
            msg: 'No se recivio un id correcto'
        })
    }
    const tareaObtenida = await Tarea.findById(id);
    if (!tareaObtenida) {
      res.status(404).send({
        msg: "La tarea no se obtuvo o no existe",
      });
    } else {
      res.status(200).send({
        msg: "Obtenida con exito",
        cont: tareaObtenida,
      });
    }
  } catch (error) {
    res.status(500).send({
        msg: "Ocurrio un error de sistema vueva a intentarlo",
    });
  }
};

const tareasPorUsuario = async (req,res) => {

    try {
        let { id } = req.params
        const tareasObtenidas = await Tarea.find({ asignacion: id, completado:false })
        if (tareasObtenidas.length === 0) {
            res.status(404).send({
                msg: 'No hay tareas pendientes para este empleado'
            })
        } else {
            res.status(200).send({
                msg: 'Estas son las tareas',
                cont: tareasObtenidas
            })
        }
    } catch (error) {
        res.status(500).send({
            msg: "Ocurrio un error de sistema vueva a intentarlo"
        })
    }
}

const agregarTareas = async (req,res)=>{

    try {
        let body = req.body
    
        if(!body.asignacion){
            res.status(400).send({
                msg: 'No hay a quien ponerle esta tarea'
            })
        }
    
        const tareaAgregada = await Tarea.create(body)
        if(!tareaAgregada){
            res.status(500).send({
                msg: 'No se pudo agregar la terea intente de nuevo'
            })
        }else{
            res.status(200).send({
                msg: 'Tarea agregada',
                cont: tareaAgregada
            })
        }
        
    } catch (error) {
        res.status(500).send({
            msg: 'Ocurrio un error de nuestra parte, intente de nuevo'
        })
    }

}

const completarTarea = async (req,res)=>{

    try {
        let {id} = req.params
        if(!id){
            res.status(400).send({
                msg: 'No se recibio un id valido'
            })
        }
    
        const tareaEncontrada = await Tarea.findById(id)
        if(!tareaEncontrada){
            res.status(404).send({
                msg: 'No se encuentra la tarea o no existe'
            })
        }else{
    
            const tareaTerminada = await Tarea.findByIdAndUpdate(id,{completado:true},{new:true})
            if(!tareaTerminada){
                res.status(500).send({
                    msg: 'No se pudo completar la tarea intente de nuevo'
                })
            }else{
                res.status(200).send({
                    msg: 'Exito al completar',
                    cont: tareaTerminada
                })
            }
        }
        
    } catch (error) {
        res.status(500).send({
            msg: 'Ocurrio un error de nuestra parte, intente de nuevo'
        })
    }
}

const editarTarea = async (req,res)=>{

    try {
        let {id} = req.params
        let body = req.body
    
        if(!id){
            res.status(400).send({
                msg: 'No se recibio un id valido'
            })
        }
    
        const tareaEncontrada = await Tarea.findById(id,{completado: false})
        if(!tareaEncontrada){
            res.status(404).send({
                msg: 'No se encuentra la tarea, no existe o ya ha sido completada'
            })
        }else{
    
            const tareaEditada = await Tarea.findByIdAndUpdate(id,body,{new:true})
            if(!tareaEditada){
                res.status(500).send({
                    msg: 'No se pudo editar la tarea intente de nuevo'
                })
            }else{
                res.status(200).send({
                    msg: 'Exito al editar',
                    cont: tareaEditada
                })
            }
        }
        
    } catch (error) {
        res.status(500).send({
            msg: 'Ocurrio un error de nuestra parte, intente de nuevo'
        })
    }

}

const eliminarTarea = async (req,res)=>{

    try {
        let {id} = req.params
        if(!id){
            res.status(400).send({
                msg: 'No se recibio un id valido'
            })
        }
    
        const tareaEncontrada = await Tarea.findById(id)
        if(!tareaEncontrada){
            res.status(404).send({
                msg: 'No se encuentra la tarea o no existe'
            })
        }else{
    
            const tareaTerminada = await Tarea.findByIdAndUpdate(id,{completado:true},{new:true})
            if(!tareaTerminada){
                res.status(500).send({
                    msg: 'No se pudo eliminar la tarea intente de nuevo'
                })
            }else{
                logger.info(`Empleados obtenidos ${tareaTerminada}`)
                res.status(200).send({
                    msg: 'Exito al eliminar',
                    cont: tareaTerminada
                })
            }
        }
        
    } catch (error) {
        res.status(500).send({
            msg: 'Ocurrio un error de nuestra parte, intente de nuevo'
        })
        console.log(error);
    }
}


module.exports = {
    obtenerTodasTareas,
    tareasPorUsuario,
    ObtenerTareaId,
    agregarTareas,
    completarTarea,
    editarTarea,
    eliminarTarea
}