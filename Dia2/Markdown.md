# :herb:Tarea 1 Mongo DB 2- Dataset
## :electric_plug:Creación de la base de datos
Creamos la base de datos en la cual vamos a trabajar llamada "Dataset".

Código:
```
use Dataset;
```
  ## :inbox_tray:Creación de colección e inserción


Creamos una colección llamada "Dataset" e insertamos nuestra data de registros con un insertMany.


Código:


```
db.Dataset.insertMany([ {

"nombre": "Sofía",

"apellido": "Pérez",

"correo": "sofía.pérez@gmail.com",

"ciudad": "Brendaberg",

"telefono": "(862)358-8662",

"profesion": "Commercial horticulturist"

},

{

"nombre": "Luis",

"apellido": "Sánchez",

"correo": "luis.sánchez@gmail.com",

"ciudad": "Becktown",

"telefono": "877-199-7563",

"profesion": "Sport and exercise psychologist"

},

{

"nombre": "Sofía",

"apellido": "González",

"correo": "sofía.gonzález@gmail.com",

"ciudad": "West Jared",

"telefono": "603-635-3036x328",

"profesion": "Science writer"

},

{

"nombre": "Luis",

"apellido": "López",

"correo": "luis.lópez@empresa.com",

"ciudad": "Kirbyfort",

"telefono": "1894571818",

"profesion": "Patent attorney"

},

{

"nombre": "Andrés",

"apellido": "Rodríguez",

"correo": "andrés.rodríguez@empresa.com",

"ciudad": "North Corey",

"telefono": "(273)253-7717x16283",

"profesion": "Broadcast engineer"

},

{

"nombre": "Ana",

"apellido": "Rodríguez",

"correo": "ana.rodríguez@outlook.com",

"ciudad": "Julieside",

"telefono": "+1-860-511-0822x043",

"profesion": "Sports development officer"

},

{

"nombre": "Laura",

"apellido": "Pérez",

"correo": "laura.pérez@hotmail.com",

"ciudad": "Beanport",

"telefono": "(797)726-5709",

"profesion": "Publishing rights manager"

},

{

"nombre": "Pedro",

"apellido": "González",

"correo": "pedro.gonzález@empresa.com",

"ciudad": "New Kathystad",

"telefono": "+1-283-523-2245x89429",

"profesion": "Surveyor, mining"

},

{

"nombre": "Sofía",

"apellido": "Ramírez",

"correo": "sofía.ramírez@hotmail.com",

"ciudad": "Port Annaville",

"telefono": "5667164165",

"profesion": "Air cabin crew"

},

{

"nombre": "Andrés",

"apellido": "Ramírez",

"correo": "andrés.ramírez@gmail.com",

"ciudad": "Port Joshua",

"telefono": "5068603071",

"profesion": "Designer, blown glass/stained glass"

},

{

"nombre": "Luisa",

"apellido": "Martínez",

"correo": "luisa.martínez@outlook.com",

"ciudad": "Tanyaland",

"telefono": "001-465-222-8733",

"profesion": "Landscape architect"

},

{

"nombre": "Andrés",

"apellido": "Martínez",

"correo": "andrés.martínez@hotmail.com",

"ciudad": "Lake Joshua",

"telefono": "(094)143-4644x3303",

"profesion": "Lecturer, further education"

},

{

"nombre": "Pedro",

"apellido": "Torres",

"correo": "pedro.torres@yahoo.com",

"ciudad": "West Feliciafurt",

"telefono": "001-976-633-4455",

"profesion": "Research scientist (physical sciences)"

},

{

"nombre": "Pedro",

"apellido": "García",

"correo": "pedro.garcía@yahoo.com",

"ciudad": "Cynthiaville",

"telefono": "+1-586-745-6626x673",

"profesion": "Media buyer"

},

{

"nombre": "Sofía",

"apellido": "Sánchez",

"correo": "sofía.sánchez@hotmail.com",

"ciudad": "Phammouth",

"telefono": "921.475.4249x187",

"profesion": "Paediatric nurse"

},

{

"nombre": "Luis",

"apellido": "Pérez",

"correo": "luis.pérez@outlook.com",

"ciudad": "Jeffside",

"telefono": "(872)141-0578",

"profesion": "Surveyor, building"

},

{

"nombre": "Laura",

"apellido": "Martínez",

"correo": "laura.martínez@empresa.com",

"ciudad": "North Hannahchester",

"telefono": "882-308-0600",

"profesion": "Engineer, automotive"

},

{

"nombre": "Laura",

"apellido": "García",

"correo": "laura.garcía@outlook.com",

"ciudad": "Josefurt",

"telefono": "066.318.5989x353",

"profesion": "Scientist, forensic"

},

{

"nombre": "Laura",

"apellido": "López",

"correo": "laura.lópez@outlook.com",

"ciudad": "Greenfurt",

"telefono": "001-053-849-5881x887",

"profesion": "Neurosurgeon"

},

{

"nombre": "María",

"apellido": "Martínez",

"correo": "maría.martínez@empresa.com",

"ciudad": "Joymouth",

"telefono": "(194)209-3855",

"profesion": "Technical brewer"

},

{

"nombre": "Andrés",

"apellido": "Ramírez",

"correo": "andrés.ramírez@yahoo.com",

"ciudad": "Lake Bonniefort",

"telefono": "9751988582",

"profesion": "Public affairs consultant"

},

{

"nombre": "María",

"apellido": "Torres",

"correo": "maría.torres@yahoo.com",

"ciudad": "North Beverly",

"telefono": "001-177-302-7586x563",

"profesion": "Adult guidance worker"

},

{

"nombre": "María",

"apellido": "Torres",

"correo": "maría.torres@empresa.com",

"ciudad": "Port Patrickhaven",

"telefono": "001-207-943-6332x649",

"profesion": "Forensic scientist"

},

{

"nombre": "Juan",

"apellido": "López",

"correo": "juan.lópez@gmail.com",

"ciudad": "New Jeremy",

"telefono": "+1-065-665-9190x911",

"profesion": "Scientist, research (physical sciences)"

},

{

"nombre": "Sofía",

"apellido": "García",

"correo": "sofía.garcía@gmail.com",

"ciudad": "Brendafurt",

"telefono": "861.572.9877x52971",

"profesion": "Clinical psychologist"

},

{

"nombre": "Ana",

"apellido": "López",

"correo": "ana.lópez@outlook.com",

"ciudad": "New Stephanieview",

"telefono": "(800)727-8642x59326",

"profesion": "Designer, multimedia"

},

{

"nombre": "Sofía",

"apellido": "Ramírez",

"correo": "sofía.ramírez@hotmail.com",

"ciudad": "West Joshuaview",

"telefono": "334.345.3722x862",

"profesion": "Financial trader"

},

{

"nombre": "Luisa",

"apellido": "López",

"correo": "luisa.lópez@gmail.com",

"ciudad": "Barnesberg",

"telefono": "997-995-8271x3373",

"profesion": "Archaeologist"

},

{

"nombre": "Pedro",

"apellido": "Martínez",

"correo": "pedro.martínez@gmail.com",

"ciudad": "Gillespiestad",

"telefono": "208.252.0059x339",

"profesion": "Therapist, drama"

},

{

"nombre": "María",

"apellido": "Flores",

"correo": "maría.flores@hotmail.com",

"ciudad": "North Sergioport",

"telefono": "2526165108",

"profesion": "Systems developer"

},

{

"nombre": "Laura",

"apellido": "López",

"correo": "laura.lópez@yahoo.com",

"ciudad": "Scottchester",

"telefono": "(778)692-6297x42700",

"profesion": "Operations geologist"

},

{

"nombre": "Luisa",

"apellido": "González",

"correo": "luisa.gonzález@empresa.com",

"ciudad": "Port Tamara",

"telefono": "839-229-5893",

"profesion": "Sport and exercise psychologist"

},

{

"nombre": "Pedro",

"apellido": "Flores",

"correo": "pedro.flores@yahoo.com",

"ciudad": "Hardinfurt",

"telefono": "+1-736-158-6155",

"profesion": "Sports administrator"

},

{

"nombre": "Andrés",

"apellido": "Martínez",

"correo": "andrés.martínez@yahoo.com",

"ciudad": "Port Michael",

"telefono": "534-628-9042",

"profesion": "Broadcast engineer"

},

{

"nombre": "Juan",

"apellido": "Rodríguez",

"correo": "juan.rodríguez@empresa.com",

"ciudad": "Hamiltontown",

"telefono": "001-450-781-4347x1044",

"profesion": "Oceanographer"

},

{

"nombre": "Laura",

"apellido": "López",

"correo": "laura.lópez@yahoo.com",

"ciudad": "West Samuel",

"telefono": "(873)241-4011x0641",

"profesion": "Clinical psychologist"

},

{

"nombre": "Pedro",

"apellido": "González",

"correo": "pedro.gonzález@hotmail.com",

"ciudad": "Bellland",

"telefono": "001-976-485-5660x1406",

"profesion": "Fine artist"

},

{

"nombre": "Pedro",

"apellido": "García",

"correo": "pedro.garcía@hotmail.com",

"ciudad": "Mcclainton",

"telefono": "+1-298-166-0333x1407",

"profesion": "Dealer"

},

{

"nombre": "Luis",

"apellido": "Ramírez",

"correo": "luis.ramírez@empresa.com",

"ciudad": "Michaelview",

"telefono": "461.156.9512x5252",

"profesion": "Fashion designer"

},

{

"nombre": "Laura",

"apellido": "Flores",

"correo": "laura.flores@empresa.com",

"ciudad": "Williamville",

"telefono": "+1-298-640-7281x1214",

"profesion": "Charity fundraiser"

},

{

"nombre": "Carlos",

"apellido": "Flores",

"correo": "carlos.flores@outlook.com",

"ciudad": "Jacobton",

"telefono": "(236)967-0659",

"profesion": "Recruitment consultant"

},

{

"nombre": "Pedro",

"apellido": "Ramírez",

"correo": "pedro.ramírez@hotmail.com",

"ciudad": "Alanmouth",

"telefono": "1089530991",

"profesion": "Public house manager"

},

{

"nombre": "Luis",

"apellido": "Sánchez",

"correo": "luis.sánchez@empresa.com",

"ciudad": "Henryport",

"telefono": "+1-736-317-0203x82641",

"profesion": "Ambulance person"

},

{

"nombre": "Luis",

"apellido": "Ramírez",

"correo": "luis.ramírez@yahoo.com",

"ciudad": "Michaelville",

"telefono": "200.204.2188",

"profesion": "Art therapist"

},

{

"nombre": "Luisa",

"apellido": "Rodríguez",

"correo": "luisa.rodríguez@yahoo.com",

"ciudad": "North Duanechester",

"telefono": "(225)855-3251",

"profesion": "Solicitor"

},

{

"nombre": "Sofía",

"apellido": "García",

"correo": "sofía.garcía@outlook.com",

"ciudad": "New Aaron",

"telefono": "724-495-2040x4926",

"profesion": "Volunteer coordinator"

},

{

"nombre": "Luis",

"apellido": "Torres",

"correo": "luis.torres@outlook.com",

"ciudad": "Cooleymouth",

"telefono": "+1-277-880-0910x985",

"profesion": "Product manager"

},

{

"nombre": "Andrés",

"apellido": "Rodríguez",

"correo": "andrés.rodríguez@outlook.com",

"ciudad": "East Leahborough",

"telefono": "243-541-0820x835",

"profesion": "Community education officer"

},

{

"nombre": "Laura",

"apellido": "García",

"correo": "laura.garcía@empresa.com",

"ciudad": "North Timothyside",

"telefono": "+1-022-041-4176",

"profesion": "Regulatory affairs officer"

},

{

"nombre": "Carlos",

"apellido": "Torres",

"correo": "carlos.torres@gmail.com",

"ciudad": "Port Brett",

"telefono": "661-253-2596x34810",

"profesion": "Civil Service administrator"

},

{

"nombre": "María",

"apellido": "Ramírez",

"correo": "maría.ramírez@yahoo.com",

"ciudad": "Lucasborough",

"telefono": "(899)429-6486",

"profesion": "Musician"

},

{

"nombre": "Laura",

"apellido": "Rodríguez",

"correo": "laura.rodríguez@empresa.com",

"ciudad": "West Nancy",

"telefono": "195.774.3803x42499",

"profesion": "Chartered public finance accountant"

},

{

"nombre": "Andrés",

"apellido": "Ramírez",

"correo": "andrés.ramírez@yahoo.com",

"ciudad": "Lake Vickitown",

"telefono": "(867)341-4704x228",

"profesion": "Lawyer"

},

{

"nombre": "Pedro",

"apellido": "García",

"correo": "pedro.garcía@hotmail.com",

"ciudad": "North Tiffany",

"telefono": "001-657-936-8562x36625",

"profesion": "Pilot, airline"

},

{

"nombre": "Andrés",

"apellido": "García",

"correo": "andrés.garcía@gmail.com",

"ciudad": "East Jamesstad",

"telefono": "153.007.3035x90322",

"profesion": "Research officer, political party"

},

{

"nombre": "Ana",

"apellido": "Sánchez",

"correo": "ana.sánchez@gmail.com",

"ciudad": "Thomasfurt",

"telefono": "(806)955-1247x74637",

"profesion": "Runner, broadcasting/film/video"

},

{

"nombre": "Sofía",

"apellido": "López",

"correo": "sofía.lópez@hotmail.com",

"ciudad": "Barryton",

"telefono": "+1-801-116-6152x519",

"profesion": "Air traffic controller"

},

{

"nombre": "Laura",

"apellido": "Martínez",

"correo": "laura.martínez@empresa.com",

"ciudad": "New Nicholeland",

"telefono": "959.918.5052x38512",

"profesion": "Horticulturist, amenity"

},

{

"nombre": "María",

"apellido": "Sánchez",

"correo": "maría.sánchez@outlook.com",

"ciudad": "Lake Michellehaven",

"telefono": "+1-057-749-1279x5293",

"profesion": "Estate agent"

},

{

"nombre": "Andrés",

"apellido": "Torres",

"correo": "andrés.torres@gmail.com",

"ciudad": "West Zacharybury",

"telefono": "545-628-3592x717",

"profesion": "Scientist, research (medical)"

},

{

"nombre": "Laura",

"apellido": "Ramírez",

"correo": "laura.ramírez@gmail.com",

"ciudad": "Wintersbury",

"telefono": "(654)735-4116x84558",

"profesion": "Dietitian"

},

{

"nombre": "Sofía",

"apellido": "López",

"correo": "sofía.lópez@gmail.com",

"ciudad": "Russellborough",

"telefono": "001-891-397-6326",

"profesion": "Designer, interior/spatial"

},

{

"nombre": "Luisa",

"apellido": "Flores",

"correo": "luisa.flores@outlook.com",

"ciudad": "South Kevin",

"telefono": "858-539-4581",

"profesion": "Learning mentor"

},

{

"nombre": "Laura",

"apellido": "Torres",

"correo": "laura.torres@hotmail.com",

"ciudad": "New Kristen",

"telefono": "147.533.8444x7779",

"profesion": "Health and safety inspector"

},

{

"nombre": "María",

"apellido": "Ramírez",

"correo": "maría.ramírez@gmail.com",

"ciudad": "New Davidfort",

"telefono": "171-422-1378x881",

"profesion": "Printmaker"

},

{

"nombre": "Juan",

"apellido": "Sánchez",

"correo": "juan.sánchez@hotmail.com",

"ciudad": "Williamsmouth",

"telefono": "027-643-1098x7561",

"profesion": "Mental health nurse"

},

{

"nombre": "Laura",

"apellido": "González",

"correo": "laura.gonzález@hotmail.com",

"ciudad": "North Davidfort",

"telefono": "6333978311",

"profesion": "Hydrologist"

},

{

"nombre": "Luisa",

"apellido": "López",

"correo": "luisa.lópez@yahoo.com",

"ciudad": "North Justin",

"telefono": "001-280-898-0318x0598",

"profesion": "Financial trader"

},

{

"nombre": "Carlos",

"apellido": "Rodríguez",

"correo": "carlos.rodríguez@empresa.com",

"ciudad": "North Kathleenton",

"telefono": "001-437-172-0435x41899",

"profesion": "Museum/gallery conservator"

},

{

"nombre": "Laura",

"apellido": "Ramírez",

"correo": "laura.ramírez@gmail.com",

"ciudad": "Phillipsberg",

"telefono": "(570)125-5462x83204",

"profesion": "Amenity horticulturist"

},

{

"nombre": "Pedro",

"apellido": "Ramírez",

"correo": "pedro.ramírez@empresa.com",

"ciudad": "New Adrianhaven",

"telefono": "+1-792-833-4290x8236",

"profesion": "Teacher, secondary school"

},

{

"nombre": "María",

"apellido": "López",

"correo": "maría.lópez@yahoo.com",

"ciudad": "Port Hannah",

"telefono": "+1-380-664-0806x726",

"profesion": "Pathologist"

},

{

"nombre": "Pedro",

"apellido": "González",

"correo": "pedro.gonzález@gmail.com",

"ciudad": "Rodriguezport",

"telefono": "102.555.9725x5397",

"profesion": "Teacher, adult education"

},

{

"nombre": "Andrés",

"apellido": "López",

"correo": "andrés.lópez@outlook.com",

"ciudad": "Melaniemouth",

"telefono": "380-244-2587x6545",

"profesion": "Travel agency manager"

},

{

"nombre": "Sofía",

"apellido": "Rodríguez",

"correo": "sofía.rodríguez@yahoo.com",

"ciudad": "Williamsview",

"telefono": "+1-372-226-3696x75131",

"profesion": "Higher education lecturer"

},

{

"nombre": "Ana",

"apellido": "López",

"correo": "ana.lópez@empresa.com",

"ciudad": "Port Cheryl",

"telefono": "(793)914-2710x22368",

"profesion": "International aid/development worker"

},

{

"nombre": "Luis",

"apellido": "Pérez",

"correo": "luis.pérez@outlook.com",

"ciudad": "Lake Christian",

"telefono": "+1-253-578-4109x746",

"profesion": "Office manager"

},

{

"nombre": "Juan",

"apellido": "Flores",

"correo": "juan.flores@hotmail.com",

"ciudad": "Lake Nicoleville",

"telefono": "387.609.0210x740",

"profesion": "Secretary/administrator"

},

{

"nombre": "Pedro",

"apellido": "García",

"correo": "pedro.garcía@outlook.com",

"ciudad": "New Steven",

"telefono": "(715)319-7599x465",

"profesion": "Academic librarian"

},

{

"nombre": "Andrés",

"apellido": "González",

"correo": "andrés.gonzález@gmail.com",

"ciudad": "Bradleyville",

"telefono": "231.395.9732x338",

"profesion": "Information systems manager"

},

{

"nombre": "Andrés",

"apellido": "Martínez",

"correo": "andrés.martínez@empresa.com",

"ciudad": "East Stephanie",

"telefono": "(657)411-6448x447",

"profesion": "Horticultural therapist"

},

{

"nombre": "Pedro",

"apellido": "García",

"correo": "pedro.garcía@yahoo.com",

"ciudad": "Wardside",

"telefono": "006.142.6958x037",

"profesion": "Physicist, medical"

},

{

"nombre": "María",

"apellido": "González",

"correo": "maría.gonzález@outlook.com",

"ciudad": "Terriland",

"telefono": "+1-072-900-2670x183",

"profesion": "Ambulance person"

},

{

"nombre": "Juan",

"apellido": "Ramírez",

"correo": "juan.ramírez@empresa.com",

"ciudad": "Ortizberg",

"telefono": "+1-962-911-5633x55600",

"profesion": "Pharmacist, hospital"

},

{

"nombre": "Laura",

"apellido": "Martínez",

"correo": "laura.martínez@hotmail.com",

"ciudad": "East Dakotaton",

"telefono": "493-095-6244x01890",

"profesion": "Biomedical scientist"

},

{

"nombre": "Carlos",

"apellido": "Pérez",

"correo": "carlos.pérez@empresa.com",

"ciudad": "Nathanshire",

"telefono": "4730338108",

"profesion": "Psychiatric nurse"

},

{

"nombre": "Ana",

"apellido": "López",

"correo": "ana.lópez@yahoo.com",

"ciudad": "Wheelerview",

"telefono": "001-423-803-8391x53617",

"profesion": "Sales professional, IT"

},

{

"nombre": "Juan",

"apellido": "García",

"correo": "juan.garcía@empresa.com",

"ciudad": "Hernandezbury",

"telefono": "648-221-3218x050",

"profesion": "Journalist, magazine"

},

{

"nombre": "Ana",

"apellido": "González",

"correo": "ana.gonzález@gmail.com",

"ciudad": "West Josephville",

"telefono": "473-939-9052",

"profesion": "Engineer, civil (consulting)"

},

{

"nombre": "Ana",

"apellido": "Rodríguez",

"correo": "ana.rodríguez@gmail.com",

"ciudad": "West Melissa",

"telefono": "070.106.4952x04466",

"profesion": "Town planner"

},

{

"nombre": "Pedro",

"apellido": "Ramírez",

"correo": "pedro.ramírez@gmail.com",

"ciudad": "New Catherine",

"telefono": "751.450.2084",

"profesion": "Chief Technology Officer"

},

{

"nombre": "Ana",

"apellido": "Rodríguez",

"correo": "ana.rodríguez@empresa.com",

"ciudad": "North Thomas",

"telefono": "001-458-359-2863x5948",

"profesion": "International aid/development worker"

},

{

"nombre": "Andrés",

"apellido": "Flores",

"correo": "andrés.flores@empresa.com",

"ciudad": "Michellestad",

"telefono": "+1-439-447-7927x4897",

"profesion": "Microbiologist"

},

{

"nombre": "Luis",

"apellido": "López",

"correo": "luis.lópez@hotmail.com",

"ciudad": "Salazarshire",

"telefono": "548.560.6502x376",

"profesion": "Programmer, multimedia"

},

{

"nombre": "Luisa",

"apellido": "Flores",

"correo": "luisa.flores@yahoo.com",

"ciudad": "East Daniel",

"telefono": "+1-370-106-0028",

"profesion": "Industrial/product designer"

},

{

"nombre": "Laura",

"apellido": "Torres",

"correo": "laura.torres@yahoo.com",

"ciudad": "South Feliciaton",

"telefono": "044-265-6604x5684",

"profesion": "Conservator, furniture"

},

{

"nombre": "Sofía",

"apellido": "López",

"correo": "sofía.lópez@empresa.com",

"ciudad": "Rodriguezshire",

"telefono": "(037)411-9409x60088",

"profesion": "General practice doctor"

},

{

"nombre": "Carlos",

"apellido": "Torres",

"correo": "carlos.torres@gmail.com",

"ciudad": "North Suzanne",

"telefono": "(853)495-8515",

"profesion": "Probation officer"

},

{

"nombre": "Ana",

"apellido": "Torres",

"correo": "ana.torres@gmail.com",

"ciudad": "Lake Ashley",

"telefono": "914.096.3904",

"profesion": "Nature conservation officer"

},

{

"nombre": "Laura",

"apellido": "García",

"correo": "laura.garcía@empresa.com",

"ciudad": "Kellyborough",

"telefono": "001-225-188-3873x18798",

"profesion": "Sales promotion account executive"
}

]

);
```

  

 ## :rocket:  Consultas con Expresiones Regulares (Regex)

 Se deberán realizar la siguientes consultas con Regex
  

