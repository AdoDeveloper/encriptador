document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("encriptar-btn").addEventListener("click", encriptar);
    document.getElementById("desencriptar-btn").addEventListener("click", desencriptar);
    document.getElementById("copiar-btn").addEventListener("click", copiar);
});

function encriptar() {
    const textoOriginal = document.getElementById("texto").value.toLowerCase();
    const textoEncriptado = encriptarTexto(textoOriginal);
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const textoEncriptado = document.getElementById("texto").value.toLowerCase();
    const textoOriginal = desencriptarTexto(textoEncriptado);
    mostrarResultado(textoOriginal);
}

function copiar() {
    const textoEncriptado = document.getElementById("texto-encriptado").innerText;
    copiarTexto(textoEncriptado);
}

function encriptarTexto(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto.replace(/ufat/g, "u")
                .replace(/ober/g, "o")
                .replace(/ai/g, "a")
                .replace(/imes/g, "i")
                .replace(/enter/g, "e");
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



function copiarTexto(texto) {
    const tempInput = document.createElement("input");
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Texto copiado al portapapeles.");
}
