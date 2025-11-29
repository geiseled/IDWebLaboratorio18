// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 14: Detectar fechas en formato dd/mm/yyyy usando expresiones regulares.

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnProcesar"); // boton que ejecuta la regex
    boton.addEventListener("click", () => {

        const texto = document.getElementById("texto").value; // texto ingresado
        // regex para dd/mm/yyyy
        const regex = /\b(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}\b/g;
        const coincidencias = texto.match(regex) || [];
        // eliminar resultado previo si existe
        const previo = document.querySelector(".resultado-box");
        if (previo) previo.remove();
        // crear div de resultado
        const resultadoDiv = document.createElement("div");
        resultadoDiv.classList.add("resultado-box");
        // si no se encontro ninguna fecha
        if (coincidencias.length === 0) {
            resultadoDiv.innerHTML = "<p>No se encontraron fechas validas.</p>";
            document.body.appendChild(resultadoDiv);
            return;
        }

        // crear lista con las fechas encontradas
        const ul = document.createElement("ul");
        coincidencias.forEach(fecha => {
            const li = document.createElement("li");
            li.textContent = fecha;
            ul.appendChild(li);
        });
        resultadoDiv.innerHTML = "<strong>Fechas encontradas:</strong>";
        resultadoDiv.appendChild(ul);
        // agregar al body
        document.body.appendChild(resultadoDiv);
    });
});
