// Exportando módulos
export default function iniciarAccordionList() {
    const accordinList = document.querySelectorAll("[data-accordionList] dt");
    const classeAtiva = "ativo";

    if(accordinList.length) {
        accordinList[0].classList.toggle(classeAtiva);
        accordinList[0].nextElementSibling.classList.toggle(classeAtiva);
        accordinList.forEach((item) => item.addEventListener("click", ativarAccordion) );
    }

    function ativarAccordion() {
        this.classList.toggle(classeAtiva);
        this.nextElementSibling.classList.toggle(classeAtiva);
    }
}