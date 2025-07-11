
# 🌿Tarea 2 Mongo DB 2- Productos Dia3
## :electric_plug:Creación de una base de datos 
Creamos una base llamada "Dia3_MongoDB2"
codigo:
```
use Dia3_MongoDB2;
```
## :inbox_tray:Creación e inserción de la data en una colección.
 Creamos e insertamos el archivo csv convertido en json y copiamos la data para insertar con insertMany a una colección llamada "productos".
 ```
db.productos.insertMany([

{

"nombre": "Ex Necessitatibus Max",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2446610,

2114420,

588724,

3802053

],

"comentarios": [

"Entrega rápida y bien embalado",

"Excelente producto para el día a día",

"Muy útil y práctico"

]

},

{

"nombre": "Vitae Officia Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3260441,

646407

],

"comentarios": [

"Ideal para estudiantes",

"Perfecto para oficina y hogar",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Eius Blanditiis Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1760179,

2811513,

2829635

],

"comentarios": [

"Fácil de usar y configurar",

"Recomendado 100%",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Quae Harum Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

2636967,

2679669,

3595567,

3771247

],

"comentarios": [

"Excelente producto para el día a día",

"Ideal para estudiantes",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Iure Dignissimos Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2446101,

1290072,

2029169

],

"comentarios": [

"Rinde bien en tareas exigentes",

"El diseño es moderno y atractivo",

"La calidad supera las expectativas"

]

},

{

"nombre": "Facere Praesentium Lite",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2861296,

1069921,

2111106,

569556

],

"comentarios": [

"Perfecto para oficina y hogar",

"Excelente producto para el día a día",

"Muy útil y práctico"

]

},

{

"nombre": "Odio Nemo Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3421946,

1450200

],

"comentarios": [

"Recomendado 100%",

"Perfecto para oficina y hogar",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Possimus Nobis Lite",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2842957,

325856

],

"comentarios": [

"Recomendado 100%",

"El diseño es moderno y atractivo",

"Ideal para estudiantes"

]

},

{

"nombre": "Fugiat Adipisci X",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

650257,

3047524,

2030809

],

"comentarios": [

"Fácil de usar y configurar",

"El diseño es moderno y atractivo",

"Excelente producto para el día a día"

]

},

{

"nombre": "Vero Explicabo Max",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1623511,

3559141

],

"comentarios": [

"Ideal para estudiantes",

"Muy útil y práctico",

"Recomendado 100%"

]

},

{

"nombre": "Molestias Quidem Pro",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

2964128,

462335,

864259,

3958072

],

"comentarios": [

"Ideal para estudiantes",

"Perfecto para oficina y hogar",

"Muy útil y práctico"

]

},

{

"nombre": "Occaecati Minus Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3957050,

3975099

],

"comentarios": [

"El diseño es moderno y atractivo",

"La calidad supera las expectativas",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Cumque Dolorum Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2746564,

880231

],

"comentarios": [

"Entrega rápida y bien embalado",

"Ideal para estudiantes",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Debitis Dolorum Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

3630500,

332124,

2559778

],

"comentarios": [

"La calidad supera las expectativas",

"Recomendado 100%",

"Muy útil y práctico"

]

},

{

"nombre": "Maxime Voluptatem Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

2949128,

3119042,

3890975,

2707866

],

"comentarios": [

"Fácil de usar y configurar",

"Perfecto para oficina y hogar",

"Muy útil y práctico"

]

},

{

"nombre": "Exercitationem Ipsa X",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

2084536,

2768919,

2807880,

2570462

],

"comentarios": [

"Muy útil y práctico",

"Ideal para estudiantes",

"Fácil de usar y configurar"

]

},

{

"nombre": "Iure Iste Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

2824804,

2835611

],

"comentarios": [

"Entrega rápida y bien embalado",

"La calidad supera las expectativas",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Voluptatum Pariatur Max",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

2915925,

2902601,

3222014,

3544873

],

"comentarios": [

"Recomendado 100%",

"Ideal para estudiantes",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Dolorum Molestias Max",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

293353,

725603,

3091499

],

"comentarios": [

"Muy útil y práctico",

"Excelente producto para el día a día",

"Recomendado 100%"

]

},

{

"nombre": "Distinctio Inventore X",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

580022,

3601757,

3965486

],

"comentarios": [

"Recomendado 100%",

"Excelente producto para el día a día",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Eaque Deserunt X",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

3136785,

942393,

482630

],

"comentarios": [

"Recomendado 100%",

"Entrega rápida y bien embalado",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Minus Optio Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

1079761,

1284694,

3742226,

3567307

],

"comentarios": [

"Fácil de usar y configurar",

"Entrega rápida y bien embalado",

"Ideal para estudiantes"

]

},

{

"nombre": "Commodi Ut Plus",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1822845,

2144530,

2545674,

638294

],

"comentarios": [

"Excelente producto para el día a día",

"Recomendado 100%",

"La calidad supera las expectativas"

]

},

{

"nombre": "Ipsum Id Lite",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3609476,

833923

],

"comentarios": [

"Ideal para estudiantes",

"Fácil de usar y configurar",

"La calidad supera las expectativas"

]

},

{

"nombre": "Eos Iste Pro",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2263771,

673628

],

"comentarios": [

"Ideal para estudiantes",

"Excelente producto para el día a día",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Sequi Reprehenderit X",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1604334,

3871814,

2860916

],

"comentarios": [

"Fácil de usar y configurar",

"Recomendado 100%",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Numquam Earum Plus",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

973027,

2559436,

1837479,

1497986

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Fácil de usar y configurar",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Deserunt Veniam Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2854633,

3935193,

2490495

],

"comentarios": [

"Ideal para estudiantes",

"Perfecto para oficina y hogar",

"La calidad supera las expectativas"

]

},

{

"nombre": "Distinctio Vitae X",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2635324,

3786230,

1845490

],

"comentarios": [

"El diseño es moderno y atractivo",

"Entrega rápida y bien embalado",

"Ideal para estudiantes"

]

},

{

"nombre": "Illum Praesentium Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1378260,

274699

],

"comentarios": [

"Ideal para estudiantes",

"La calidad supera las expectativas",

"Recomendado 100%"

]

},

{

"nombre": "Vel Blanditiis Max",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

993728,

2759561,

3261935

],

"comentarios": [

"El diseño es moderno y atractivo",

"Perfecto para oficina y hogar",

"Fácil de usar y configurar"

]

},

{

"nombre": "Molestiae Mollitia Lite",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1326684,

3314435,

2606559

],

"comentarios": [

"Ideal para estudiantes",

"Recomendado 100%",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Nulla Sunt Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

1345530,

1889474

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Recomendado 100%"

]

},

{

"nombre": "Corrupti Quasi Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

1221249,

2977875,

3033394,

878823

],

"comentarios": [

"El diseño es moderno y atractivo",

"Ideal para estudiantes",

"Muy útil y práctico"

]

},

{

"nombre": "Tenetur In Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

1205707,

3586821

],

"comentarios": [

"Entrega rápida y bien embalado",

"Recomendado 100%",

"Excelente producto para el día a día"

]

},

{

"nombre": "Commodi Commodi X",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

1957465,

1071112,

2759122,

1536977

],

"comentarios": [

"Excelente producto para el día a día",

"Perfecto para oficina y hogar",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Aliquam Reiciendis Max",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2123557,

216647

],

"comentarios": [

"Muy útil y práctico",

"Excelente producto para el día a día",

"Ideal para estudiantes"

]

},

{

"nombre": "Nulla Ipsum Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3311559,

3203346,

955847,

253318

],

"comentarios": [

"Excelente producto para el día a día",

"Recomendado 100%",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Iure Sunt Pro",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

3445003,

1738290

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Maxime Sed Plus",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

803171,

3866481,

2147220,

975279

],

"comentarios": [

"El diseño es moderno y atractivo",

"Fácil de usar y configurar",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Placeat At Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3837600,

852736,

644325,

2398614

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Iusto Pariatur Plus",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

1695514,

1322138,

3936989,

290844

],

"comentarios": [

"Perfecto para oficina y hogar",

"Muy útil y práctico",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Et Ab Pro",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3619930,

3798124,

497249

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Nostrum Accusamus Max",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

3156625,

2073861

],

"comentarios": [

"Recomendado 100%",

"Ideal para estudiantes",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Exercitationem Eius Lite",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

1273519,

1596496

],

"comentarios": [

"Fácil de usar y configurar",

"Excelente producto para el día a día",

"La calidad supera las expectativas"

]

},

{

"nombre": "Laudantium Asperiores Pro",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

1013615,

2297046,

485066

],

"comentarios": [

"La calidad supera las expectativas",

"Entrega rápida y bien embalado",

"Fácil de usar y configurar"

]

},

{

"nombre": "Nesciunt Consequatur Plus",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

336169,

1318552

],

"comentarios": [

"El diseño es moderno y atractivo",

"Rinde bien en tareas exigentes",

"Ideal para estudiantes"

]

},

{

"nombre": "Qui Nihil Max",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1149487,

2590622,

2508306,

1095504

],

"comentarios": [

"Muy útil y práctico",

"Recomendado 100%",

"La calidad supera las expectativas"

]

},

{

"nombre": "Fugiat Veritatis Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

957008,

387818,

1753654,

3016242

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Entrega rápida y bien embalado",

"Recomendado 100%"

]

},

{

"nombre": "In Maxime Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2783938,

943663,

3374966

],

"comentarios": [

"La calidad supera las expectativas",

"Fácil de usar y configurar",

"Recomendado 100%"

]

},

{

"nombre": "Laboriosam Quo Lite",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

3714719,

307132,

3683399

],

"comentarios": [

"La calidad supera las expectativas",

"Fácil de usar y configurar",

"Recomendado 100%"

]

},

{

"nombre": "Eius Accusamus Max",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

1838973,

2617996

],

"comentarios": [

"Recomendado 100%",

"Perfecto para oficina y hogar",

"Fácil de usar y configurar"

]

},

{

"nombre": "Perferendis Occaecati Lite",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

791703,

3432538

],

"comentarios": [

"Excelente producto para el día a día",

"Ideal para estudiantes",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Labore Doloremque Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

1316960,

2983700,

3120967,

2856340

],

"comentarios": [

"Ideal para estudiantes",

"Recomendado 100%",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Explicabo Consequatur X",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

3466211,

1780431,

1303926

],

"comentarios": [

"Recomendado 100%",

"Ideal para estudiantes",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Iure Ut Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2035537,

3663864,

2048808

],

"comentarios": [

"Muy útil y práctico",

"Rinde bien en tareas exigentes",

"Ideal para estudiantes"

]

},

{

"nombre": "Rerum Debitis Lite",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2490678,

2479868,

709634,

3223091

],

"comentarios": [

"Rinde bien en tareas exigentes",

"El diseño es moderno y atractivo",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Assumenda Nam X",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

3000396,

201621,

3638679

],

"comentarios": [

"Muy útil y práctico",

"Recomendado 100%",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Deserunt Quod X",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3056533,

3359512,

2286635,

676966

],

"comentarios": [

"Recomendado 100%",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Nisi Vero Max",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1769321,

469205,

3236799,

795596

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Excelente producto para el día a día",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Dignissimos Facilis Plus",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

1484172,

2018725,

3594252

],

"comentarios": [

"Entrega rápida y bien embalado",

"El diseño es moderno y atractivo",

"Muy útil y práctico"

]

},

{

"nombre": "Minus Dolores Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3021595,

1444074,

3915475,

2517768

],

"comentarios": [

"El diseño es moderno y atractivo",

"Recomendado 100%",

"Muy útil y práctico"

]

},

{

"nombre": "Hic Suscipit Max",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

1061347,

3954089,

2967499,

495980

],

"comentarios": [

"Perfecto para oficina y hogar",

"Ideal para estudiantes",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Deleniti Quibusdam Lite",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

884839,

1497889,

537596

],

"comentarios": [

"Excelente producto para el día a día",

"Ideal para estudiantes",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Voluptatum Aliquid Plus",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

2907058,

609031

],

"comentarios": [

"El diseño es moderno y atractivo",

"Excelente producto para el día a día",

"Fácil de usar y configurar"

]

},

{

"nombre": "Totam Saepe Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

1018254,

2798034,

3226052

],

"comentarios": [

"Fácil de usar y configurar",

"Recomendado 100%",

"Excelente producto para el día a día"

]

},

{

"nombre": "Voluptas Odio Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2204964,

2250464,

2021135

],

"comentarios": [

"Muy útil y práctico",

"Excelente producto para el día a día",

"La calidad supera las expectativas"

]

},

{

"nombre": "Laboriosam Excepturi Lite",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

1956927,

1108244,

344049,

3228829

],

"comentarios": [

"Fácil de usar y configurar",

"La calidad supera las expectativas",

"Recomendado 100%"

]

},

{

"nombre": "Corporis Non Max",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

1485850,

965719,

3284960

],

"comentarios": [

"Perfecto para oficina y hogar",

"El diseño es moderno y atractivo",

"La calidad supera las expectativas"

]

},

{

"nombre": "Reprehenderit Iste Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

2135029,

3354736

],

"comentarios": [

"Perfecto para oficina y hogar",

"Ideal para estudiantes",

"La calidad supera las expectativas"

]

},

{

"nombre": "Quam Quibusdam Pro",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

3777755,

899004,

947502

],

"comentarios": [

"Perfecto para oficina y hogar",

"Ideal para estudiantes",

"Excelente producto para el día a día"

]

},

{

"nombre": "A Dolor Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2513565,

2021830,

772703

],

"comentarios": [

"Rinde bien en tareas exigentes",

"La calidad supera las expectativas",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Rem Magni Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3350100,

2584286,

1474634

],

"comentarios": [

"Fácil de usar y configurar",

"El diseño es moderno y atractivo",

"Muy útil y práctico"

]

},

{

"nombre": "Doloremque Id X",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3294319,

1985594

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Excelente producto para el día a día",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Earum Sequi Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3813856,

3607659,

2199803,

2817057

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Quod Doloremque Max",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

263961,

2733256

],

"comentarios": [

"Muy útil y práctico",

"Ideal para estudiantes",

"Recomendado 100%"

]

},

{

"nombre": "Aut Omnis Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

492912,

3787259

],

"comentarios": [

"Entrega rápida y bien embalado",

"La calidad supera las expectativas",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Tenetur Deserunt Lite",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

897227,

951642,

3228347

],

"comentarios": [

"Excelente producto para el día a día",

"El diseño es moderno y atractivo",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Nemo Consequuntur X",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1787302,

2689840,

2796979

],

"comentarios": [

"Ideal para estudiantes",

"El diseño es moderno y atractivo",

"Recomendado 100%"

]

},

{

"nombre": "Tempora Expedita Max",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2957578,

1625792,

2335473,

1945254

],

"comentarios": [

"El diseño es moderno y atractivo",

"Rinde bien en tareas exigentes",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Error Fugiat Max",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

312965,

3721792,

2512638,

3171925

],

"comentarios": [

"Fácil de usar y configurar",

"Perfecto para oficina y hogar",

"La calidad supera las expectativas"

]

},

{

"nombre": "Molestiae Ducimus X",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1432178,

201582,

2500380,

2767616

],

"comentarios": [

"Perfecto para oficina y hogar",

"Muy útil y práctico",

"Excelente producto para el día a día"

]

},

{

"nombre": "Quaerat Non Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

660678,

1095523

],

"comentarios": [

"Perfecto para oficina y hogar",

"Entrega rápida y bien embalado",

"Muy útil y práctico"

]

},

{

"nombre": "Laboriosam Suscipit Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2080575,

3507788

],

"comentarios": [

"La calidad supera las expectativas",

"Ideal para estudiantes",

"Excelente producto para el día a día"

]

},

{

"nombre": "Autem Deserunt Max",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

1281763,

1639582,

1387264

],

"comentarios": [

"Excelente producto para el día a día",

"El diseño es moderno y atractivo",

"Fácil de usar y configurar"

]

},

{

"nombre": "Corrupti Ducimus Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

2983335,

3664382,

2987156,

2042625

],

"comentarios": [

"Entrega rápida y bien embalado",

"La calidad supera las expectativas",

"Recomendado 100%"

]

},

{

"nombre": "Deleniti Distinctio Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

3570539,

1770078,

2475940,

366413

],

"comentarios": [

"Recomendado 100%",

"El diseño es moderno y atractivo",

"Excelente producto para el día a día"

]

},

{

"nombre": "Deserunt Odio Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3074761,

3615843,

1004699

],

"comentarios": [

"Muy útil y práctico",

"Fácil de usar y configurar",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Distinctio Voluptatem Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

1882195,

3242401,

2013825,

880972

],

"comentarios": [

"Entrega rápida y bien embalado",

"Fácil de usar y configurar",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Fugiat Ipsa Plus",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

1318646,

2376087,

3561568,

2421449

],

"comentarios": [

"La calidad supera las expectativas",

"El diseño es moderno y atractivo",

"Excelente producto para el día a día"

]

},

{

"nombre": "Beatae Libero Plus",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

3543744,

1691175,

2137206,

3103378

],

"comentarios": [

"Ideal para estudiantes",

"Rinde bien en tareas exigentes",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Inventore Excepturi Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

1375245,

1536694,

469144

],

"comentarios": [

"El diseño es moderno y atractivo",

"Recomendado 100%",

"Excelente producto para el día a día"

]

},

{

"nombre": "Distinctio Optio Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

644342,

1983304,

1592318

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Eligendi Numquam Plus",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

3566617,

466339

],

"comentarios": [

"El diseño es moderno y atractivo",

"Muy útil y práctico",

"La calidad supera las expectativas"

]

},

{

"nombre": "Iure Possimus Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

1488917,

821619

],

"comentarios": [

"El diseño es moderno y atractivo",

"Fácil de usar y configurar",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Blanditiis Optio Plus",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

232375,

2201783,

1090570,

1366979

],

"comentarios": [

"Muy útil y práctico",

"La calidad supera las expectativas",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Quasi Laudantium Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

2050227,

2364854,

267812,

3351449

],

"comentarios": [

"Ideal para estudiantes",

"Fácil de usar y configurar",

"Muy útil y práctico"

]

},

{

"nombre": "Nulla Architecto Lite",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

859983,

2264011

],

"comentarios": [

"Entrega rápida y bien embalado",

"Ideal para estudiantes",

"Excelente producto para el día a día"

]

},

{

"nombre": "Quidem Aut Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2666870,

2340561,

745506,

1507994

],

"comentarios": [

"Perfecto para oficina y hogar",

"La calidad supera las expectativas",

"Fácil de usar y configurar"

]

},

{

"nombre": "Deserunt Libero Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2098213,

447237,

510674,

1957354

],

"comentarios": [

"Ideal para estudiantes",

"Fácil de usar y configurar",

"Recomendado 100%"

]

}

]);

#### Taller de MongoDB: Arrays y Operadores

  

#### ------

  

#### Nivel 1: Básico – Consultas directas con arrays

  

#### 1. Buscar productos que tengan la categoría `"gaming"`

db.productos.find({categorias:/gaming/});

#### 2. Buscar productos que contengan `"ssd"` en sus etiquetas

db.productos.find({etiquetas:/ssd/});

#### 3. Buscar productos que tengan el array exacto `["rgb", "ssd", "16gb"]`

db.productos.find({etiquetas:["rgb", "ssd", "16gb"]});

#### 4. Buscar productos que tengan **exactamente 3 etiquetas**

db.productos.find({etiquetas:{$size:3}});

#### 5. Buscar productos que tengan el segundo precio mayor a 2'000.000

db.productos.find({"precios.1":{$gt: 2000000}});

#### 6. Buscar productos donde `"facil uso"` esté presente en etiquetas

db.productos.find({etiquetas:"facil uso"});

#### 7. Buscar productos que tengan `"streaming"` en categorías

db.productos.find({categorias:"streaming"});

#### 8. Buscar productos con el nombre que contenga `"Pro"`

db.productos.find({nombre:/Pro/});

  

#### ------

  

#### Nivel 2: Intermedio – Operadores de arrays y búsquedas combinadas

  

#### 1. Buscar productos que contengan `"ssd"` **y** `"16gb"` en sus etiquetas

db.productos.find({etiquetas:{$all:["ssd", "16gb"]}});

#### 2. Buscar productos que tengan al menos un precio mayor a 3'000.000

db.productos.find({precios:{$elemMatch:{$gt:3000000}}});

#### 3. Buscar productos con un precio entre 2'000.000 y 3'000.000

db.productos.find({precios:{$elemMatch:{$gte:2000000, $lte:3000000}}});

#### 4. Buscar productos donde la **primera categoría** sea `"tecnologia"`

db.productos.find({"categorias.0":"tecnologia"});

#### 5. Buscar productos con precios que tengan exactamente 4 valores

db.productos.find({precios:{$size:4}});

#### 6. Buscar productos donde una de las etiquetas sea `"gamer"`

db.productos.find({etiquetas:"gamer"});

#### 7. Buscar productos con el nombre que termine en `"Max"`

db.productos.find({nombre:/Max$/});

#### 8. Buscar productos con la etiqueta `"bluetooth"` y categoría `"audio"`

db.productos.find({etiquetas:"bluetooth", categorias:"audio"});

#### 9. Buscar productos con `"android"` tanto en categorías como etiquetas

db.productos.find({categorias:"android", etiquetas:"android"});

#### 10. Buscar productos donde uno de los comentarios sea exactamente `"Recomendado 100%"`

db.productos.find({comentarios:"Recomendado 100%"});

#### 11. Buscar productos con más de un precio menor a 1'000.000

  

#### 12. Buscar productos donde `"streamer"` esté en etiquetas

db.productos.find({etiquetas:"streamer"});

  

#### ------

  

#### Nivel 3: Avanzado – Regex en arrays

  

#### 1. Buscar productos con comentarios que empiecen con `"Excelente"`

db.productos.find({comentarios:{$regex:"^Excelente"}});

#### 2. Buscar productos con etiquetas que contengan palabras que terminan en `"ico"`

db.productos.find({etiquetas:{$regex:"ico$"}});

#### 3. Buscar productos con comentarios que contengan la palabra `"fácil"` (insensible a mayúsculas)

db.productos.find({comentarios:{$regex:"fácil", $options:"i"}});

#### 4. Buscar productos con etiquetas que empiecen por `"c"`

db.productos.find({etiquetas:{$regex:"^c"}});

#### 5. Buscar productos con comentarios que contengan la palabra `"hogar"`

db.productos.find({comentarios:{$regex:"hogar"}});

#### 6. Buscar productos con alguna etiqueta que tenga doble vocal

db.productos.find({etiquetas:{$regex:"([aeiou])\\1", $options:"i"}});

#### 7. Buscar productos con comentarios que tengan una palabra de 10 letras

db.productos.find({comentarios:{$regex:"w{10}"}});

#### 8. Buscar productos con etiquetas que empiecen con `"s"` y tengan al menos 5 caracteres

db.productos.find({etiquetas:{$regex:"^s.{4,}"}});

#### 9. Buscar productos con comentarios que contengan signos de puntuación

db.productos.find({comentarios:{$regex:"[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]"}});

#### 10. Buscar productos con etiquetas donde haya palabras compuestas (`\b\w+-\w+\b`)

db.productos.find({etiquetas:{$regex:"\\b\\w+-\\w+\\b"}});

#### ------

  

#### ## 🧠 Nivel 4: Desafíos Combinados (Difíciles)

  

#### 1. Buscar productos con precios entre 1'500.000 y 3'000.000, y que tengan `"ssd"` como etiqueta

db.productos.find({

precios: {$elemMatch: {$gte: 1500000, $lte: 3000000}},

etiquetas: "ssd"

});

#### 2. Buscar productos con `"wifi"` en etiquetas y al menos un comentario que contenga `"rápida"`

db.productos.find({

etiquetas: "wifi",

comentarios: {$regex: "rápida"}

});

#### 3. Buscar productos con más de 3 precios y la palabra `"moderno"` en los comentarios

  

#### 4. Buscar productos con el nombre que tenga exactamente 3 palabras

db.productos.find({

nombre: {$regex: "(.*\\s.*){2}"}

});

#### 5. Buscar productos con categorías `"audio"` o `"almacenamiento"`

db.productos.find({

$or: [

{categorias: "audio"},

{categorias: "almacenamiento"}

]

});

#### 6. Buscar productos donde el primer comentario empiece con "Ideal"

db.productos.find({

"comentarios.0": {$regex: "^Ideal"}

});

#### 7. Buscar productos donde haya una etiqueta que incluya "ruido"

db.productos.find({

etiquetas: {$regex: "ruido"}

});

#### 8. Buscar productos que tengan `"economica"` como etiqueta pero **no** `"ssd"`

db.productos.find({

etiquetas: {

$in: ["economica"],

$nin: ["ssd"]

}

});

#### 9. Buscar productos con al menos dos etiquetas que empiecen con vocal

  

#### 10. Buscar productos donde **todas** las etiquetas contengan solo letras minúsculas

db.productos.find({

etiquetas: {

$not: {

$elemMatch: { $regex: "[A-Z]" }

}

}

});#### Creacion de una base de datos llamada "Dia3_MongoDB2"

use Dia3_MongoDB2;

#### Creacion e insercion del archivo csv convertido en json y copiado para insertar con insertMany a una coleccion llamada "productos"

db.productos.insertMany([

{

"nombre": "Ex Necessitatibus Max",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2446610,

2114420,

588724,

3802053

],

"comentarios": [

"Entrega rápida y bien embalado",

"Excelente producto para el día a día",

"Muy útil y práctico"

]

},

{

"nombre": "Vitae Officia Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3260441,

646407

],

"comentarios": [

"Ideal para estudiantes",

"Perfecto para oficina y hogar",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Eius Blanditiis Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1760179,

2811513,

2829635

],

"comentarios": [

"Fácil de usar y configurar",

"Recomendado 100%",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Quae Harum Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

2636967,

2679669,

3595567,

3771247

],

"comentarios": [

"Excelente producto para el día a día",

"Ideal para estudiantes",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Iure Dignissimos Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2446101,

1290072,

2029169

],

"comentarios": [

"Rinde bien en tareas exigentes",

"El diseño es moderno y atractivo",

"La calidad supera las expectativas"

]

},

{

"nombre": "Facere Praesentium Lite",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2861296,

1069921,

2111106,

569556

],

"comentarios": [

"Perfecto para oficina y hogar",

"Excelente producto para el día a día",

"Muy útil y práctico"

]

},

{

"nombre": "Odio Nemo Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3421946,

1450200

],

"comentarios": [

"Recomendado 100%",

"Perfecto para oficina y hogar",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Possimus Nobis Lite",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2842957,

325856

],

"comentarios": [

"Recomendado 100%",

"El diseño es moderno y atractivo",

"Ideal para estudiantes"

]

},

{

"nombre": "Fugiat Adipisci X",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

650257,

3047524,

2030809

],

"comentarios": [

"Fácil de usar y configurar",

"El diseño es moderno y atractivo",

"Excelente producto para el día a día"

]

},

{

"nombre": "Vero Explicabo Max",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1623511,

3559141

],

"comentarios": [

"Ideal para estudiantes",

"Muy útil y práctico",

"Recomendado 100%"

]

},

{

"nombre": "Molestias Quidem Pro",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

2964128,

462335,

864259,

3958072

],

"comentarios": [

"Ideal para estudiantes",

"Perfecto para oficina y hogar",

"Muy útil y práctico"

]

},

{

"nombre": "Occaecati Minus Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3957050,

3975099

],

"comentarios": [

"El diseño es moderno y atractivo",

"La calidad supera las expectativas",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Cumque Dolorum Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2746564,

880231

],

"comentarios": [

"Entrega rápida y bien embalado",

"Ideal para estudiantes",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Debitis Dolorum Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

3630500,

332124,

2559778

],

"comentarios": [

"La calidad supera las expectativas",

"Recomendado 100%",

"Muy útil y práctico"

]

},

{

"nombre": "Maxime Voluptatem Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

2949128,

3119042,

3890975,

2707866

],

"comentarios": [

"Fácil de usar y configurar",

"Perfecto para oficina y hogar",

"Muy útil y práctico"

]

},

{

"nombre": "Exercitationem Ipsa X",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

2084536,

2768919,

2807880,

2570462

],

"comentarios": [

"Muy útil y práctico",

"Ideal para estudiantes",

"Fácil de usar y configurar"

]

},

{

"nombre": "Iure Iste Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

2824804,

2835611

],

"comentarios": [

"Entrega rápida y bien embalado",

"La calidad supera las expectativas",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Voluptatum Pariatur Max",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

2915925,

2902601,

3222014,

3544873

],

"comentarios": [

"Recomendado 100%",

"Ideal para estudiantes",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Dolorum Molestias Max",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

293353,

725603,

3091499

],

"comentarios": [

"Muy útil y práctico",

"Excelente producto para el día a día",

"Recomendado 100%"

]

},

{

"nombre": "Distinctio Inventore X",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

580022,

3601757,

3965486

],

"comentarios": [

"Recomendado 100%",

"Excelente producto para el día a día",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Eaque Deserunt X",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

3136785,

942393,

482630

],

"comentarios": [

"Recomendado 100%",

"Entrega rápida y bien embalado",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Minus Optio Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

1079761,

1284694,

3742226,

3567307

],

"comentarios": [

"Fácil de usar y configurar",

"Entrega rápida y bien embalado",

"Ideal para estudiantes"

]

},

{

"nombre": "Commodi Ut Plus",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1822845,

2144530,

2545674,

638294

],

"comentarios": [

"Excelente producto para el día a día",

"Recomendado 100%",

"La calidad supera las expectativas"

]

},

{

"nombre": "Ipsum Id Lite",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3609476,

833923

],

"comentarios": [

"Ideal para estudiantes",

"Fácil de usar y configurar",

"La calidad supera las expectativas"

]

},

{

"nombre": "Eos Iste Pro",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2263771,

673628

],

"comentarios": [

"Ideal para estudiantes",

"Excelente producto para el día a día",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Sequi Reprehenderit X",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1604334,

3871814,

2860916

],

"comentarios": [

"Fácil de usar y configurar",

"Recomendado 100%",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Numquam Earum Plus",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

973027,

2559436,

1837479,

1497986

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Fácil de usar y configurar",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Deserunt Veniam Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2854633,

3935193,

2490495

],

"comentarios": [

"Ideal para estudiantes",

"Perfecto para oficina y hogar",

"La calidad supera las expectativas"

]

},

{

"nombre": "Distinctio Vitae X",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2635324,

3786230,

1845490

],

"comentarios": [

"El diseño es moderno y atractivo",

"Entrega rápida y bien embalado",

"Ideal para estudiantes"

]

},

{

"nombre": "Illum Praesentium Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1378260,

274699

],

"comentarios": [

"Ideal para estudiantes",

"La calidad supera las expectativas",

"Recomendado 100%"

]

},

{

"nombre": "Vel Blanditiis Max",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

993728,

2759561,

3261935

],

"comentarios": [

"El diseño es moderno y atractivo",

"Perfecto para oficina y hogar",

"Fácil de usar y configurar"

]

},

{

"nombre": "Molestiae Mollitia Lite",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1326684,

3314435,

2606559

],

"comentarios": [

"Ideal para estudiantes",

"Recomendado 100%",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Nulla Sunt Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

1345530,

1889474

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Recomendado 100%"

]

},

{

"nombre": "Corrupti Quasi Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

1221249,

2977875,

3033394,

878823

],

"comentarios": [

"El diseño es moderno y atractivo",

"Ideal para estudiantes",

"Muy útil y práctico"

]

},

{

"nombre": "Tenetur In Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

1205707,

3586821

],

"comentarios": [

"Entrega rápida y bien embalado",

"Recomendado 100%",

"Excelente producto para el día a día"

]

},

{

"nombre": "Commodi Commodi X",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

1957465,

1071112,

2759122,

1536977

],

"comentarios": [

"Excelente producto para el día a día",

"Perfecto para oficina y hogar",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Aliquam Reiciendis Max",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2123557,

216647

],

"comentarios": [

"Muy útil y práctico",

"Excelente producto para el día a día",

"Ideal para estudiantes"

]

},

{

"nombre": "Nulla Ipsum Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3311559,

3203346,

955847,

253318

],

"comentarios": [

"Excelente producto para el día a día",

"Recomendado 100%",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Iure Sunt Pro",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

3445003,

1738290

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Maxime Sed Plus",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

803171,

3866481,

2147220,

975279

],

"comentarios": [

"El diseño es moderno y atractivo",

"Fácil de usar y configurar",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Placeat At Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3837600,

852736,

644325,

2398614

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Iusto Pariatur Plus",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

1695514,

1322138,

3936989,

290844

],

"comentarios": [

"Perfecto para oficina y hogar",

"Muy útil y práctico",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Et Ab Pro",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3619930,

3798124,

497249

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Nostrum Accusamus Max",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

3156625,

2073861

],

"comentarios": [

"Recomendado 100%",

"Ideal para estudiantes",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Exercitationem Eius Lite",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

1273519,

1596496

],

"comentarios": [

"Fácil de usar y configurar",

"Excelente producto para el día a día",

"La calidad supera las expectativas"

]

},

{

"nombre": "Laudantium Asperiores Pro",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

1013615,

2297046,

485066

],

"comentarios": [

"La calidad supera las expectativas",

"Entrega rápida y bien embalado",

"Fácil de usar y configurar"

]

},

{

"nombre": "Nesciunt Consequatur Plus",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

336169,

1318552

],

"comentarios": [

"El diseño es moderno y atractivo",

"Rinde bien en tareas exigentes",

"Ideal para estudiantes"

]

},

{

"nombre": "Qui Nihil Max",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1149487,

2590622,

2508306,

1095504

],

"comentarios": [

"Muy útil y práctico",

"Recomendado 100%",

"La calidad supera las expectativas"

]

},

{

"nombre": "Fugiat Veritatis Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

957008,

387818,

1753654,

3016242

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Entrega rápida y bien embalado",

"Recomendado 100%"

]

},

{

"nombre": "In Maxime Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2783938,

943663,

3374966

],

"comentarios": [

"La calidad supera las expectativas",

"Fácil de usar y configurar",

"Recomendado 100%"

]

},

{

"nombre": "Laboriosam Quo Lite",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

3714719,

307132,

3683399

],

"comentarios": [

"La calidad supera las expectativas",

"Fácil de usar y configurar",

"Recomendado 100%"

]

},

{

"nombre": "Eius Accusamus Max",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"rgb",

"ssd",

"16gb"

],

"precios": [

1838973,

2617996

],

"comentarios": [

"Recomendado 100%",

"Perfecto para oficina y hogar",

"Fácil de usar y configurar"

]

},

{

"nombre": "Perferendis Occaecati Lite",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

791703,

3432538

],

"comentarios": [

"Excelente producto para el día a día",

"Ideal para estudiantes",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Labore Doloremque Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

1316960,

2983700,

3120967,

2856340

],

"comentarios": [

"Ideal para estudiantes",

"Recomendado 100%",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Explicabo Consequatur X",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

3466211,

1780431,

1303926

],

"comentarios": [

"Recomendado 100%",

"Ideal para estudiantes",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Iure Ut Max",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2035537,

3663864,

2048808

],

"comentarios": [

"Muy útil y práctico",

"Rinde bien en tareas exigentes",

"Ideal para estudiantes"

]

},

{

"nombre": "Rerum Debitis Lite",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2490678,

2479868,

709634,

3223091

],

"comentarios": [

"Rinde bien en tareas exigentes",

"El diseño es moderno y atractivo",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Assumenda Nam X",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

3000396,

201621,

3638679

],

"comentarios": [

"Muy útil y práctico",

"Recomendado 100%",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Deserunt Quod X",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3056533,

3359512,

2286635,

676966

],

"comentarios": [

"Recomendado 100%",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Nisi Vero Max",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

1769321,

469205,

3236799,

795596

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Excelente producto para el día a día",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Dignissimos Facilis Plus",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

1484172,

2018725,

3594252

],

"comentarios": [

"Entrega rápida y bien embalado",

"El diseño es moderno y atractivo",

"Muy útil y práctico"

]

},

{

"nombre": "Minus Dolores Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3021595,

1444074,

3915475,

2517768

],

"comentarios": [

"El diseño es moderno y atractivo",

"Recomendado 100%",

"Muy útil y práctico"

]

},

{

"nombre": "Hic Suscipit Max",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

1061347,

3954089,

2967499,

495980

],

"comentarios": [

"Perfecto para oficina y hogar",

"Ideal para estudiantes",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Deleniti Quibusdam Lite",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

884839,

1497889,

537596

],

"comentarios": [

"Excelente producto para el día a día",

"Ideal para estudiantes",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Voluptatum Aliquid Plus",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

2907058,

609031

],

"comentarios": [

"El diseño es moderno y atractivo",

"Excelente producto para el día a día",

"Fácil de usar y configurar"

]

},

{

"nombre": "Totam Saepe Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

1018254,

2798034,

3226052

],

"comentarios": [

"Fácil de usar y configurar",

"Recomendado 100%",

"Excelente producto para el día a día"

]

},

{

"nombre": "Voluptas Odio Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

2204964,

2250464,

2021135

],

"comentarios": [

"Muy útil y práctico",

"Excelente producto para el día a día",

"La calidad supera las expectativas"

]

},

{

"nombre": "Laboriosam Excepturi Lite",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

1956927,

1108244,

344049,

3228829

],

"comentarios": [

"Fácil de usar y configurar",

"La calidad supera las expectativas",

"Recomendado 100%"

]

},

{

"nombre": "Corporis Non Max",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

1485850,

965719,

3284960

],

"comentarios": [

"Perfecto para oficina y hogar",

"El diseño es moderno y atractivo",

"La calidad supera las expectativas"

]

},

{

"nombre": "Reprehenderit Iste Lite",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

2135029,

3354736

],

"comentarios": [

"Perfecto para oficina y hogar",

"Ideal para estudiantes",

"La calidad supera las expectativas"

]

},

{

"nombre": "Quam Quibusdam Pro",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

3777755,

899004,

947502

],

"comentarios": [

"Perfecto para oficina y hogar",

"Ideal para estudiantes",

"Excelente producto para el día a día"

]

},

{

"nombre": "A Dolor Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2513565,

2021830,

772703

],

"comentarios": [

"Rinde bien en tareas exigentes",

"La calidad supera las expectativas",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Rem Magni Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3350100,

2584286,

1474634

],

"comentarios": [

"Fácil de usar y configurar",

"El diseño es moderno y atractivo",

"Muy útil y práctico"

]

},

{

"nombre": "Doloremque Id X",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

3294319,

1985594

],

"comentarios": [

"Rinde bien en tareas exigentes",

"Excelente producto para el día a día",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Earum Sequi Pro",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

3813856,

3607659,

2199803,

2817057

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Quod Doloremque Max",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

263961,

2733256

],

"comentarios": [

"Muy útil y práctico",

"Ideal para estudiantes",

"Recomendado 100%"

]

},

{

"nombre": "Aut Omnis Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

492912,

3787259

],

"comentarios": [

"Entrega rápida y bien embalado",

"La calidad supera las expectativas",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Tenetur Deserunt Lite",

"categorias": [

"hogar",

"impresoras",

"wifi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

897227,

951642,

3228347

],

"comentarios": [

"Excelente producto para el día a día",

"El diseño es moderno y atractivo",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Nemo Consequuntur X",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1787302,

2689840,

2796979

],

"comentarios": [

"Ideal para estudiantes",

"El diseño es moderno y atractivo",

"Recomendado 100%"

]

},

{

"nombre": "Tempora Expedita Max",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2957578,

1625792,

2335473,

1945254

],

"comentarios": [

"El diseño es moderno y atractivo",

"Rinde bien en tareas exigentes",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Error Fugiat Max",

"categorias": [

"streaming",

"perifericos",

"video"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

312965,

3721792,

2512638,

3171925

],

"comentarios": [

"Fácil de usar y configurar",

"Perfecto para oficina y hogar",

"La calidad supera las expectativas"

]

},

{

"nombre": "Molestiae Ducimus X",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

1432178,

201582,

2500380,

2767616

],

"comentarios": [

"Perfecto para oficina y hogar",

"Muy útil y práctico",

"Excelente producto para el día a día"

]

},

{

"nombre": "Quaerat Non Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

660678,

1095523

],

"comentarios": [

"Perfecto para oficina y hogar",

"Entrega rápida y bien embalado",

"Muy útil y práctico"

]

},

{

"nombre": "Laboriosam Suscipit Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"1080p",

"usb",

"streamer"

],

"precios": [

2080575,

3507788

],

"comentarios": [

"La calidad supera las expectativas",

"Ideal para estudiantes",

"Excelente producto para el día a día"

]

},

{

"nombre": "Autem Deserunt Max",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

1281763,

1639582,

1387264

],

"comentarios": [

"Excelente producto para el día a día",

"El diseño es moderno y atractivo",

"Fácil de usar y configurar"

]

},

{

"nombre": "Corrupti Ducimus Pro",

"categorias": [

"tecnologia",

"computadores",

"gaming"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

2983335,

3664382,

2987156,

2042625

],

"comentarios": [

"Entrega rápida y bien embalado",

"La calidad supera las expectativas",

"Recomendado 100%"

]

},

{

"nombre": "Deleniti Distinctio Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

3570539,

1770078,

2475940,

366413

],

"comentarios": [

"Recomendado 100%",

"El diseño es moderno y atractivo",

"Excelente producto para el día a día"

]

},

{

"nombre": "Deserunt Odio Plus",

"categorias": [

"monitores",

"gaming",

"hdmi"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

3074761,

3615843,

1004699

],

"comentarios": [

"Muy útil y práctico",

"Fácil de usar y configurar",

"Perfecto para oficina y hogar"

]

},

{

"nombre": "Distinctio Voluptatem Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

1882195,

3242401,

2013825,

880972

],

"comentarios": [

"Entrega rápida y bien embalado",

"Fácil de usar y configurar",

"Rinde bien en tareas exigentes"

]

},

{

"nombre": "Fugiat Ipsa Plus",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"gamer",

"switch rojo",

"compacto"

],

"precios": [

1318646,

2376087,

3561568,

2421449

],

"comentarios": [

"La calidad supera las expectativas",

"El diseño es moderno y atractivo",

"Excelente producto para el día a día"

]

},

{

"nombre": "Beatae Libero Plus",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

3543744,

1691175,

2137206,

3103378

],

"comentarios": [

"Ideal para estudiantes",

"Rinde bien en tareas exigentes",

"El diseño es moderno y atractivo"

]

},

{

"nombre": "Inventore Excepturi Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"bluetooth",

"cancelacion de ruido",

"premium"

],

"precios": [

1375245,

1536694,

469144

],

"comentarios": [

"El diseño es moderno y atractivo",

"Recomendado 100%",

"Excelente producto para el día a día"

]

},

{

"nombre": "Distinctio Optio Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

644342,

1983304,

1592318

],

"comentarios": [

"Fácil de usar y configurar",

"Muy útil y práctico",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Eligendi Numquam Plus",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

3566617,

466339

],

"comentarios": [

"El diseño es moderno y atractivo",

"Muy útil y práctico",

"La calidad supera las expectativas"

]

},

{

"nombre": "Iure Possimus Pro",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"pantalla grande",

"liviana",

"android"

],

"precios": [

1488917,

821619

],

"comentarios": [

"El diseño es moderno y atractivo",

"Fácil de usar y configurar",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Blanditiis Optio Plus",

"categorias": [

"tecnologia",

"audio",

"inalambrico"

],

"etiquetas": [

"doble banda",

"red",

"estable"

],

"precios": [

232375,

2201783,

1090570,

1366979

],

"comentarios": [

"Muy útil y práctico",

"La calidad supera las expectativas",

"Entrega rápida y bien embalado"

]

},

{

"nombre": "Quasi Laudantium Lite",

"categorias": [

"almacenamiento",

"ssd",

"nvme"

],

"etiquetas": [

"nvme",

"rapido",

"eficiente"

],

"precios": [

2050227,

2364854,

267812,

3351449

],

"comentarios": [

"Ideal para estudiantes",

"Fácil de usar y configurar",

"Muy útil y práctico"

]

},

{

"nombre": "Nulla Architecto Lite",

"categorias": [

"perifericos",

"oficina",

"ergonomia"

],

"etiquetas": [

"hdmi",

"curvo",

"ultrawide"

],

"precios": [

859983,

2264011

],

"comentarios": [

"Entrega rápida y bien embalado",

"Ideal para estudiantes",

"Excelente producto para el día a día"

]

},

{

"nombre": "Quidem Aut Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"ergonomico",

"inalambrico",

"oficina"

],

"precios": [

2666870,

2340561,

745506,

1507994

],

"comentarios": [

"Perfecto para oficina y hogar",

"La calidad supera las expectativas",

"Fácil de usar y configurar"

]

},

{

"nombre": "Deserunt Libero Pro",

"categorias": [

"movilidad",

"tablets",

"android"

],

"etiquetas": [

"wifi",

"economica",

"facil uso"

],

"precios": [

2098213,

447237,

510674,

1957354

],

"comentarios": [

"Ideal para estudiantes",

"Fácil de usar y configurar",

"Recomendado 100%"

]

}

]);
```
## :page_facing_up:Taller de MongoDB: Arrays y Operadores

  



  

