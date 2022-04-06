console.clear();
const prompt = require('prompt-sync')();

let nome

const status = {
    fome: 5,
    conhecimento: 50,
    energia: 10
}

const situacaoInicial = {
    tomouCafe: false,
    dentesEscovados: false,
    arrumado: false,
    fome: false,
    desarrumado: false,
}


function estaVivo() {
    if (status.fome >= 11) {
        console.log(`\n${nome} passou muito tempo sem se alimentar e desmaiou tendo que ser levado para o hospital para tomar soro e ficando alguns dias em observação. Devido a isso, acabou perdendo sua prova e o tempo livre que teria para estudar.`);
        return false
    }

    else if (status.energia <= 2) {
        console.log(`\n${nome} passou muito tempo sem dormir e desmaiou tendo que ser levado para o hospital para ser cuidado. Devido a isso, acabou perdendo sua prova e o tempo livre que teria para estudar.`);
        return false
    }

    else if (status.conhecimento > 150) {
        status.conhecimento = 0
        return false
    }
}
console.log("Seja bem vindo ao Vestibulator!");
console.log("-----------------------------------------------");
console.log("Sua função aqui é adquirir conhecimento para passar no em sua prova realizando pequenas tarefas. \n Lembre-se! Você nao pode deixar sua fome passar de 11 e sua energia ficar igual ou menor que 2 para nao perder. \n Voce tem 4 dias para adquirir conhecimento o suficiente para sua prova.")

do {
    nome = prompt("Escreva o nome do seu personagem: ");

    if (nome.length < 3) {
        console.log("Nome muito curto");
    }
} while (nome.length < 3)


const turnos = ["Manhã", "Tarde", "Noite"]


function acoesDaManha(situacaoDoDia) {
    const opcoes = [
        "1 - Tomar café (fome -5; energia +2).",
        "2 - Se arrumar e escovar os dentes (energia -3).",
        "3 - Estudar um pouco antes de ir para escola (energia -4; conhecimento +5; fome +3).",
        "4 - Procastinar e faltar aula (energia -1; conhecimento -5).",
    ]

    opcoes.forEach(opcao => console.log(opcao));
    let opcao = +prompt("O que você deseja fazer? ");

    if (opcao == 1) {
        console.log(`${nome} foi fazer café (fome -5; energia +2)`);
        situacaoDoDia.tomouCafe = true;

        status.fome -= 5
        status.energia += 2
    }

    else if (opcao == 2) {
        console.log(`${nome} foi se arrumar e escovar os dentes (energia -3)`);
        situacaoDoDia.arrumado = true
        situacaoDoDia.dentesEscovados = true

        status.energia -= 3
    }

    else if (opcao == 3) {
        console.log(`${nome} foi estudar (energia -4; conhecimento +5; fome -3)`);
        situacaoDoDia.fome = true

        status.energia -= 4
        status.conhecimento += 5
        status.fome += 3
    }

    else if (opcao == 4) {
        console.log(`${nome} ficou deitado até a hora da escola, indo (fome +3; conhecimento -5)`);
        situacaoDoDia.desarrumado = true

        status.conhecimento -= 5
        status.fome += 3

    }

    if (opcao === !situacaoDoDia.tomouCafe) {
        console.log(`\n${nome} ficou ansioso e não conseguiu estudar`);
    }

    if (opcao === !situacaoDoDia.dentesEscovados || !situacaoDoDia.arrumado) {
        console.log(`\nOs colegas ficaram longe de ${nome}`);
    }

    if (opcao === !situacaoDoDia.fome) {
        console.log(`\n${nome} está com fome e isso impedira que adquira total conhecimento em seus estudos, você recebera metade. `);
    }

    if (opcao === !situacaoDoDia.desarrumado) {
        console.log(`\nOs colegas ficaram com vergonha e evitaram ${nome}`);

    }

    console.log(`\n${nome}foi para a escola.`)


}


