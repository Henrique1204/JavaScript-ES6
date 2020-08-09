import Contador from "./module/contador.js";

// Parâmetro é no formato de datas no JavaScript -- Caso não o valor de GMT o horário será de acordo com o horário local do usuário
const tempoParaNatal = new Contador("25 December 2020 00:00:00 GMT -0300");
const tempoParaAnonovo = new Contador("1 December 2020 00:00:00 GMT -0300");

// setInterval(() => {console.log(tempoParaNatal.total)}, 1000);
// setInterval(() => {console.log(tempoParaAnonovo.total)}, 1000);