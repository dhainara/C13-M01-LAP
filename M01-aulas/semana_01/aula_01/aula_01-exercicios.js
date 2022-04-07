console.clear();
const prompt = require(`prompt-sync`)();

//exercicio 1
console.log(`1) Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!"`);

console.log(`\nO primeiro programa a gente nunca esquece!`)

console.log();
console.clear();
console.log(`2) Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, o cep na terceira e o telefone na quarta.`); //exercicio 2

//exercicio 2
let nomeCompleto
let endereco
let cep
let telefone

//recebe nome do usuario
do { //recebe nome do usuario
    nomeCompleto = prompt(`Qual o seu nome completo? `)

    if (nomeCompleto.length < 10) {
        console.log(`Nome muito curto! Digite seu nome completo: `)
    }
} while (nomeCompleto.length < 10)

//recebe endereco do usuario
do {
    endereco = prompt(`Qual o seu endereço completo? `)

    if (endereco.length < 10) {
        console.log(`Seu endereço é muito curto, algo está errado...`)
        console.log();
    }
} while (endereco.length < 10)

//recebe cep do usuario
do {
    cep = prompt(`Qual o seu cep? `)

    if (cep.length < 9) {
        console.log(`Seu cep é muito curto, algo está errado... Ao tentar novamente, não se esqueça do hífen.`)
    } else if (cep.length >= 10) {
        console.log(`Seu cep é muito longo, algo está errado... Tente novamente.`)
    }
} while (cep.length < 9 || cep.length >= 10)

//recebe telefone do usuario
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

//exercicio 3
console.clear();
console.log(`3) Letra de Música - Faça um programa que mostre na tela uma letra de música que você gosta.`)
console.log();

const musica =
    `Ain't it just so easy to say
You don't feel the same way
As that nice boy does, hey?
He misses you, he wants you
But, you just don't feel the same
Why don't you tell him today?
Yeah, huh-huh-huh
She doesn't want him because he cares too much
But now he's gone and she's alone again
Maybe if she tried a little harder to find
The gem within his heart that was there this whole time
(Bitch!)
Baby, what did I do?
Baby come through
To me
Baby I think it's you
Never was me`;

console.log(musica);

(4) Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.Como primeiro passo, escreva um programa que produza a seguinte saída:)

