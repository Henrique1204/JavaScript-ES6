import animaNumeros from "./anima-numeros.js";

export default function iniciarFetchAnimais() {
    fetchAnimais('./animaisApi.json');

    async function fetchAnimais(url) {
        try {
            const animaisResposta = await fetch(url);
            const animaisJson = await animaisResposta.json();
        
            animaisJson.forEach((animal) => {
                const divAnimal = criarAnimal(animal);
                const numerosGrid = document.querySelector("#numeros .numeros-grid");
                numerosGrid.appendChild(divAnimal);
            });
    
            animaNumeros();
        }
        catch (erro) {
            console.log(erro);
        }
    }
    
    function criarAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("nuemro-animal");
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    
        return div;
    }
}