async function puxarDados() {
    document.body.innerText = "Processando...";

    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJson = await dadosResponse.json();

        document.body.innerText = dadosJson.aula;
    }
    catch (erro) {
        document.body.innerText = erro;
    }
}

async function puxarDados2() {
    document.body.innerText = "Processando...";

    try {
        const responseDados = fetch('./dados.json');
        const responseCliente = fetch('./clientes.json');

        const jsonDados = await (await responseDados).json();
        const jsonCliente = await (await responseCliente).json();

        console.log(jsonDados);
        console.log(jsonCliente);
    }
    catch (erro) {
        document.body.innerText = erro;
    }
}

puxarDados2();