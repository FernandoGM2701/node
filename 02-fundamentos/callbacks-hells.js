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

const getEmployee = ( id, callback ) => {

    const employee = employees.find( (element) =>{
        return element.id === id;
    })?.name;

    if (employee){
        callback(null, employee);
    } else{
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalary = ( id, callback ) => {

    const salary = salaries.find( (element) =>{
        return element.id === id;
    })?.salary

    if (salary){
        callback(null, salary);
    } else{
        callback(`El salario del usuario con id: ${id} no existe`);
    }
}

const id = 4;


getEmployee( id, (err, employee) => {
    if(err){
        console.log("ERROR!!!");
        return console.log(err);
    }

    getSalary( id, (err, salary) => {
        if(err){
            return console.log(err)
        }
        console.log(`El empleado es: ${employee}, y tiene un salario de: ${salary}`);
    });
    
});