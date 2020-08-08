// Exportando módulos
export default function iniciarModal() {
    const modalContainer = document.querySelector("[data-modal='container']");
    const modalAbrir = document.querySelector("[data-modal='abrir']");
    const modalFechar = document.querySelector("[data-modal='fechar']");
    const classeAtivo = "ativo";

    if(modalAbrir && modalContainer && modalFechar) {
        modalAbrir.addEventListener("click", modal);
        modalFechar.addEventListener("click", modal);
        modalContainer.addEventListener("click", modal);
    }

    function modal(evento) {
        evento.preventDefault();

        if(evento.target == this) {
            modalContainer.classList.toggle(classeAtivo);
        }
    }
}