### Consulta 1: Buscar nombres que comienzan con 'A'
```
db.Dataset.find({"nombre":{$regex:"^A"}});
```
### Consulta 2: Buscar apellidos que terminan con 'ez'
```
db.Dataset.find({"apellido":{$regex:"ez$"}});
```
### Consulta 3: Buscar correos que contienen 'gmail'
```
db.Dataset.find({"correo":{$regex:"gmail"}});
```
### Consulta 4: Buscar correos que terminan en '.com'
```
db.Dataset.find({"correo":{$regex:".com$"}});
```
 ### Consulta 5: Buscar ciudades que contienen una 'o'
```
db.Dataset.find({"ciudad":{$regex:"o"}});
```
 ### Consulta 6: Buscar profesiones que comienzan con 'E'
```
db.Dataset.find({"profesion":{$regex:"^E"}});
```
 ### Consulta 7: Buscar nombres que contienen una vocal
```
db.Dataset.find({"nombre":{$regex:"[a-u]"}});
```
 ### Consulta 8: Buscar apellidos con doble letra 'r'
```
db.Dataset.find({"apellido":{$regex:"rr"}});
```
 ### Consulta 9: Buscar correos con números
```
db.Dataset.find({"correo":{$regex:"[0-9]"}});
```
### Consulta 10: Buscar profesiones que contienen 'Manager'
```
db.Dataset.find({"profesion":{$regex:"Manager"}});
```
 ### Consulta 11: Buscar nombres que tienen exactamente 4 letras
