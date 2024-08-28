window.addEventListener("load", function () {

    // Variables de entrada y salida de texto
    let inputTexto = document.querySelector(".textoEntrada");
    let outputTexto = document.querySelector(".textoSalida");

    // Variables para botones de acciones
    let botonEncriptar = document.querySelector("#encriptar");
    let botonDesencriptar = document.querySelector("#desencriptar");
    let botonCopiar = document.querySelector("#copiar");

    // Elementos para activar/desactivar según el estado del texto
    let estadoInactivo = document.querySelector(".sinTexto");
    let estadoActivo = document.querySelector(".conTexto");

    // Evento de click para encriptar texto
    botonEncriptar.addEventListener("click", function () {
        estadoInactivo.style.display = "none";
        estadoActivo.style.display = "flex";

        let textoModificado = aplicarEncriptacion();
        outputTexto.value = textoModificado;
    });

    // Evento de click para desencriptar texto
    botonDesencriptar.addEventListener("click", function () {
        let textoModificado = aplicarDesencriptacion();
        outputTexto.value = textoModificado;
    });

    // Evento de click para copiar texto al portapapeles
    botonCopiar.addEventListener("click", copiarAlPortapapeles);

    // Función para encriptar el texto
    function aplicarEncriptacion() {
        let textoLimpio = normalizarTexto(inputTexto.value);
        let textoCifrado = textoLimpio.replaceAll("e", "enter")
                                      .replaceAll("i", "imes")
                                      .replaceAll("a", "ai")
                                      .replaceAll("o", "ober")
                                      .replaceAll("u", "ufat");
        return textoCifrado;
    }

    // Función para desencriptar el texto
    function aplicarDesencriptacion() {
        let textoParaDesencriptar = inputTexto.value;
        let textoDescifrado = textoParaDesencriptar.replaceAll("enter", "e")
                                                   .replaceAll("imes", "i")
                                                   .replaceAll("ai", "a")
                                                   .replaceAll("ober", "o")
                                                   .replaceAll("ufat", "u");
        return textoDescifrado;
    }

    // Función para copiar el texto en el portapapeles
    function copiarAlPortapapeles() {
        outputTexto.select();
        document.execCommand("copy");
        inputTexto.value = outputTexto.value;
    }

    // Función para limpiar y normalizar el texto de entrada
    function normalizarTexto(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

});
