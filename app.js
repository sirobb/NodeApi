const express = require('express');
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express();

const port = 3002

const userRouters = require('./app/routes/user')


//para parsear a json
app.use(
    bodyParser.json({
        limit: '20mb'
    })
)
//para parsear la aplicacion al formato/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)


app.use(userRouters)


app.listen(port, ()=>{
    console.log('La aplicacion esta en linea');
})

initDB()