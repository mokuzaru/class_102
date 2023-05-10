const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use(require('./rutas/'));

app.listen(3000, ()=>{
    console.log("SErver en puerto 3000");
});