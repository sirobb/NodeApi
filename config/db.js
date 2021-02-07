const mongoose = require('mongoose');
const { connect } = require('../app/routes/user');
//URL de conexion local 
const DB_URI = 'mongodb://localhost:27017/testDB';

module.exports= () => {

    const connect = () => {

        mongoose.connect(
            DB_URI,
            {
                keepAlive:true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err)=>{
                if (err) {
                    console.log('DB: ERROR CONEXION')
                }else{
                    console.log('Conexion correcta!!')
                }
            }
        );
    }
    connect();
}