### Nivel 1:smile:Básico – Consultas directas con arrays

  

 #### 1. Buscar productos que tengan la categoría `"gaming"`

db.productos.find({categorias:/gaming/});

  #### 2. Buscar productos que contengan `"ssd"` en sus etiquetas

db.productos.find({etiquetas:/ssd/});

 #### 3. Buscar productos que tengan el array exacto `["rgb", "ssd", "16gb"]`

db.productos.find({etiquetas:["rgb", "ssd", "16gb"]});

 #### 4. Buscar productos que tengan **exactamente 3 etiquetas**

db.productos.find({etiquetas:{$size:3}});

 #### 5. Buscar productos que tengan el segundo precio mayor a 2'000.000

db.productos.find({"precios.1":{$gt: 2000000}});

 #### 6. Buscar productos donde `"facil uso"` esté presente en etiquetas

db.productos.find({etiquetas:"facil uso"});

#### 7. Buscar productos que tengan `"streaming"` en categorías

db.productos.find({categorias:"streaming"});

#### 8. Buscar productos con el nombre que contenga `"Pro"`

db.productos.find({nombre:/Pro/});

  


  

### Nivel 2 :expressionless: Intermedio – Operadores de arrays y búsquedas combinadas

  

#### 1. Buscar productos que contengan `"ssd"` **y** `"16gb"` en sus etiquetas

