// Por questões de acessibilidade do teu site, talvez o usuário precise ditar o texto, neste caso o evento "keyup" não ativa, logo os dados não são coletados, uma forma de burlar isso é utilizando o "change", porém uma outra forma é usando "observe" e o "mutation" para verificar o "value" dos campo.
const contato = document.querySelector("#contato");
const dados = {};

function manipularKeyUp(evento) {
    const alvo = evento.target;
    dados[alvo.name] = alvo.value;
    const erro = alvo.nextElementSibling;

    if(!alvo.checkValidity()) {
        alvo.classList.add("invalido");
        erro.innerText = alvo.validationMessage;
        console.log("é");
    } else {
        erro.innerText = "";
        alvo.classList.remove("invalido");
    }
}

contato.addEventListener("keyup", manipularKeyUp);