```
db.Dataset.find({"nombre":{$regex:"^[a-z]{4}$", $options: 'i'}});
```
 ### Consulta 12: Buscar apellidos con más de 6 letras
```
db.Dataset.find({"apellido":{$regex:"^[a-zA-Z]{7,}"}});
```
 ### Consulta 13: Buscar correos que comienzan con 'l'
```
db.Dataset.find({"correo":{$regex:"^l"}});
```
### Consulta 14: Buscar ciudades que terminan con vocal
```
db.Dataset.find({"ciudad":{$regex:"[aeiou]$"}});
```
 ### Consulta 15: Buscar teléfonos con guiones
```
db.Dataset.find({"telefono":{$regex:"-"}});
```
 ### Consulta 16: Buscar profesiones que contengan 'Engineer'
```
db.Dataset.find({"profesion":{$regex:"Engineer"}});
```
 ### Consulta 17: Buscar nombres con letras mayúsculas
```
db.Dataset.find({"nombre":{$regex:"[A-Z]"}});
```
### Consulta 18: Buscar apellidos que contienen 'z'
```
db.Dataset.find({"apellido":{$regex:"z"}});
```
### Consulta 19: Buscar correos con subdominio (ej. usuario@empresa.com)
```
db.Dataset.find({"correo":{$regex:"@empresa.com$"}});
```
### Consulta 20: Buscar ciudades que comienzan con consonante
```
db.Dataset.find({"ciudad":{$regex:"^[^aeiouAEIOU]"}});
```
 ### Consulta 21: Buscar nombres que terminan con 'n'
