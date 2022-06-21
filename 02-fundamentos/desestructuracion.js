const equipo = {
    nombre: "Deportivo Municipal",
    sobrenombre: "Echa Muni",
    campeonatos: "5 campeonatos",
    /*getNombre: function() {
        return `${this.nombre} ${this.sobrenombre} ${this.campeonatos}`
    }*/
    getNombre() {
        //return `${this.nombre}, ${this.sobrenombre}, ${this.campeonatos}`
        return "Ejemplo por favor"
    }

}

//console.log( equipo.getNombre() );

/*const nombre_equipo = equipo.nombre;
const sobrenombre_equipo = equipo.sobrenombre;
const campeonatos_equipo = equipo.campeonatos;
const getNombre_equipo = equipo.getNombre();*/

//const { nombre, sobrenombre, campeonatos, getNombre } = equipo;

//console.log(nombre, sobrenombre, campeonatos);
//console.log( equipo.getNombre() );
//console.log( getNombre() );
//console.log(getNombre_equipo);

function imprimirEquipo(  { nombre, sobrenombre, campeonatos } ){
    
    console.log(nombre, sobrenombre, campeonatos);
}

//imprimirEquipo(equipo);

const equipos = [ "Municipal", "PSG", "Real Madrid" ];

/*for (let i=0; i < equipos.length; i++){
    console.log(`Los equipos son: ${equipos[i]}`);
}*/

const [pTeam, sTeam, tTeam] = equipos;

console.log(`Los equipos son: ${pTeam}, ${sTeam}, ${tTeam}`);








