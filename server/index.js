const express = require('express');
const morgan = require ('morgan');
const app = express();

const { mongoose } = require('./database');

//config
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.json());



//iniciar el server
app.listen(app.get('port'), () =>{
    console.log('Serve ready on port ', app.get('port'));
});