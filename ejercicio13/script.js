// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 13: Dividir un texto en oraciones usando expresiones regulares.
// Ahora separa por punto, interrogacion, exclamacion y coma.

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnProcesar"); // boton que ejecuta la regex

    boton.addEventListener("click", () => {
        const texto = document.getElementById("texto").value; // texto ingresado
        // regex que divide el texto por ., ?, ! (uno o mas seguidos)
        const partes = texto.split(/[.!?]+/);
        // eliminar oraciones vacias y recortar espacios
        const oraciones = partes
            .map(o => o.trim())
            .filter(o => o !== "");
        // eliminar resultado previo si existe
        const previo = document.querySelector(".resultado-box");
        if (previo) previo.remove();
        // crear el div resultado
        const resultadoDiv = document.createElement("div");
        resultadoDiv.classList.add("resultado-box");
        // si no hay oraciones mostrar mensaje
        if (oraciones.length === 0) {
            resultadoDiv.innerHTML = "<p>No se encontraron oraciones.</p>";
            document.body.appendChild(resultadoDiv);
            return;
        }
        // monstrar oraciones encontradas
        const ol = document.createElement("ol");
        oraciones.forEach(oracion => {
            const li = document.createElement("li");
            li.textContent = oracion;
            ol.appendChild(li);
        });
        // titulo y agregar lista al div
        const titulo = document.createElement("p");
        titulo.innerHTML = "<strong>Oraciones encontradas:</strong>";
        resultadoDiv.appendChild(titulo);
        resultadoDiv.appendChild(ol);
        // agregar al body
        document.body.appendChild(resultadoDiv);
    });
});
