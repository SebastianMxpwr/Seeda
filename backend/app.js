require('./config/config')
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const body_parser = require('body-parser');
const Empleado_routes = require('./routes/empleado')
const Tarea_routes = require('./routes/tarea')
const Proyecto_routes = require('./routes/proyecto')

const app = express();

const bodyParserJson = body_parser.json();
const bodyParserUrlEncode = body_parser.urlencoded({extended:true})

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParserUrlEncode)
app.use(bodyParserJson)

app.use('/api', Empleado_routes)
app.use('/api', Tarea_routes)
app.use('/api', Proyecto_routes)

mongoose.connect(process.env.URLBD,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
    if (err) throw err
    console.log(`Base de datos online en: ${process.env.URLBD}`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})

module.exports = app
