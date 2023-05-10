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
    let b = req.body.age;
    let a = 18;
    let c;
    if(b < a){
        c = "no ingreses a la web";
    }else{
        c = "bienvenido";
    }
    res.send(c);
})

module.exports = rutas;