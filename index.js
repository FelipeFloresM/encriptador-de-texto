function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let persona = document.getElementById("persona");

    let textoCifrado = texto
                        .replace(/a/gi, "ara")
                        .replace(/e/gi, "estyl")
                        .replace(/i/gi, "img")
                        .replace(/o/gi, "oso")
                        .replace(/u/gi, "uwu");
                        
    if (texto.length !=0){
        document.getElementById("texto").value= textoCifrado;
        tituloMensaje.textContent= "Texto encriptado con éxito";
        parrafo.textContent = "";
        persona.src = "./img/encriptado.png";
    } else {
        persona.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Favor ingresar un texto");
    }
}


function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let persona = document.getElementById("persona");

    let textoCifrado = texto
        .replace(/ara/gi, "a")
        .replace(/estyl/gi, "e")
        .replace(/img/gi, "i")
        .replace(/oso/gi, "o")
        .replace(/uwu/gi, "u");

        if (texto.length !=0){
            document.getElementById("texto").value= textoCifrado;
            tituloMensaje.textContent= "Texto desencriptado con éxito";
            parrafo.textContent = "";
            persona.src = "./img/desencriptado.png";
} else {
    persona.src = "./img/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Favor ingresar un texto");
    }
}