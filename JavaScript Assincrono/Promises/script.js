const promessa = new Promise((resolver, rejeitar) => {
    let condicao = false;

    if(condicao) {
        setTimeout(() => {resolver("Paulo")}, 2000);
    } else {
        rejeitar(Error("Um erro ocorreu na promise"));
    }
});

// then serve para quando a promessa for "resolvida", cacth quando for "rejeitada", finally() executa um callback independente do resultado da promessa
const retorno = promessa
.then(resolucao => "Opa, resultou em algo")
.then(resolucao => console.log(resolucao))
.catch(rejeitado => console.log(rejeitado))
.finally(() => console.log("Acabou"));

// then pode receber um segundo parâmetro que é um função de callback que subtitui o uso do cath
promessa.then(resolucao => console.log("resolvido"), rejeicao => console.log("rejeitado"));

console.log(retorno);

// --------------------------------------------
const login = new Promise((resolver) => {
    setTimeout(() => {resolver("Usuário logou")}, 2000);
});

const dados = new Promise((resolver) => {
    setTimeout(() => {resolver("Dados carregados")}, 1000);
});

// Junta todas as Promise em uma, o resultado dessa nova Promise vai depender de todas as Promise serem "resolvidas" ou se ao menos um delas for "rejeitada".
const carregouTudo = Promise.all([login, dados]);
// Pega o resultado da primeira que for "resolvida"
const primeiro = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})

primeiro.then((resolucao) => {
    console.log(resolucao);
});