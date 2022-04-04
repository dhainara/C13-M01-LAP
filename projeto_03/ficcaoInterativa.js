console.clear();
const prompt = require('prompt-sync');

let nome = prompt(`Olá, qual o seu nome?`);
let valida = string === nome;
console.log(valida);

while (valida) {
    console.log('Por favor, digite seu nome novamente, e lembresse, ele deve possuir apenas letras.');
    nome = prompt(`Qual o seu nome?`);
    valida = string === nome;
}