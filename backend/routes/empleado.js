const express = require('express');
const EmpleadoController = require('../controllers/empleado')
const api = express()

api.post('/registro_empleado', EmpleadoController.registroEmpleado)
api.post('/login_empleado', EmpleadoController.loginEmpleado)
api.put('/editar_empleado/:id', EmpleadoController.modificarEmpleado)
api.get('/empleados', EmpleadoController.obtenerTodosEmpleados)
api.get('/empleado/:id', EmpleadoController.obtenerEmpleado)
api.delete('/borrar_empleado/:id', EmpleadoController.eliminarEmpleado)

module.exports = api