db.productos.find({etiquetas:{$all:["ssd", "16gb"]}});

#### 2. Buscar productos que tengan al menos un precio mayor a 3'000.000

db.productos.find({precios:{$elemMatch:{$gt:3000000}}});

#### 3. Buscar productos con un precio entre 2'000.000 y 3'000.000

db.productos.find({precios:{$elemMatch:{$gte:2000000, $lte:3000000}}});

#### 4. Buscar productos donde la **primera categoría** sea `"tecnologia"`

db.productos.find({"categorias.0":"tecnologia"});

#### 5. Buscar productos con precios que tengan exactamente 4 valores

db.productos.find({precios:{$size:4}});

#### 6. Buscar productos donde una de las etiquetas sea `"gamer"`

db.productos.find({etiquetas:"gamer"});

#### 7. Buscar productos con el nombre que termine en `"Max"`

db.productos.find({nombre:/Max$/});

#### 8. Buscar productos con la etiqueta `"bluetooth"` y categoría `"audio"`

db.productos.find({etiquetas:"bluetooth", categorias:"audio"});

#### 9. Buscar productos con `"android"` tanto en categorías como etiquetas

db.productos.find({categorias:"android", etiquetas:"android"});

#### 10. Buscar productos donde uno de los comentarios sea exactamente `"Recomendado 100%"`

