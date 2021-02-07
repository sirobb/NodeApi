const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const anuncioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        venta: {
            type: Boolean
        },
        precio: {
            type: Number
        },
        foto: {
            type: String
        },
        tags:[String]
   });
   
   anuncioSchema.plugin(mongoosePaginate)

   module.exports = mongoose.model('user',anuncioSchema)