// URI: mongodb+srv://harley:campus2023@cluster0.i5qimbc.mongodb.net/

use Dia5_mongodb2;

db.clientes.insertMany([
  { nombre: "Ana", edad: 25, ciudad: "Bogotá", compras: [120000, 80000, 90000] },
  { nombre: "Carlos", edad: 31, ciudad: "Medellín", compras: [50000, 60000] },
  { nombre: "Laura", edad: 22, ciudad: "Cali", compras: [45000, 30000, 75000] },
  { nombre: "Luis", edad: 45, ciudad: "Bogotá", compras: [200000, 150000] },
  { nombre: "Sofía", edad: 35, ciudad: "Barranquilla", compras: [90000, 70000, 85000] },
  { nombre: "Pedro", edad: 29, ciudad: "Cali", compras: [30000, 40000] },
  { nombre: "Marta", edad: 40, ciudad: "Medellín", compras: [110000, 105000, 99000] }
]);

// ### ✅ Ejercicio 1

// 📌 Mostrar nombre y categoría de cada cliente:
function categorizar(clientes) {
    var nombre = clientes.nombre;
    var categoria=clientes.categoria
    print("Cliente:", nombre);
    print("Categoria:", categoria);;
    print("-----------------------------");
  };
  
// Guadar funcion
db.system.js.insertOne({
  _id: 'categorizar',
  value: categorizar
});

// Probar
db.clientes.find().forEach(function(doc) {
    categorizar(doc);
  });
//   ### ✅ Ejercicio 2

//   📌 Filtrar clientes cuya media de compras sea superior a $90.000:

function calcularPromedio(compras) {
    if (!compras.length) return 0;
    var total = compras.reduce((a, b) => a + b, 0);
    return total / compras.length;
  }

function comprasMayor90000(clientes) {
    var nombre = clientes.nombre;
    var promedio=calcularPromedio(clientes.compras);
    if (promedio > 90000) {
        print("Cliente:", nombre);
        print("Promedio:", promedio);
  }
};
// Guadar funcion
db.system.js.insertOne({
    _id: 'comprasMayor90000',
    value: comprasMayor90000
  });
// probar 
db.clientes.find().forEach(function(doc) {
    comprasMayor90000(doc);
  });

//   ---
  
//   ### ✅ Ejercicio 3
  
//   📌 Crear una función que determine si un cliente es joven (edad < 30) y lo imprima:
  
function determinarJovenes(clientes) {
    var nombre = clientes.nombre;
    var edad=(clientes.edad);
    if (edad <30) {
        print("Cliente:", nombre);
        print("Edad:", edad);
  }
};
// guardar
db.system.js.insertOne({
    _id: 'determinarJovenes',
    value: determinarJovenes
  });

// probar
db.clientes.find().forEach(function(doc) {
    determinarJovenes(doc);
  });
//   ---
  
//   ## 6. 🛠 Taller Final
  
//   ### 🎯 Reto: Crear una función que clasifique clientes en rangos
  
//   - Joven Premium: edad < 30 y promedio >= 90.000
//   - Adulto Frecuente: edad >= 30 y promedio entre 70.000 y 90.000
//   - Otro: lo demás
  
function rangos(clientes) {
    var nombre = clientes.nombre;
    var promedio=calcularPromedio(clientes.compras);
    var edad=(clientes.edad);
    if (edad <30 && promedio>=90000) {
        print("Cliente:", nombre);
        print("Edad:", edad);
        print("Promedio:", promedio);
        print("Clacificacion: Joven premium")
  }else if (edad >=30 && promedio<90000 && promedio>70000 ) {
    print("Cliente:", nombre);
    print("Edad:", edad);
    print("Promedio:", promedio);
    print("Clacificacion: Adulto frecuente")
}else{   print("Cliente:", nombre);
print("Edad:", edad);
print("Promedio:", promedio);
print("Clacificacion: Otro")}
};
// guardar
db.system.js.insertOne({
    _id: 'rangos',
    value: rangos
  });

// probar
db.clientes.find().forEach(function(doc) {
    rangos(doc);
  });