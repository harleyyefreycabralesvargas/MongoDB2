// Prueba para probar ejecucuion con NodeJS
console.log("Hola desde Node.js");
// Importacion de mongoose ya descargada con npm install mongoose
const mongoose = require('mongoose');
// Conexión local a la base de datos Dia7_mongodb2 
mongoose.connect('mongodb://localhost:27017/Dia7_mongodb2')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar:', err));
// Definición del esquema de los usuarios
const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, index: true },
    correo: { type: String, unique: true },
    edad: Number
});
// Secrea el modelo de usuario basado en el esquema anterior
const Usuario = mongoose.model('Usuario', usuarioSchema);
// Se crea un nuevo usuario con el modelo Usuario
Usuario.create({ nombre: "Ana", correo: "ana@example.com", edad: 25 })
    .then(() => console.log("Usuario creado"))
    .catch(err => console.error("Error:", err));