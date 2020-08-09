const botao = {
    get elemento() {
        return this._elemento;
    },
    set elemento(valor) {
        this._elemento = document.createElement(valor);
    }
}

botao.elemento = "button";
console.log(botao.elemento);

class Link {
    constructor(texto, cor) {
        this.texto = texto;
        this.cor = cor;
    }
    get elemento() {
        const link = document.createElement("a");

        link.innerText = this.texto;
        link.style.color = this.cor;

        return link;
    }
}

const linkAzul = new Link("Clique", "#26F");
console.log(linkAzul.elemento);