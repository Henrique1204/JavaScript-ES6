function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(4));

function calcularImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(calcularImc(80, 1.80));
console.log(calcularImc(60, 1.70));

function corFavorita(cor) {
    if ( cor === "Azul") {
        return "Bora pra piscina então";
    } else if ( cor === "Verde") {
        return "Bora pra selva então";
    } else {
        return "Bora ir assistir filme em preto e branco";
    }
}

console.log(corFavorita("Azul"));

addEventListener("click", function () { console.log("Oi")});

function terceiraIdade(idade) {
    if (idade <= 30) {
        console.log("Tá na primeira");
    } else if (idade <= 60) {
        console.log("Tá na segunda");
    } else {
        console.log("Tá na terceira");
    }
}

terceiraIdade(60);

function faltaVisitar(paisesVisitados) {
    let paisesTotal = 193;
    return `Faltam ${193 - paisesVisitados} países para visitar`;
}

console.log(faltaVisitar(7));

function verificarVerdadeiro(valor) {
    return !!valor;
}

console.log(verificarVerdadeiro(" "));

function calcularPerimetro(lado) {
    return lado * 4;
}

console.log(calcularPerimetro(10));

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Paulo Henrique", "Silva Souza"));

function par(valor) {
    return (valor % 2 == 0) ? "É par" : "Não é par";
}

console.log(par(4));

function tipoParametro(valor) {
    return typeof valor;
}

console.log(tipoParametro(""));

addEventListener("scroll", () => {
    console.log(nomeCompleto("Paulo Henrique", "Silva Souza"));
});