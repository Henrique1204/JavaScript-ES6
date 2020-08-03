// Exportando modulos
export default function iniciarAnimacaoScroll() {
    const sections = document.querySelectorAll("[data-animarScroll]");
    const classeAtiva = "ativo";

    animaScroll();
    window.addEventListener("scroll", animaScroll);

    function animaScroll() {
        sections.forEach((section) => {
            const topo = section.getBoundingClientRect().top - (window.innerHeight * 0.6);
    
            if (topo <= 0) {
                section.classList.add(classeAtiva);
            }
        });
    }
}