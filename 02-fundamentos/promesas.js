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

    /*const promise = new Promise( ( resolve, reject ) =>{

        const employee = employees.find( (element) =>{
            return element.id === id;
        })?.name;

        if (employee){
            resolve (employee);
        } else{
            reject(`Empleado con id ${id} no existe`);
        }
    });

    return promise;
    }
    */
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

const id = 1;

/*getSalary(id)
    .then( salary => console.log(salary))
    .catch( err => console.log(err));

getEmployee(id)
    .then( employee => console.log(employee) )
    .catch( err => console.log(err)); */

/*getEmployee(id)
    .then( employee => {

        getSalary(id)
            .then( salary => {
                console.log(`El empleado: ${employee} cuenta con el salario de: ${salary}`);
            })
            .catch( err => console.log(err));
    })    
    .catch(err => console.log(err));
*/


getEmployee(id)
    .then( employee => {
        nombre = employee;
        return getSalary(id);
    })
    .then( salary => {
        return console.log(`El empleado: ${nombre} cuenta con el salario de: ${salary}`)
    })
    .catch( err => console.log(err));
