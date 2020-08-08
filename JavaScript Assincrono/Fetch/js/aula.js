// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// text retorna uma promises com o valor de retorno sendo o texto do arquivo
// cep.then(r => r.text())
// .then((body) => {
//     console.log(body);
// });

// json retorna uma promises com o valor no formato json
// cep.then(r => r.json())
// .then((body) => {
//     Object.keys(body).forEach((chave) => {
//         console.log(chave);
//     });
// });

// const img = fetch("./img.png");

// blob retorna um objeto com dados que podem ser transformados em uma url para imagem
// img.then(r => r.blob()).then((body) => {
//     const blobUrl = URL.createObjectURL(body); // Objeto que retorna a url
//     console.log(blobUrl);
//     const img = document.createElement("img");
//     img.setAttribute("src", blobUrl);
//     document.body.appendChild(img);
// });

// Utilizamos um clone para poder retornar dois tipos de formatos da promise
// cep.then((r) => {
//     const r2 = r.clone();
//     r2.json().then(body => console.log(body));

//     r.text(); // Isso transforma a promise, o que faz com que você não consiga transformar ela em outra coisa após transformar em texto
//     console.log(r);
// });

// Retorna um objeto com todos os cabeçalhos dos dados
// cep.then(resposta => {
//     resposta.headers.forEach(console.log)
// });

// retorna um número equivalente ao status do servidor -- 200 significa que o objeto carregou
// cep.then(r => console.log(r.status));

// retorna o tipo da requisição
// cep.then((r) => {
//     console.log(r.type);
// });