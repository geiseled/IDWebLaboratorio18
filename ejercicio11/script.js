// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 11: Buscar URLs seguras usando expresiones regulares y crear dinamicamente
// un div para mostrar los resultados.

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnBuscar"); // boton que activa la busqueda

    boton.addEventListener("click", () => {

        const texto = document.getElementById("textoEntrada").value; // texto del usuario

        // regex para encontrar URLs seguras https://
        const regex = /https:\/\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=-]+/g;

        // buscar coincidencias
        const coincidencias = texto.match(regex);

        // eliminar un resultado previo si existe
        const previo = document.querySelector(".resultado-box");
        if (previo) previo.remove();

        // crear dinamicamente el cuadro de resultados
        const resultadoDiv = document.createElement("div");
        resultadoDiv.classList.add("resultado-box");

        if (coincidencias) {
            resultadoDiv.innerHTML = `
                <p><strong>URLs seguras encontradas:</strong></p>
                <ul>
                    ${coincidencias.map(url => `<li>${url}</li>`).join("")}
                </ul>
            `;
        } else {
            resultadoDiv.innerHTML = `<p><strong>No se encontraron URLs seguras.</strong></p>`;
        }

        // agregar el div debajo del contenedor
        document.body.appendChild(resultadoDiv);
    });

});
