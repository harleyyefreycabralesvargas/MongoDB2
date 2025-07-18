// Creación de la base de datos
use taller_indexacion;
// Creación e insercion de la colección de usuarios
db.usuarios.insertMany([
    { nombre: "Carlos", edad: 28, ciudad: "Bogotá", correo: "carlos@example.com", intereses: ["fútbol", "viajes"] },
    { nombre: "Ana", edad: 34, ciudad: "Medellín", correo: "ana@example.com", intereses: ["lectura", "teatro"] },
    { nombre: "Luis", edad: 22, ciudad: "Bogotá", correo: "luis@example.com", intereses: ["música", "videojuegos"] },
    { nombre: "María", edad: 40, ciudad: "Cali", correo: "maria@example.com", intereses: ["pintura", "fútbol"] },
    { nombre: "Julián", edad: 30, ciudad: "Bucaramanga", correo: "julian@example.com", intereses: ["cine", "música"] },
    { nombre: "Paula", edad: 25, ciudad: "Bogotá", correo: "paula@example.com", intereses: ["teatro", "viajes"] },
    { nombre: "Camilo", edad: 38, ciudad: "Medellín", correo: "camilo@example.com", intereses: ["fotografía", "lectura"] }
]);
// Taller
// ### Ejercicio 1

// Crea un índice sobre el campo `edad` y realiza una consulta de usuarios mayores de 30 años.
db.usuarios.createIndex({ edad: 1 });
db.usuarios.find({ edad: { $gt: 30 } });

// ### Ejercicio 2

// Crea un índice único sobre el campo `nombre`. Intenta insertar un duplicado y verifica el error.

db.usuarios.createIndex({ nombre: 1 }, { unique: true });
db.usuarios.insertOne( { nombre: "Carlos", edad: 22, ciudad: "Bogotá", correo: "luis@example.com", intereses: ["música", "videojuegos"] },)
// Esto generará un error porque el nombre "Carlos" ya existe en la colección.
// E11000 duplicate key error collection: taller_indexacion.usuarios index: nombre_1 dup key: { nombre: "Carlos" }


// ### Ejercicio 3

// Agrega un campo embebido llamado `perfil` con los subcampos `ocupacion` y `nivel_estudios`.
// Crea un índice sobre `perfil.ocupacion` y realiza una consulta.

db.usuarios.updateMany(
    {},
    { $set: { perfil: { ocupacion: "Estudiante", nivel_estudios: "Medio" } } }
);
db.usuarios.createIndex({ "perfil.ocupacion": 1 });
db.usuarios.find({ "perfil.ocupacion": "Estudiante" });


// ### Ejercicio 4

// Crea un índice multikey sobre un array llamado `habilidades` y realiza una consulta que lo use.

db.usuarios.updateMany(
    {},
    { $set: { habilidades: ["comunicación", "trabajo en equipo", "liderazgo"] } }
);
db.usuarios.createIndex({ habilidades: 1 });
db.usuarios.find({ habilidades: "comunicación" });

// ### Ejercicio 5

// Elimina el índice compuesto `{ ciudad: 1, edad: -1 }` y crea uno nuevo que sea `{ edad: 1, ciudad: 1 }`.
// Explica cuál sería más útil si la mayoría de consultas filtran primero por edad.

db.usuarios.dropIndex({ ciudad: 1, edad: -1 });
db.usuarios.createIndex({ edad: 1, ciudad: 1 });
// Es mas util el índice `{ edad: 1, ciudad: 1 }` si la mayoría de las consultas filtran primero por edad, 
// ya que permite una búsqueda más eficiente al ordenar los documentos por edad primero y de estos filtran por ciudad.
// Esto debido a que el index se ejecuta en el orden de los campos definidos,
