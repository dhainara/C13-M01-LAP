console.clear();
const prompt = require(`prompt-sync`)();

console.log(`1) Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!"`); //exercicio 1

console.log(`\nO primeiro programa a gente nunca esquece!`);

let continuar = prompt(`Pressione ENTER para continuar.`)

console.log();
console.clear();
console.log(`2) Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, o cep na terceira e o telefone na quarta.`); //exercicio 2


let nomeCompleto
let endereco
let cep
let telefone

//prompts dos dados
do {
    nomeCompleto = prompt(`Qual o seu nome completo? `)

    if (nomeCompleto.length < 10) {
        console.log(`Nome muito curto! Digite seu nome completo: `)
    }
} while (nomeCompleto.length < 10)

do {
    endereco = prompt(`Qual o seu endereço completo? `)

    if (endereco.length < 10) {
        console.log(`Seu endereço é muito curto, algo está errado...`)
        console.log();
    }
} while (endereco.length < 10)

do {
    cep = prompt(`Qual o seu cep? `)

    if (cep.length < 9) {
        console.log(`Seu cep é muito curto, algo está errado... Ao tentar novamente, não se esqueça do hífen.`)
    } else if (cep.length >= 10) {
        console.log(`Seu cep é muito longo, algo está errado... Tente novamente.`)
    }
} while (cep.length < 9 || cep.length >= 10)

do {
    telefone = prompt(`Qual o seu telefone? `)

    if (telefone.length < 10) {
        console.log(`Seu telefone é muito curto, algo está errado... Ao tentar novamente, não se esqueça do DDD: `)
    } else if (telefone.length > 12) {
        console.log(`Seu telefone é muito longo, algo está errado... Tente novamente. `)
    }
} while (telefone.length < 11 || telefone.length > 12)

console.clear();
console.log();
console.log(`Sua etiqueta está pronta! `)
console.log(`\n${nomeCompleto}.\n${endereco}.\n${cep}\n${telefone}`)