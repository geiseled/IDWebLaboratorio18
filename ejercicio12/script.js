// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 12: Quitar etiquetas HTML usando expresiones regulares.

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnLimpiar");
    boton.addEventListener("click", () => {

        // obtener texto ingresado
        const textoOriginal = document.getElementById("entrada").value;
        // expresion regular para eliminar etiquetas HTML
        const regex = /<[^>]+>/g; //busca todas las coincidencias
        // aplicar la expresion
        const textoLimpio = textoOriginal.replace(regex, "")
        // crear el div dinamico
        const divResultado = document.createElement("div");
        divResultado.classList.add("resultado-box");
        // insertar el texto limpio
        divResultado.textContent = textoLimpio;
        // agregar al body
        document.body.appendChild(divResultado);
    });
});
