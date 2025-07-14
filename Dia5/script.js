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
  
  // Save the function to MongoDB
  db.system.js.save({
    _id: 'categorizar',
    value: categorizar
  });

//   ### ✅ Ejercicio 2

//   📌 Filtrar clientes cuya media de compras sea superior a $90.000:
  
//   ```js
  
//   ```
  
//   ---
  
//   ### ✅ Ejercicio 3
  
//   📌 Crear una función que determine si un cliente es joven (edad < 30) y lo imprima:
  
//   ```js
  
//   ```
  
//   ---
  
//   ## 6. 🛠 Taller Final
  
//   ### 🎯 Reto: Crear una función que clasifique clientes en rangos
  
//   - Joven Premium: edad < 30 y promedio >= 90.000
//   - Adulto Frecuente: edad >= 30 y promedio entre 70.000 y 90.000
//   - Otro: lo demás
  
//   ```js
  
//   ```
