export default class ValidarCPF {
    constructor(elemento) {
        this.elemento = elemento;
    }

    limpar(cpf) {
        return cpf.replace(/\D/g, "");
    }

    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }

    formatar(cpf) {
        return this.construir(this.limpar(cpf));
    }

    validar(cpf) {
        // Expressão para selecionar um número de CPF
        const matchCPF = cpf.match(/(?:\d{3}[\s.-]?){3}\d{2}/g);

        // Retorna falso caso o valor passado seja menor ou maior que o valor selecionado
        return (matchCPF && matchCPF[0] === cpf);
    }

    validarNaMudanca(cpfElemento) {
        const cpf = cpfElemento.value;

        if (this.validar(cpf)) {
            cpfElemento.nextElementSibling.classList.remove("ativo");
            cpfElemento.classList.remove("erro");
            cpfElemento.classList.add("valido");

            setTimeout(() => {
                cpfElemento.classList.remove("valido");
            }, 2000)

            return this.formatar(cpf);
        } else {
            cpfElemento.classList.remove("valido");
            cpfElemento.classList.add("erro");
            cpfElemento.nextElementSibling.classList.add("ativo");
        }
    }

    addEvento() {
        this.elemento.addEventListener("change", () => {
            this.validarNaMudanca(this.elemento);
        });
    }

    addErroSpan() {
        const elementoErro = document.createElement("span");

        elementoErro.classList.add("erro-text");
        elementoErro.innerText = "CPF inválido";

        this.elemento.parentNode.appendChild(elementoErro);
    }

    iniciar() {
        this.addEvento();
        this.addErroSpan();

        return this;
    }
}