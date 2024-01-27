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

    function encriptarTexto() {
        const textoOriginal = document.getElementById("texto").value.toLowerCase();
        const textoEncriptado = textoOriginal.replace(/e/g, "enter")
                                             .replace(/i/g, "imes")
                                             .replace(/a/g, "ai")
                                             .replace(/o/g, "ober")
                                             .replace(/u/g, "ufat");
        mostrarResultado(textoEncriptado);
    }

    function desencriptarTexto() {
        const textoEncriptado = document.getElementById("texto").value.toLowerCase();
        const textoOriginal = textoEncriptado.replace(/ufat/g, "u")
                                            .replace(/ober/g, "o")
                                            .replace(/ai/g, "a")
                                            .replace(/imes/g, "i")
                                            .replace(/enter/g, "e");
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
