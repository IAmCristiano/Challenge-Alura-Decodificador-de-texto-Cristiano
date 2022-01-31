
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

    const textoDigitado = document.getElementById("entrada-texto");

    const cliqueCriptografar = document.getElementById("botao-criptografar");

    const cliqueDescriptografar = document.getElementById("botao-descriptografar");

    const cliqueCopiar = document.getElementById("botao-copiar");

    const cliqueLimparTextoDigitado = document.getElementById("botao-limpar-entrada-texto");

    const cliqueLimparTextoPronto = document.getElementById("botao-limpar-saida-texto");

    const textoPronto = document.getElementById("saida-texto");

    textoDigitado.focus();

    function criptografar() {
        
        var fraseCriptografar = textoDigitado.value;              
        
        textoCriptografado = fraseCriptografar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        
        textoPronto.value = textoCriptografado;
                
    }     
        
    function descriptografar() {
        
        var fraseDescriptografar = textoDigitado.value;              
        
        textoDescriptografado = fraseDescriptografar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        
        textoPronto.value = textoDescriptografado;          
                
    }

    cliqueCriptografar.addEventListener("click", criptografar);
    
    cliqueDescriptografar.addEventListener("click", descriptografar);

    cliqueCopiar.addEventListener("click", function copiar() {
    navigator.clipboard.writeText(document.getElementById("saida-texto").value)

    });

    cliqueLimparTextoDigitado.addEventListener("click", function limpar() {
    document.getElementById("entrada-texto").value = "";

    textoDigitado.focus();

    });

    cliqueLimparTextoPronto.addEventListener("click", function limpar2() {
    document.getElementById("saida-texto").value = "";

    });
