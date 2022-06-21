const {multiplicar} = require("./helpers/multiplicar");

console.clear();

const [,,arg3="base = 5"] = process.argv;

const prueba = arg3.split("=");
console.log(arg3);
console.log(prueba);

//const base = 100;

// multiplicar(base)
//     .then( nombreArchivo => console.log(nombreArchivo, "creado"))
//     .catch( err => console.log(err));

    
