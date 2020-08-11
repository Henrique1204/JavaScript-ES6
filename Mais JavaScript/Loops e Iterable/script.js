const frutas = ["Banana", "Morango", "Uva"];
const frase = "Opa, JavaScript?";
const carro = {marca: "Honda", ano: 2020};

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));

for(const fruta of frutas) {
    console.log(fruta);
}

// for(const letra of frase) {
//     console.log(letra);
// }

for(const chave in carro) {
    console.log(chave, carro[chave]);
}

for(const fruta in frutas) {
    console.log(frutas[fruta]);
}

const lis = document.querySelectorAll("li");

for(const li of lis) {
    li.classList.add("ativo");
}

for(const chave in window) {
    console.log(`${chave}: ${window[chave]}`);
}