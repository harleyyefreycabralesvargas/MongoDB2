console.log("Hola desde Node.js");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Dia7_Dia7_mongodb2')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar:', err));

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, index: true },
    correo: { type: String, unique: true },
    edad: Number
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

Usuario.create({ nombre: "Ana", correo: "ana@example.com", edad: 25 })
    .then(() => console.log("Usuario creado"))
    .catch(err => console.error("Error:", err));