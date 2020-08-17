const cpfsLi = document.querySelectorAll(".cpf li");

const getInnerTextElementos = ([...elementos]) => {
    return elementos.map(item => item.innerText);
};

// Expressão para selecionar todos os cpfs - /(?:\d{3}[\s.-]?){3}[\s.-]?\d{2}/g
const limparCPF = (cpf) => {
    // /\D/g - seleciona tudo que não for digito
    return cpf.replace(/\D/g, "");
};

const construirCpfs = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCpfs = ([...cpfs]) => cpfs.map(limparCPF).map(construirCpfs);

const substituirCpfs = (elementosCpfs) => {
    const cpfs = getInnerTextElementos(elementosCpfs);
    const cpfsFormatados = formatarCpfs(cpfs);

    elementosCpfs.forEach((elemento, indice) => elemento.innerText = cpfsFormatados[indice]);
}

substituirCpfs(cpfsLi);