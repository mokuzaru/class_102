const express = require('express')
const rutas = express.Router();

rutas.get('/', (req,res) =>{
    res.send('Estan conociendo NOdejs');
});

rutas.post('/', (req,res) =>{
    console.log(req.body.name);
    res.send('recibido');
});

rutas.post('/nombre', (req,res) => {
    console.log(req.body.fullname);
    console.log(req.body.age);
    res.send('recibido x2');
})

module.exports = rutas;