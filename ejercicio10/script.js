// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 10: Validar contrasena fuerte usando expresiones regulares (Aedo)

document.addEventListener("DOMContentLoaded", () => {

    const passwordInput = document.getElementById("password");
    const mensaje = document.getElementById("mensaje");

    // regex: minimo 8 caracteres, 1 mayuscula, 1 minuscula, 1 numero
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    passwordInput.addEventListener("keyup", () => {

        const valor = passwordInput.value;

        if (regex.test(valor)) {
            mensaje.textContent = "Contrasena valida";
            mensaje.className = "msg valido";
        } else {
            mensaje.textContent = "Contrasena invalida. Debe tener minimo 8 caracteres, 1 mayuscula, 1 minuscula y 1 numero.";
            mensaje.className = "msg invalido";
        }
    });

});
