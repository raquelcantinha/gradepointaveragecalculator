function acao() {
    Nome();
    Calcular();
    Situacao();
    Imprimir();
}

function Nome() {
    var nome = document.getElementById("nomesobrenome").value;
    document.getElementById("saudacao").innerHTML = "Olá, " + nome + ".";
}

function Calcular() {

    var notaPrimeiroModulo = document.getElementById("primeiromodulo");
    var primeiromodulo = notaPrimeiroModulo.value;
    var notaPrimeiroModulo = parseFloat (primeiromodulo);
        
    var notaSegundoModulo = document.getElementById("segundomodulo");
    var segundomodulo = notaSegundoModulo.value;
    var notaSegundoModulo = parseFloat (segundomodulo);
        
    var notaTerceiroModulo = document.getElementById("terceiromodulo");
    var terceiromodulo = notaTerceiroModulo.value;
    var notaTerceiroModulo = parseFloat (terceiromodulo);
        
    var notaQuartoModulo = document.getElementById("quartomodulo");
    var quartomodulo = notaQuartoModulo.value;
    var notaQuartoModulo = parseFloat (quartomodulo);

    var notaFinal = (notaPrimeiroModulo + notaSegundoModulo + notaTerceiroModulo + notaQuartoModulo) / 4

    var mediaAnual = notaFinal.toFixed(1)


    document.getElementById("resultado").innerHTML = "Sua média final é <strong>" + mediaAnual + "</strong> .";

    var texto;
    if (notaFinal >= 7) {
    situacaoAcademica = "Sua situação acadêmica é de <strong>aprovação</strong>.";
    } else if (notaFinal < 7) {
    situacaoAcademica = "Sua situação acadêmica é de <strong>recuperação</strong>.";
    }

    document.getElementById("situacao").innerHTML = situacaoAcademica;
}