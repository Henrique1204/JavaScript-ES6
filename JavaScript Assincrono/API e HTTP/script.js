// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json())
// .then(pokemon => console.log(pokemon));

// const url = "https://jsonplaceholder.typicode.com/posts";
// POST vai adicionar um para o banco de dados, PUT atualiza o dado, GET pega um valor do banco de dados, DELETE apaga o dado, HEAD puxa apenas os headers
// const options = {
//     method: "HEAD"
// }

// fetch(url, options)
// .then(r => r.headers.forEach(console.log));

const url = "https://www.google.com";

fetch(url).then(r => r.text()).then(texto => console.log(texto));