// Função construtora + prototype
function Botao(texto, fundo) {
    this.texto = texto,
    this.fundo = fundo
}

Botao.prototype.element = function() {
    const elemento = document.createElement("button");

    elemento.innerText = this.texto;
    elemento.style.backgroundColor = this.fundo;

    return elemento;
}

const botaoAzul = new Botao("Comprar", "#26F");
console.log(botaoAzul.element());

// class + syntactical sugar
class Link {
    constructor(texto, cor) {
        this.texto = texto,
        this.cor = cor
    }
    elemento () {
        const elemento = document.createElement("a");

        elemento.innerText = this.texto;
        elemento.style.color = this.cor;

        return elemento;
    }
    adicionarPara (alvo) {
        const elementoAlvo = document.querySelector(alvo);
        elementoAlvo.appendChild(this.elemento());
    }
}

const linkBranco = new Link("Sobre", "#FFF");
console.log(linkBranco.elemento());

class Box {
    constructor(opcoes) {
        this.opcoes = opcoes
    }
    static elemento (objeto) {
        const elemento = document.createElement("div");

        Object.keys(objeto.opcoes).forEach((chave) => {
            elemento.style[chave] = objeto.opcoes[chave];
        });

        return elemento;
    }
    adicionarPara (alvo) {
        const elementoAlvo = document.querySelector(alvo);

        elementoAlvo.appendChild(Box.elemento(this));
    }
}

const estilo = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    color: "#FFF",
    backgroundColor: "#26F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const boxAzul = new Box(estilo);
console.log(Box.elemento(boxAzul));

boxAzul.adicionarPara("body");
linkBranco.adicionarPara("div");