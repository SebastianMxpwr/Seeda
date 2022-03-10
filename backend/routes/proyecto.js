const express = require('express');
const ProyectoController = require('../controllers/proyecto')
const api = express()

api.get('/obtener_proyectos', ProyectoController.obtenerProyectos)
api.get('/obtener_proyectos_usuario/:idUsuario', ProyectoController.obtenerProyectosPorUsuario)
api.post('/agregar_empleados/:idProyecto', ProyectoController.agregarEmpleados)
api.post('/agregar_tareas/:idProyecto', ProyectoController.agregarTareas)
api.post('/agregar_proyectos', ProyectoController.agregarProyectos)
api.put('/completar_proyecto/:id', ProyectoController.completarProyecto)
api.put('/editar_proyecto/:id', ProyectoController.editarProyecto)
api.delete('/eliminar_proyecto/:id', ProyectoController.eliminarProyecto)

module.exports = api