// Mexe na url do site
// window.history.pushState(null, null, "sobre.html");

// Evento que ocorre ao apertar a setinha de voltar e ir pra frente
// window.addEventListener("popstate", () => {
//     console.log("teste");
// });

const links = document.querySelectorAll("a");

if (links.length) {
    links.forEach((link) => {
        link.addEventListener("click", manipularClick);
    });

    window.addEventListener("popstate", () => {
        const url = window.location.pathname;

        fetchPage(url);
    });
}

function manipularClick(evento) {
    evento.preventDefault();
    const url = evento.target.href;

    fetchPage(url);
    window.history.pushState(null, null, url);
}

async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageTexto = await pageResponse.text();

    substituirConteudo(pageTexto);
}

function substituirConteudo(novoTexto) {
    const novoHtml = document.createElement("div");
    novoHtml.innerHTML = novoTexto;

    const velhoConteudo = document.querySelector(".content");
    const novoConteudo = novoHtml.querySelector(".content");
    velhoConteudo.innerHTML = novoConteudo.innerHTML;

    document.title = novoHtml.querySelector("title").innerText;
}