export default function iniciarAnimaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    const observador = new MutationObserver(manipularMutacao);
    observador.observe(document.querySelector("#numeros"), {attributes: true});

    function animarNumeros() {
        if(numeros.length) {
            numeros.forEach((n) => {
                const total = +n.innerText;
                const incremento = Math.floor(total / 100);
    
                let inicio = 0;
                const intervalor = setInterval(() => {
                    inicio += incremento;
    
                    n.innerText = inicio;
    
                    if(inicio > total) {
                        n.innerText = total;
                        clearInterval(intervalor);
                    }
                }, 35 * Math.random());
            });
        }
    }

    function manipularMutacao(mutacao) {
        if (mutacao[0].target.classList.contains("ativo")) {
            observador.disconnect();
            animarNumeros();
        }
    }
}