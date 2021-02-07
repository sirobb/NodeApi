const mongoose = require('mongoose');
const model = require('../models/user');

const opcionesPaginacion = {
    page: 1,
    limit: 3
}

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

//Obtener DATA de USUARIOS
exports.getData = (req,res) => {
    model.paginate({},opcionesPaginacion, (err,docs) => {
        res.send({
            items: docs
        })
    })
}
//Insertar DATA de USUARIOS
exports.insertData = (req,res)=>{
    const data = req.body
    model.create(data, (err, docs)=>{
        res.send({ data: docs})
    })
}

//Actualizar DATA de Usuarios
exports.updateSingle = (req, res) =>{
    const { id } = req.params;
    const body = req.body;
    model.updateOne(
        { id: parseId(req.params.id)},
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
    } 