db.productos.find({comentarios:"Recomendado 100%"});

#### 11. Buscar productos con más de un precio menor a 1'000.000

  

#### 12. Buscar productos donde `"streamer"` esté en etiquetas

db.productos.find({etiquetas:"streamer"});

  


  

### Nivel 3 :fearful: Avanzado – Regex en arrays

  

#### 1. Buscar productos con comentarios que empiecen con `"Excelente"`

db.productos.find({comentarios:{$regex:"^Excelente"}});

#### 2. Buscar productos con etiquetas que contengan palabras que terminan en `"ico"`

db.productos.find({etiquetas:{$regex:"ico$"}});

#### 3. Buscar productos con comentarios que contengan la palabra `"fácil"` (insensible a mayúsculas)

db.productos.find({comentarios:{$regex:"fácil", $options:"i"}});

#### 4. Buscar productos con etiquetas que empiecen por `"c"`

db.productos.find({etiquetas:{$regex:"^c"}});

#### 5. Buscar productos con comentarios que contengan la palabra `"hogar"`

db.productos.find({comentarios:{$regex:"hogar"}});

#### 6. Buscar productos con alguna etiqueta que tenga doble vocal

db.productos.find({etiquetas:{$regex:"([aeiou])\\1", $options:"i"}});

#### 7. Buscar productos con comentarios que tengan una palabra de 10 letras

