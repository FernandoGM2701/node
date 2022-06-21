const employees = [
    {
        id: 1,
        name: "Fernando"
    },
    {
        id: 2,
        name: "Alberto"
    },
    {
        id: 3,
        name: "Joaquin"
    }
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    }

];

const getEmployee = (id) => {

    return new Promise( ( resolve, reject ) =>{

        const employee = employees.find( (element) =>{
            return element.id === id;
        })?.name;

        (employee) ? resolve(employee) : reject(`Empleado con id ${id} no existe`);
    });
}

const getSalary = (id) => {

    return new Promise( (resolve, reject) => {

        const salary = salaries.find( (element) => {
            return element.id === id;
        })?.salary;

        (salary) ? resolve(salary) : reject(`El salario con id: ${id} no existe`); 
    });
}

const getInfoUser = async (id) =>{

    try {
        const empleado = await getEmployee(id);
        const salario = await getSalary(id);
        return `El empleado es: ${empleado} y su salario es: ${salario}`;

    } catch (error) {
        throw error;
    }

   
}

const id = 3;

getInfoUser(id)
    .then( msg => console.log(msg) )
    .catch( err => console.log(err) );

