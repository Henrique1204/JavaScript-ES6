// Elementos DOM
const menuTab = document.querySelectorAll("[data-menuTab] li");
const conteudoTab = document.querySelectorAll("[data-conteudoTab] article");
const accordinList = document.querySelectorAll("[data-accordionList] dt");
const linksInterno = document.querySelectorAll(".menu a[href^='#'");
const sections = document.querySelectorAll("[data-animarScroll]");
const classeAtiva = "ativo";

// Navegação por Tab
if(menuTab.length && conteudoTab.length) {
    ativarTab(conteudoTab, 0);
    menuTab.forEach( (item, index) => item.addEventListener("click", () => ativarTab(conteudoTab, index) ) );
}

// Accordion List
if(accordinList.length) {
    accordinList[0].classList.toggle(classeAtiva);
    accordinList[0].nextElementSibling.classList.toggle(classeAtiva);
    accordinList.forEach((item) => item.addEventListener("click", ativarAccordion) );
}

// Scroll Suave com link intenro
if(linksInterno.length) {
    animaScroll();
    linksInterno.forEach((item) => item.addEventListener("click", scrollParaSection));
}

// Animar scroll
window.addEventListener("scroll", animaScroll);

// Funções
function ativarTab(lista, index) {
    lista.forEach((item) => item.classList.remove(classeAtiva));
    lista[index].classList.add(classeAtiva);
}

function ativarAccordion() {
    this.classList.toggle(classeAtiva);
    this.nextElementSibling.classList.toggle(classeAtiva);
}

function scrollParaSection(evento) {
    evento.preventDefault();

    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({behavior: "smooth", block: "start"});

    // Forma alternativa
    // window.scrollTo({
    //     top: section.offsetTop,
    //     behavior: "smooth"
    // });
}

function animaScroll() {
    sections.forEach((section) => {
        const topo = section.getBoundingClientRect().top - (window.innerHeight * 0.6);

        if (topo <= 0) {
            section.classList.add(classeAtiva);
        }
    });
}