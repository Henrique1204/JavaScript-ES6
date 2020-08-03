function espera(texto) {
    console.log(`Este é o texto dentro da função | ${texto}`);
}

setTimeout(espera, 1000, "Esse texto é o argumento que vai na função");

const btn = document.querySelector("button");

btn.addEventListener("click", clicou);

function clicou(e) {
    e.preventDefault();

    // Dentro do setTimeOut o this faz referência ao window
    setTimeout(function() {
        console.log(this);
    }, 1000);

    // Arrow Function faz referência ao objeto pai de onde está servindo de callback, dessa forma ele vaza do setTimeOut e faz referência a "function clicou" que por sua vez faz referência ao "btn"
    setTimeout(() => {
        console.log(this);
    }, 1000);
}

// Mesmo guardando o intervalo dentro de uma variável a função ainda é executada
const intervalo = setInterval(espera, 500, "Esse texto é o argumento");

// clearInterval limpa o intervalo, no caso interrompe ele, para isso ele precisa receber o intervalo numa variável
setTimeout(() => {clearInterval(intervalo)}, 2000);

// Exercícios
setInterval(() => {document.body.classList.toggle("ativo")}, 2000);

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

let intervalo2;

iniciar.addEventListener("click", iniciarContagem);
pausar.addEventListener("click", pausarContagem);
pausar.addEventListener("dblclick", resetarContagem);

function iniciarContagem(evento) {
    evento.preventDefault();
    
    intervalo2 = setInterval(() => {
        tempo.innerText = +tempo.innerText + 1;
    }, 1000);

    this.setAttribute("disabled", "");
}

function pausarContagem(evento) {
    evento.preventDefault();
    clearInterval(intervalo2);

    iniciar.removeAttribute("disabled", "");
}

function resetarContagem(evento) {
    evento.preventDefault();
    tempo.innerText = 0;
}