const mongoose = require('mongoose');

const conexion = 'mongodb://localhost/mean-app';

//agregamos los parametros true + true para eliminar los errores deprecated
mongoose.connect(conexion, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('MongoDB Mean-app is conected'))
    .catch(err => console.error(err));

module.exports = mongoose;
