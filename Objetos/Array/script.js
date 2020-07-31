// Transforma um Array Like em Array
const listaLi = Array.from(document.querySelectorAll("li"));
listaLi.forEach((item) => console.log(item));

// Testa se é uma Array
console.log(Array.isArray(listaLi));

// Formas de criar Array
// Array.of(10); -- [10]
// Array.of(1, 2, 3, 4); -- [1, 2, 3, 4]
// new Array(5); -- [,,,,]
// Array(5); -- [,,,,]
// Array(1, 2, 3, 4); -- [1, 2, 3, 4]

// Méotodos modificadores
// Organiza um array em ordem alfabetica
const nomes = ["Paulo", "Henrique", "Silva", "Souza"];
console.log(nomes.sort());

// Adiciona os valores ao começo do array e retorna o lenght
console.log(nomes.unshift("Elino", "Maria"));

// Adiciona os valores ao final do array e retorna o lenght
console.log(nomes.push("Barbosa", "Sebastiana"));

// Remove o primeiro item da array e retorna ele
console.log(nomes.shift());

// Remove o último item da array e retorna ele
console.log(nomes.pop());

// Inverte a ordem do array
console.log(nomes.reverse());

// Primeiro parâmetro é a posição onde quer adicionar os itens, segundo quantos elementos quer remover, os demais são os valores a serem adicionados, após adicionar os itens ela retorna os valores remvoidos
nomes.splice(1, 0, "Antonia", "Pedro");
console.log(nomes);
console.log(nomes.splice(3, 2, "Zé", "Romeo"));
console.log(nomes);

// Copia os valores internos de um array em posições da própria array. O primeiro valor é de onde irá ser o começo das substituições, o segundo será de onde vai começar a copia do array e o terceiro onde irá terminar a copia.
console.log(nomes.copyWithin(3, 0, 1));

// Preenche um array com o valor do parâmetro, você pode passar de onde quer começar a subsituir e onde quer parar.
console.log(nomes.fill("Fulano", 3, 5));

// Métodos acessores
// Junta os valores de duas array e retorna uma nova com os valores juntos, pode ser passado valores soltos
console.log(nomes.concat(listaLi, "Hehe"));

// Verifica se existe um valor dentro do array
console.log((nomes.includes("Paulo") ? "Tem o nome" : "Não tem o nome"));

// Retorna o valor do índice do elemento, caso tenha mais de um ele retorna apenas o do primeiro, caso o valor não exista dentro do array é retornado o valor -1
console.log(nomes.indexOf("Paulo"));

// Retorna o valor do último índice da última aparição do elemento
console.log(nomes.lastIndexOf("Fulano"));

// Transformar os itens de uma array em uma string, utiliza o parâmetro passado para colocar no local da juunção dos valores na string
document.querySelector("body").innerHTML = document.querySelector("body").innerHTML.split("ul").join("ol");

// Recorta os valores do array de acorodo com o parâmetro, o primeiro é onde começa, e pode receber um segundo definindo onde será encerrado, se não for passado parâmetro ele pode servir para clonar a array.
console.log(nomes.slice(3, 6));

// Exercícios
console.log("-------------- Exercício --------------");

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();
comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");
console.log(primeiraComida);
console.log(ultimaComida);
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(`Joana faz parte dos estudantes? ${( estudantes.includes("Joana") ) ? "Sim" : "Não"}`);
console.log(`Juliana faz parte dos estudantes? ${( estudantes.includes("Juliana") ) ? "Sim" : "Não"}`);

let html = `<section><div>Sobre</div><div>Produtos</div><div>Contato</div></section>`;
console.log(html.split("section").join("ul").split("div").join("li"));

const carros = ["Ford", "Fiat", "VW", "Honda"];
const carrosCopia = carros.slice();
carros.pop();

console.log(carros);
console.log(carrosCopia);