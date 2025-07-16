// Creacion de la base de datos
use Dia6_mongodb2;
// Insercion de datos en la coleccion "cuentas"
db.cuentas.insertMany([
    { telefono: 3214145041, nombre: "Ana", edad: 25, ciudad: "Bogotá", dinero: 2600000 },
    { telefono: 3214145042, nombre: "Carlos", edad: 31, ciudad: "Medellín", dinero: 170000 },
    { telefono: 3214145043, nombre: "Laura", edad: 22, ciudad: "Cali", dinero: 50000 },
    { telefono: 3214145044, nombre: "Luis", edad: 45, ciudad: "Bogotá", dinero: 1000 },
    { telefono: 3214145045, nombre: "Sofía", edad: 35, ciudad: "Barranquilla", dinero: 45600000 },
    { telefono: 3214145046, nombre: "Pedro", edad: 29, ciudad: "Cali", dinero: 100000 },
    { telefono: 3214145047, nombre: "Marta", edad: 40, ciudad: "Medellín", dinero: 60000 }
]);

// Hacer una operacion de transaccion
// Crear una sesion y iniciarla
const session = db.getMongo().startSession();
// Obtener la coleccion "cuentas" de la base de datos
const cuentas = session.getDatabase("Dia6_mongodb2").cuentas;
// Ana paga a Marta 100000
// Iniciar la transaccion
session.startTransaction();
// Actualizar el dinero de Ana y Marta
cuentas.updateOne(
    { telefono: 3214145041 }, // Ana
    { $inc: { dinero: -100000 } } // Reduce su dinero
);
cuentas.updateOne(
    { telefono: 3214145047 }, // Marta
    { $inc: { dinero: 100000 } } // Aumenta su dinero
);
// Confirmar la transaccion
session.commitTransaction();
// Cerrar la sesion
session.endSession();


