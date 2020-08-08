export default function iniciarContarPiada() {
    const btn = document.querySelector("div button");
    const piada = document.querySelector(".piada");

    if (piada && btn) {
        contarPiada();
        btn.addEventListener("click", contarPiada);
    }

    function contarPiada(evento) {
        if (evento) {
            evento.preventDefault();
        }

        piada.innerText = "Processando...";

        const requisicao = fetch('https://api.chucknorris.io/jokes/random');

        requisicao.then(resposta => resposta.json()).then((body) => {
            piada.innerText = body.value;
        });
    }
}