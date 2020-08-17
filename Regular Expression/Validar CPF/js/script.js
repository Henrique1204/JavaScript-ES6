import ValidarCPF from "./module/validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCPF = new ValidarCPF(cpf).iniciar();