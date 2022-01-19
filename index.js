const CPF = require("cpf")
const fs = require("fs")
// imprima uma mensagem de boas vindas
console.log("Seja Bem vindo ao cadastrador de CPFs");

// 1 - Capturar o CPF digitado pelo usuário
var cpf = process.argv[2];
console.log(cpf); 

// 2 - Validar o CPF...
let cpfValido = CPF.isValid(cpf);

// 3 - Caso a informação seja um CPF válido, salvar no arquivo dados.txt
//     caso contrário, exibir mensagem de erro:

if(cpfValido) {
    console.log("CPF Válido! Salvando.")
     fs.writeFileSync("dados.txt", cpf);
} else {
    console.log("CPF Inválido! Digite Direito")
}

console.log("Fim");