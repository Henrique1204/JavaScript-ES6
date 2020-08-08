export default function iniciarMostrarBitcoin() {
    mostrarBitcoin();
    // setInterval(mostrarBitcoin, 1000 * 30);

    function mostrarBitcoin() {
        const bitcoin = fetch('https://blockchain.info/ticker');

        bitcoin.then(resposta => resposta.json()).then((body) => {
            const tituloBitcoin = document.querySelector("h1");
            const precoBitcoin = Number(body["BRL"]["buy"]).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    
            tituloBitcoin.innerText = precoBitcoin;
        });
    }
}