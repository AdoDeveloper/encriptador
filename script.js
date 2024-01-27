$(document).ready(function(){
    $("#encriptar-btn").click(function(){
        ejecutarProceso(encriptarTexto);
    });
    $("#desencriptar-btn").click(function(){
        ejecutarProceso(desencriptarTexto);
    });

    $("#copiar-btn").click(copiarTexto);

    function ejecutarProceso(callback) {
        $("#loader").fadeIn(); // Mostrar el loader al hacer clic en los botones
        setTimeout(function(){
            callback();
            $("#loader").fadeOut(); // Ocultar el loader después de cierto tiempo
        }, 3000); // Tiempo de espera de 3 segundos
    }

    // Función para encriptar texto
    function encriptarTexto() {
        // Obtiene el valor del elemento de HTML con el id "texto" y lo convierte a minúsculas
        const textoOriginal = document.getElementById("texto").value.toLowerCase();
        
        // Realiza sustituciones para encriptar el texto:
        const textoEncriptado = textoOriginal
            .replace(/e/g, "enter")   // Reemplaza todas las letras "e" por "enter"
            .replace(/i/g, "imes")    // Reemplaza todas las letras "i" por "imes"
            .replace(/a/g, "ai")      // Reemplaza todas las letras "a" por "ai"
            .replace(/o/g, "ober")    // Reemplaza todas las letras "o" por "ober"
            .replace(/u/g, "ufat");   // Reemplaza todas las letras "u" por "ufat"
        
        // Muestra el resultado en algún lugar de la página web, probablemente a través de la función mostrarResultado()
        mostrarResultado(textoEncriptado);
    }

    // Función para desencriptar texto
    function desencriptarTexto() {
        // Obtiene el valor del elemento de HTML con el id "texto" y lo convierte a minúsculas
        const textoEncriptado = document.getElementById("texto").value.toLowerCase();
        
        // Realiza sustituciones para desencriptar el texto:
        const textoOriginal = textoEncriptado
            .replace(/ufat/g, "u")    // Reemplaza todas las ocurrencias de "ufat" por "u"
            .replace(/ober/g, "o")    // Reemplaza todas las ocurrencias de "ober" por "o"
            .replace(/ai/g, "a")      // Reemplaza todas las ocurrencias de "ai" por "a"
            .replace(/imes/g, "i")    // Reemplaza todas las ocurrencias de "imes" por "i"
            .replace(/enter/g, "e");  // Reemplaza todas las ocurrencias de "enter" por "e"
        
        // Muestra el resultado en algún lugar de la página web, probablemente a través de la función mostrarResultado()
        mostrarResultado(textoOriginal);
    }

    function mostrarResultado(resultado) {
        const textoOriginal = document.getElementById("texto").value.trim();
        const contenidoOriginal = document.getElementById("content");
        const textoEncriptado = document.getElementById("texto-encriptado");
        const copiarBtn = document.getElementById("copiar-btn");

        if (textoOriginal === "") {
            contenidoOriginal.style.display = "block";
            textoEncriptado.style.display = "none";
            copiarBtn.style.display = "none";
        } else {
            contenidoOriginal.style.display = "none";
            textoEncriptado.innerText = resultado;
            textoEncriptado.style.display = "block";
            copiarBtn.style.display = "block";
        }
    }

    function copiarTexto() {
        const textoEncriptado = document.getElementById("texto-encriptado").innerText;
        
        // Crear un elemento de entrada de texto oculto
        const tempInput = document.createElement("input");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-1000px";
        tempInput.value = textoEncriptado;
        document.body.appendChild(tempInput);
        
        // Seleccionar y copiar el texto
        tempInput.select();
        document.execCommand("copy");
        
        // Eliminar el elemento temporal
        document.body.removeChild(tempInput);
        
        alert("Texto copiado al portapapeles.");
    }
      
    
});
