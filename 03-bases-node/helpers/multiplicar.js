const fs = require("fs");

// const multiplicar = (base) => {
//   return new Promise((resolve, reject) => {
//     let resultado;
//     let total = ``;

//     console.log(`La tabla de multiplicar del ${base} es: `);

//     for (let i = 1; i < 11; i++) {
//       resultado = base * i;
//       total = total + `${base} x ${i} = ${resultado}\n`;
//     }

//     resolve(total);

//     fs.writeFileSync(`tabla-del-${base}`, total);
//     console.log("El archivo se guardó con éxito");
//   });
// };

const multiplicar = async (base) => {
  try {
    let resultado;
    let total = ``;

    console.log(`La tabla de multiplicar del ${base} es: `);

    for (let i = 1; i < 11; i++) {
      resultado = base * i;
      total = total + `${base} x ${i} = ${resultado}\n`;
    }

    console.log(total);

    fs.writeFileSync(`tabla-del-${base}.txt`, total);
    console.log("El archivo se guardó con éxito");

    return `tabla-del-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { multiplicar };