function acoesDaTarde(situacaoDoDia) {

    const opcoes = [
        "1 - Estudar durante o intervalo. (energia -3; conhecimento +6)",
        "2 - Comer durante o intervalo (fome -2).",
        "3 - Procastinar e bater papo com seus colegas (energia -1; conhecimento -2)\n",
    ]

    opcoes.forEach(opcao => console.log(opcao))
    const opcao = +prompt("O que você deseja fazer? ")


    if (opcao == 1) {
        console.log(`\n${nome} estudou durante o intervalo.`)

        status.conhecimento += 6
        status.energia += 3
    }

    else if (opcao == 2) {
        console.log(`\n${nome} comeu durante o intervalo.`)
        situacaoDoDia.tomouCafe = true

        status.fome -= 2
    }

    else if (opcao == 3) {
        console.log(`\n${nome} não fez nada durante o intervalo e apenas brincou e conversou com seus colegas.`)
        situacaoDoDia.desarrumado = true

        status.energia -= 1
        status.conhecimento -= 2

    }


    if (!situacaoDoDia.tomouCafe) {
        console.log(`\n${nome} ficou ansioso e não conseguiu estudar`);
    }

    if (!situacaoDoDia.dentesEscovados) {
        console.log(`\nOs colegas ficaram longe de ${nome}`);
    }

    if (!situacaoDoDia.fome) {
        console.log(`\n${nome} está com fome e isso a impediu que adquira total conhecimento em seus estudos.`);
    }

    if (!situacaoDoDia.desarrumado) {
        console.log(`\nOs colegas de ${nome} o(a) evitaram pois estava fedendo muito.`);
    }

    console.log(`\n${nome} voltou para casa.`);
}

//noite
function acoesDaNoite(situacaoDoDia) {


    console.log(`\n${nome} voltou para casa.`);
    const opcoes = [
        "1 - Tomar banho e estudar. (energia +3; conhecimento +9).",
        "2 - Preparar o jantar para sua familia. (energia -3; fome -3).",
        "3 - Procastinar jogando Transformice (energia -3; conhecimento -4).",
        "4 - Sair com seus amigos (energia -5; fome +2)",
        "5 - Tomar café e estudar (energia +4; conhecimento +9)",
        "6 - Se arrumar e sair com os amigos (energia -6; fome +3)\n",
    ]

    opcoes.forEach(opcao => console.log(opcao))
    const opcao = +prompt("\nO que você deseja fazer? ")

    if (opcao == 1) {
        console.log(`\n${nome} tomou banho e estudou.`);

        status.conhecimento += 9
        status.energia += 3
    }

    else if (opcao == 2) {
        console.log(`\n${nome} preparou o jantar e comeu junto com sua família.`)

        status.energia -= 3
        status.fome -= 2
    }

    else if (opcao == 3) {
        console.log(`\n${nome} ficou jogando online com seus amigos.`)

        status.energia -= 3
        status.conhecimento -= 4

    }

    else if (opcao == 4) {
        console.log(`\n${nome} saiu para beber com seus colegas de classe da escola.`)

        status.energia -= 7
        status.conhecimento -= 2
        status.fome += 2

    }

    else if (opcao == 5) {
        console.log(`\n${nome} tomou café e foi estudar.`)

        status.energia += 4
        status.conhecimento += 9

    }
    console.log(`\n${nome} foi dormir.`);

}

for (let dia = 1; dia <= 4; dia++) {
    console.clear();

    console.log(`\nComeço do dia ${dia}`)

    const situacaoDoDia = situacaoInicial

    turnos.forEach(turno => {
        console.table(status);
        console.log(`${nome} está no turno ${turno}`)


        if (turno === "Manhã") {
            acoesDaManha(situacaoDoDia);


        }

        if (turno === "Tarde") {
            acoesDaTarde(situacaoDoDia);

        }

        if (turno === "Noite") {
            acoesDaNoite(situacaoDoDia);
        }


    })
    console.log(`\nFinal do dia ${dia}. Status: `);
    console.table(status);

}

if (!estaVivo() || dia == 4) {

    const reiniciar = prompt(`\nDeseja reiniciar? Digite sim ou não: `);

    if ((reiniciar.toLowerCase() === `s`) || (reiniciar.toLowerCase() === `sim`)) {
        dia = 1

        status.fome = 5
        status.conhecimento = 50
        status.energia = 10

    }
}

else if (status.conhecimento > 100) {
    console.log(`Parabens, ${nome}! Você conseguiu conhecimento o suficiente para passar em sua prova!`)

    const reiniciar = prompt(`\nDeseja reiniciar? Digite sim ou não: `);

    if ((reiniciar.toLowerCase() === `s`) || (reiniciar.toLowerCase() === `sim`)) {
        dia = 1

        status.fome = 5
        status.conhecimento = 50
        status.energia = 10

    }
}