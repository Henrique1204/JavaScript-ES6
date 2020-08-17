const expressao = /\w+/gi;

const regeConstrutor1 = new RegExp("\\w+", "gi");
const regeConstrutor2 = new RegExp(/\w+/, "gi");

const frase = "JavaScript é muito legal né";

console.log(frase.replace(expressao, "X"));


// Percorre a string e cada vez que o item buscado for encontrado ele retorna true e altera o última indice, cada vez que o método for chamado ele irá começar do último indice, caso percorra a string toda ele retorna false e 0 o indice, caso chame mais uma vez ele irá começar do inicio outra vez
// console.log(expressao.test(frase)); // true
// console.log(expressao.lastIndex); // 10
// console.log(expressao.test(frase)); // true
// console.log(expressao.lastIndex); // 18
// console.log(expressao.test(frase)); // true
// console.log(expressao.lastIndex); // 24
// console.log(expressao.test(frase)); // true
// console.log(expressao.lastIndex); // 26
// console.log(expressao.test(frase)); // false
// console.log(expressao.lastIndex); // 0
// console.log(expressao.test(frase)); // true
// console.log(expressao.lastIndex); // 10

// Pode usar dentro de um laço
// while (expressao.test(frase)) {
//     console.log("Testou!");
// }

// Diferente do test, o exec retorna um array com várias informações, quando tiver mais nada para percorrer ele retorna null, fora o retorno tudo continua igual ao test
// console.log(expressao.exec(frase));
// console.log(expressao.exec(frase));
// console.log(expressao.exec(frase));

// let resultadoExec;

// while(resultadoExec = expressao.exec(frase)) {
//     console.log(resultadoExec[0]);
// }

// const expressaoSemG = /\w+/;

// Caso não encontre nada o retorno é null
// console.log(frase.match(expressao)); // Retorna uma lista com todos os valores encontrados
// console.log(frase.match(expressaoSemG)); // Retorna uma lista parecida com a lista do exec

// console.log(frase.split(/[a\s]/gi));

// const tags = "<div>Oi</div>";

// console.log(tags.replace(/(?<=<\/?)\w+/g, "p"));

const emails = "joao@homail.com.br marta@ggmail.com.br bruna@oulook.com.br";
const expressaoEmail = /(\w+)(@[\w.]+)/g;

// console.log(emails.replace(expressaoEmail, "$1gmail.com"));

const novosEmails = emails.replace(expressaoEmail, function(...args) {
    console.log(args);
    switch(args[2]) {
        case "@homail.com.br": return `${args[1]}@hotmail.com`;
        case "@ggmail.com.br": return `${args[1]}@gmail.com`;
        case "@oulook.com.br": return `${args[1]}@outlook.com`;
        default: return args[0];
    }
});

console.log(novosEmails);