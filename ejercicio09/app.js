// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 9: Importar modulos y ejecutar operaciones matematicas

// multiplicar es la exportación por defecto, por eso se importa sin llaves, dividir es nombrada y va entre llaves
import multiplicar, { dividir } from "./multiplicacionDivision.js";

// sumar y restar son exportaciones nombradas, ambas deben importarse usando llaves
import { sumar, restar } from "./sumaResta.js";


document.addEventListener("DOMContentLoaded", () => {

    // valores usados en las operaciones
    const a = 12;
    const b = 4;
    const c = 0; // usado para probar la division con error

    console.log("--- Ejercicio 9: Sistema matematico modular ---");
    console.log("Valores iniciales:");
    console.log("a =", a, "b =", b, "c =", c);
    console.log("------------------------------------");

    // prueba suma
    console.log("SUMA ->", a, "+", b);
    const resultadoSuma = sumar(a, b);
    console.log("Resultado suma:", resultadoSuma);
    console.log("------------------------------------");

    // prueba resta
    console.log("RESTA ->", a, "-", b);
    const resultadoResta = restar(a, b);
    console.log("Resultado resta:", resultadoResta);
    console.log("------------------------------------");

    // prueba multiplicacion
    console.log("MULTIPLICACION ->", a, "*", b);
    const resultadoMultiplicacion = multiplicar(a, b);
    console.log("Resultado multiplicacion:", resultadoMultiplicacion);
    console.log("------------------------------------");

    // prueba division entre 0
    console.log("DIVISION ->", a, "/", c);
    try {
        const divisionError = dividir(a, c);
        console.log("Resultado division:", divisionError);
    } catch (e) {
        console.log("Error en division:", e.message);
    }
    console.log("------------------------------------");

    // prueba division valida
    console.log("DIVISION ->", a, "/", b);
    try {
        const divisionCorrecta = dividir(a, b);
        console.log("Resultado division:", divisionCorrecta);
    } catch (e) {
        console.log("Error en division:", e.message);
    }

});