```
db.Dataset.find({"nombre":{$regex:"n$"}});
```
### Consulta 22: Buscar profesiones que terminan en 'ist'
```
db.Dataset.find({"profesion":{$regex:"ist$"}});
```
 ### Consulta 23: Buscar apellidos que contienen una 'a' seguida de una consonante
```
db.Dataset.find({"apellido":{$regex:"a[^aeiou]"}});
```
 ### Consulta 24: Buscar correos que no contienen números
```
db.Dataset.find({"correo":{$regex:"[^0-9]"}});
```
 ### Consulta 25: Buscar ciudades con doble vocal
```
db.Dataset.find({"ciudad":{$regex:"([aeiou][aeiou])"}});
```
### Consulta 26: Buscar profesiones con espacios
```
db.Dataset.find({"profesion":{$regex:"  "}});
```
### Consulta 27: Buscar nombres con al menos una letra repetida
```
db.Dataset.find({"nombre":{$regex:"([a-zA-Z]).*\\1"}});
```
### Consulta 28: Buscar apellidos que no contienen 'e'
```
db.Dataset.find({"apellido":{$regex:"^[^e]*$"}});
```
### Consulta 29: Buscar profesiones que contienen palabras en plural (terminan en 's')
```
db.Dataset.find({"profesion":{$regex:"s$"}});
```
 ### Consulta 30: Buscar teléfonos que comienzan con paréntesis
```
db.Dataset.find({"telefono":{$regex:"^\\("}});
```