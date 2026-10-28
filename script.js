
const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

const limite = 100;

// Detectar cuando el usuario escribe
texto.addEventListener("input", function () {

    // Contar los caracteres escritos
    let cantidad = texto.value.length;

    // Mostrar la cantidad
    contador.textContent = cantidad + " / " + limite + " caracteres";

    // Revisar si llegó al límite
    if (cantidad === limite) {
        texto.classList.add("limite");
    } else {
        texto.classList.remove("limite");
    }

});
