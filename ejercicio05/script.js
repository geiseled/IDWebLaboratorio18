// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 4: Usar fetch con async/await para obtener el usuario 10 y mostrar sus datos en consola.

document.addEventListener("DOMContentLoaded", () => {

    async function cargarUsuario() { // funcion asincronica que obtiene los datos del usuario 10
        try {
            // hacer la peticion al API
            const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
            // convertir la respuesta a JSON
            const data = await response.json();
            // mostrar los datos solicitados
            console.log("Nombre:", data.name);
            console.log("Usuario:", data.username);
            console.log("Email:", data.email);
        } catch (error) {
            // error si la peticion falla
            console.log("Error en la solicitud:", error);
        }
    }
    // ejecutar la funcion
    cargarUsuario();
});
