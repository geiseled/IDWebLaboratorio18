// Modulo multiplicacionDivision.js
// Exportacion por defecto: multiplicar
// Exportacion nombrada: dividir (lanza error si b es cero)

export default function multiplicar(a, b) { //Exportacion por defecto
    return a * b;
}

export function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
