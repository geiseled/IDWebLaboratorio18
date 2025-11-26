// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 6: Obtener todos los usuarios con fetch (async/await) y mostrar solo los nombres usando forEach.

document.addEventListener("DOMContentLoaded", () => {

    async function cargarUsuarios() { // funcion asincronica para obtener usuarios
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users"); // solicitar usuarios
            const data = await respuesta.json(); // convertir a JSON
            console.log("Lista de nombres:");
            // recorrer data con forEach
            data.forEach(usuario => { 
                console.log(usuario.name);
            });
        } catch (error) {
            console.log("Error en la solicitud:", error); // manejar error
        }
    }
    // ejecutar la funcion
    cargarUsuarios();
});
