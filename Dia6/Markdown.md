#  🌿Tarea 5 Mongo DB 2 - Transacciones Dia 6

## :twisted_rightwards_arrows:Que son las transacciones en Mongo DB
Las transacciones son sesiones de trabajo donde se realizan operaciones, modifican o cambian datos dentro de una base de datos en una copia o sesión donde los cambios realizados no se aplican a la base de datos principal si no se guardan en un espacio esperando a ser confirmadas en la base de datos, estas sesiones son atómicas osea que se ejecutan todos los cambios o no se realiza ninguno para mantener la consistencia de los datos.
## :dart: Para que se utilizan
Estas transacciones se utilizan para realizar operaciones que necesitan consistencia en los datos los cuales son críticos para mantener su integridad, como en operaciones bancarias las cuales involucran dinero o servicios donde se realizan operaciones que deben estar sincronizadas.
**Ejemplo**: Un pago en Nequi a un amigo, se crea una sesión en la base de datos donde están el dinero de los usuarios y donde se restan dinero de mi cuenta y se la suman a la cuenta de mi amigo hasta que confirme el pago, si algún dato mio no coincide no se realizaran las transacciones que si coinciden(Atómico).
## :wrench: Como se utilizan
Tenemos nuestra base de datos asi 
```javascript
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
```
Se deben seguir los siguientes pasos
```javascript
// Hacer una operacion de transaccion

// Crear una sesion y iniciarla

const  session  = db.getMongo().startSession();

// Obtener la coleccion "cuentas" de la base de datos

const  cuentas  = session.getDatabase("Dia6_mongodb2").cuentas;

//Ejemplo

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

```
