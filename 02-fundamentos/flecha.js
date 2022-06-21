/*function sumar( a, b ) {
    return a + b;
}*/

/*const sumar = (a, b) => {
    return a + b;
}*/

const sumar = (a, b) => a + b;

function saludar1() {
    return "Función clásica";
}

const saludar2 = () => {
    return "Función flecha con return";
}

const saludar3 = () => "Función flecha sin return";


console.log(sumar (51, 10));
console.log( `Las funciones: ${saludar1()}, ${saludar2()} y ${saludar3()}` );