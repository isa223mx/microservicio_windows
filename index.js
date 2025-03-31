const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const routers = require('./routes/index.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', routers);
moongose 
.connect('mongodb:///miBaseDeDatos')
.then(() => {
    console.log('Conectado a MongoDB');
})
.catch ((e) => console.log(e));

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});