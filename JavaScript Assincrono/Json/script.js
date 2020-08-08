fetch("./dados.json")
.then(r => r.json())
.then((json) => {
    json.forEach((obj) => {
        console.log(obj);
    });
});

// Transforma uma string em um Json
const textoJson = '[{"id": 1, "titulo": "JavaScript", "tempo": "25min"}, {"id": 2, "titulo": "HTML", "tempo": "25min"}]';
const textoObj = JSON.parse(textoJson);
console.log(textoObj[1]);

// Transforma um objeto em uma string
const configJson = {player: "Google", tempo: 25.5, aula: "2.1 JavaScript"};
localStorage.config = JSON.stringify(configJson);

console.log(JSON.parse(localStorage.config));