// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 5: Obtener todos los usuarios con fetch (promesas) y mostrar solo los nombres usando forEach.

document.addEventListener("DOMContentLoaded", () => {

    function cargarUsuarios() { // funcion que obtiene todos los usuarios
        fetch("https://jsonplaceholder.typicode.com/users") // realizar la peticion al API
            .then(response => response.json()) // convertir a JSON
            .then(data => {
                // data es un arreglo, se puede recorrer con forEach
                console.log("Lista de nombres:");
                data.forEach(usuario => {
                    console.log(usuario.name);
                });
            })
            .catch(error => {
                console.log("Error en la solicitud:", error);
            });
    }
    // ejecutar la funcion
    cargarUsuarios();
});
