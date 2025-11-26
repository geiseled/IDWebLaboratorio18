// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 3: Usar fetch con promesas para obtener el usuario 10 y mostrar sus datos en consola.

document.addEventListener("DOMContentLoaded", () => {

    // funcion para obtener datos del usuario 10 usando fetch con promesas
    function cargarUsuario() {
        fetch("https://jsonplaceholder.typicode.com/users/10") // hacer la peticion al API
            .then(response => response.json()) // convertir a JSON
            .then(data => {
                // mostrar datos solicitados en consola
                console.log("Nombre:", data.name);
                console.log("Usuario:", data.username);
                console.log("Email:", data.email);
            })
            .catch(error => {
                console.log("Error en la solicitud:", error);
            });
    }
    // ejecutar la funcion al cargar la pagina
    cargarUsuario();
});
