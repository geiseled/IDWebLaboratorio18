// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 7: Crear un boton que obtenga datos del usuario 2 usando fetch (promesas)
// y mostrar nombre, email y ciudad.

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnCargar"); // boton que realiza la peticion
    
    boton.addEventListener("click", () => {
        // hacer la peticion al API para obtener el usuario 2
        fetch("https://jsonplaceholder.typicode.com/users/2")
            .then(response => response.json()) // convertir a JSON
            .then(data => {
                // crear un div dinamico para mostrar los datos
                const resultadoDiv = document.createElement("div");
                resultadoDiv.classList.add("resultado-box");
                // insertar contenido HTML formateado
                resultadoDiv.innerHTML = `
                    <p><strong>Nombre:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Ciudad:</strong> ${data.address.city}</p>
                `;
                // agregar el div al body
                document.body.appendChild(resultadoDiv);
            })
            .catch(error => {
                console.log("Error en la solicitud:", error);
            });
    });
});
