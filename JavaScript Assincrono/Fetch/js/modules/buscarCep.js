export default function iniciarBuscarCep() {
    const input = document.querySelector("input");
    const btn = document.querySelector("form button");
    const div = document.querySelector(".resultado");
    
    if (btn && input && div) {
        btn.addEventListener("click", manipularClique);
    }
    
    function manipularClique(evento) {
        evento.preventDefault();
        const cep = input.value;
        
        if (cep != "") {
            input.value = "";
            buscarCep(cep);
        }
    }
    
    function buscarCep(cep) {
        div.innerText = "Procurando...";
        const requiscao = fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
        requiscao.then((resposta) => {
            if (resposta.status == 200) {
                return resposta.json();
            }
        })
        .then((body) => {
            div.innerText = `${body["logradouro"]}, ${body["bairro"]}.`;
        });
    }
}