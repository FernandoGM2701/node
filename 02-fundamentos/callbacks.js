/*setTimeout( () => {
    return console.log("Llamando callback aja");
}, 2000);*/

const getUserByID = ( id, callback ) => {
    
    const user = {
        id: id,
        name: "Fernando" 
    }

    setTimeout( () => {
        callback(user);
    }, 1500);

}

getUserByID( 10 , (usuario) => {
    console.log(usuario.id);
    console.log(usuario.name.toUpperCase() ); 
} );