db.productos.find({comentarios:{$regex:"w{10}"}});

#### 8. Buscar productos con etiquetas que empiecen con `"s"` y tengan al menos 5 caracteres

db.productos.find({etiquetas:{$regex:"^s.{4,}"}});

#### 9. Buscar productos con comentarios que contengan signos de puntuación

db.productos.find({comentarios:{$regex:"[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]"}});

#### 10. Buscar productos con etiquetas donde haya palabras compuestas (`\b\w+-\w+\b`)

db.productos.find({etiquetas:{$regex:"\\b\\w+-\\w+\\b"}});

#### ------

  

 ##  Nivel 4:smiling_imp: Desafíos Combinados (Difíciles)

  

### 1. Buscar productos con precios entre 1'500.000 y 3'000.000, y que tengan `"ssd"` como etiqueta

db.productos.find({

precios: {$elemMatch: {$gte: 1500000, $lte: 3000000}},

etiquetas: "ssd"

});

#### 2. Buscar productos con `"wifi"` en etiquetas y al menos un comentario que contenga `"rápida"`

db.productos.find({

etiquetas: "wifi",

comentarios: {$regex: "rápida"}

});

#### 3. Buscar productos con más de 3 precios y la palabra `"moderno"` en los comentarios

  

#### 4. Buscar productos con el nombre que tenga exactamente 3 palabras

db.productos.find({

nombre: {$regex: "(.*\\s.*){2}"}

});

#### 5. Buscar productos con categorías `"audio"` o `"almacenamiento"`

db.productos.find({

$or: [

{categorias: "audio"},

{categorias: "almacenamiento"}

]

});

#### 6. Buscar productos donde el primer comentario empiece con "Ideal"

db.productos.find({

"comentarios.0": {$regex: "^Ideal"}

});

#### 7. Buscar productos donde haya una etiqueta que incluya "ruido"

db.productos.find({

etiquetas: {$regex: "ruido"}

});

#### 8. Buscar productos que tengan `"economica"` como etiqueta pero **no** `"ssd"`

db.productos.find({

etiquetas: {

$in: ["economica"],

$nin: ["ssd"]

}

});

#### 9. Buscar productos con al menos dos etiquetas que empiecen con vocal

  

#### 10. Buscar productos donde **todas** las etiquetas contengan solo letras minúsculas

db.productos.find({

etiquetas: {

$not: {

$elemMatch: { $regex: "[A-Z]" }

}

}

});
```