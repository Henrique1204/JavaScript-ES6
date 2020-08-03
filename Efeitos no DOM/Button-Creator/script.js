const controles = document.getElementById("controles");
const textoCss = document.querySelector(".css");
const btn = document.querySelector(".btn");

if(controles && textoCss && btn) {
    regastarValores();
    controles.addEventListener("change", manipularMudanças);
}


function manipularMudanças(evento) {
    const nome = evento.target.name;
    const valor = evento.target.value;

    if (nome == "texto") {
        btn.innerText = valor;
    } else {
        btn.style[nome] = (!isNaN(+valor)) ? (nome == "fontSize") ? `${valor}rem` : `${valor}px` : valor;
    }

    salvarValores(nome, valor);
    mostrarCss();
}

function mostrarCss() {
    const textosEstilos = btn.style.cssText.split("; ");
    textoCss.innerHTML = `<span>${textosEstilos.join(";</span><span>")}</span>`;
}

function salvarValores(nome, valor) {
    localStorage[nome] = valor;
}

function regastarValores() {
    const propriedades = Object.keys(localStorage);

    propriedades.forEach((item) => {
        if (item == "texto") {
            btn.innerText = localStorage[item];
        } else {
            btn.style[item] = (!isNaN(+localStorage[item])) ? (item == "fontSize") ? `${localStorage[item]}rem` : `${localStorage[item]}px` : localStorage[item];
        }

        controles.elements[item].value = localStorage[item];
    });

    mostrarCss();
}