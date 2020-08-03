// Importando modulos
// Quando você exporta um "default" o nome que você dá ao import não importa
import scrollSuave from "./modules/scroll-suave.js";
import animarScroll from "./modules/animar-scroll.js";
import navegacaoTab from "./modules/navegacao-tab.js";
import accordionList from "./modules/accordion-list.js";
// Quando você não exporta um "default" você precisa nomear com o mesmo nome da função que está sendo exportada.
import {testando, dandoOi} from "./modules/teste.js"; // Pode ser importado mais de um export, para isso basta usar virgulas entre os nomes
// import {testando as teste} from "./modules/teste.js"; -- Você pode renomear a função utilizando o "as"
// import * as teste from "./modules/teste.js"; -- importa todos os export do arquivo, ele irá retornar um objeto do tipo Module com as funções exportadas


// Ativando funções
scrollSuave();
animarScroll();
navegacaoTab();
accordionList();
testando();
dandoOi();