#  🌿Tarea 6 Mongo DB 2 - Indexacion en NodeJS Dia 7


## :arrow_double_down:1. Instalación de Node.js y npm

### :cd: Instalar Node.js y npm con nvm

1.  Instalar `nvm` 
    
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2.  Cerrar y volver a abrir la terminal, luego cargar `nvm`:
    

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3.  Instalar la versión LTS de Node.js:
    

```
nvm install --lts
```

4.  Verificar instalación:
    

```
node -v
npm -v
```
## :card_index_dividers: 2. Creación de un Proyecto Node.js 

### Paso 1: Crear carpeta del proyecto
 
En mi caso Dia7

### Paso 2: Iniciar proyecto con npm

```
npm init -y
```

Esto crea el archivo `package.json`.

### Paso 3: Crear el archivo principal (por ejemplo, index.js)

Dentro de la carpeta creo un archivo llamado index.js

Ejemplo básico dentro de `index.js` escribimos:

```
console.log("Hola desde Node.js");
```

### Paso 4: Ejecutar el archivo

```
node index.js
```
y Nos responde Hola desde Node.js

----------

## :package: 3. Instalar Mongoose para trabajar con MongoDB

```
npm install mongoose
```

## :memo: 4. Crear Índices desde MongoShell

1.  Abrir MongoShell:
    

```
mongosh
```

2.  Comandos:
    

```
use Dia7_mongodb2
db.usuarios.insertMany([
  {
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@example.com",
    edad: 25
  },
  {
    nombre: "María",
    apellido: "Gómez",
    correo: "maria.gomez@example.com",
    edad: 30
  },
  {
    nombre: "Carlos",
    apellido: "Ramírez",
    correo: "carlos.ramirez@example.com",
    edad: 28
  },
  {
    nombre: "Luisa",
    apellido: "Fernández",
    correo: "luisa.fernandez@example.com",
    edad: 22
  },
  {
    nombre: "Andrés",
    apellido: "Martínez",
    correo: "andres.martinez@example.com",
    edad: 35
  },
  {
    nombre: "Paola",
    apellido: "Rojas",
    correo: "paola.rojas@example.com",
    edad: 29
  },
  {
    nombre: "Santiago",
    apellido: "Mejía",
    correo: "santiago.mejia@example.com",
    edad: 26
  },
  {
    nombre: "Camila",
    apellido: "Suárez",
    correo: "camila.suarez@example.com",
    edad: 23
  },
  {
    nombre: "David",
    apellido: "Torres",
    correo: "david.torres@example.com",
    edad: 31
  },
  {
    nombre: "Laura",
    apellido: "Vargas",
    correo: "laura.vargas@example.com",
    edad: 27
  }
])
db.usuarios.createIndex({ nombre: 1 });         // Índice ascendente
db.usuarios.createIndex({ edad: -1 });          // Índice descendente
db.usuarios.createIndex({ correo: 1 }, { unique: true }); // Índice único

db.usuarios.getIndexes(); // Ver los índices existentes
```

## 🍃 5. Conectarse a MongoDB y Crear Índices desde Node.js

### Ejemplo completo en `index.js`

```javascript
// Prueba para probar ejecucuion con NodeJS

console.log("Hola desde Node.js");

// Importacion de mongoose ya descargada con npm install mongoose

const  mongoose  =  require('mongoose');

// Conexión local a la base de datos Dia7_mongodb2

mongoose.connect('mongodb://localhost:27017/Dia7_mongodb2')

.then(()  => console.log('Conectado a MongoDB'))

.catch(err  => console.error('Error al conectar:', err));

// Definición del esquema de los usuarios

const  usuarioSchema  =  new mongoose.Schema({

nombre: { type: String, index: true },

correo: { type: String, unique: true },

edad: Number

});

// Secrea el modelo de usuario basado en el esquema anterior

const  Usuario  = mongoose.model('Usuario', usuarioSchema);

// Se crea un nuevo usuario con el modelo Usuario

Usuario.create({ nombre: "Ana", correo: "ana@example.com", edad: 25 })

.then(()  => console.log("Usuario creado"))

.catch(err  => console.error("Error:", err));
```

Ejecuta con en la terminal donde tenemos la carpeta con el archivo:

```
node index.js
```




