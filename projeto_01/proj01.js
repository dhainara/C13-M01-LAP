console.clear();
const prompt = require('prompt-sync')();

console.log('Reglin era um pequeno morador da vila de Gargia, que nunca havia saido de sua vila, seu povo nao costumava ir para fora, pois nao havia razões para isso. Tinham tudo o que podiam na pequena vila, não faltava remedios para se cuidar, comida para se empaturar e casas para morar.');
console.log('');
console.log('Até que certo dia, ápos a visita de um estranho homem na vila, muitos moradores começaram  a adoecer, incluindo a mãe de Reglin, onde todos os infectados apresentavam febre alta, tosse seca, calafrios, delirio e falta de ar, o que acabava levando-os a morte. E não havia um remédio ali que conseguisse cura-los.');
console.log('');

console.log('Vendo a situação de sua mãe, Reglin foi em busca da sabia curandeira Mutah, que lhe disse que a única coisa que poderia salvar a todos seria uma planta florescente chamada Homusge, que apenas poderia ser encontrada nos pantanos de Elgor, há dois de distância da vila. Com essa planta, poderia ser feito um remedio, que salvaria as pessoas da desconhecida doença. Reglin então, saiu em busca da pequena planta para salvar seu povo mas o caminho até lá não seria tão fácil, pois havia monstros e criaturas horríveis que ele encontraria no caminho.');
console.log('');

//valores
var sim = 1
var nao = 0

//prompts das perguntas
let pergunta1 = prompt('Você conseguiu chegar ao pantano? ').toLowerCase();
console.log('pergunta1');
if (pergunta1 === 'sim') {
    valor1 = 1
} else {
    valor1 = 0
}
console.clear();

let pergunta2 = prompt('Você conseguiu voltar para vila em dois dias? ').toLowerCase();
console.log('pergunta2');
if (pergunta2 === 'sim') {
    valor2 = 1
} else {
    valor2 = 0
}
console.clear();

let pergunta3 = prompt('Coletou outro fruto no meio do caminho?').toLowerCase();
console.log('pergunta3');
if (pergunta3 === 'sim') {
    valor3 = 1
} else {
    valor3 = 0
}
console.clear();

let pergunta4 = prompt('Encontrou Goliter, uma criatura docil, que vive na entrada do pantano?').toLowerCase();
console.log('pergunta4');
if (pergunta4 === 'sim') {
    valor4 = 1
} else {
    valor4 = 0
}
console.clear();

let pergunta5 = prompt('Você conseguiu sair ileso do pântano de Elgor sem que a criatura Cassis, te atacasse? ').toLowerCase();
console.log('pergunta5');
if (pergunta5 === 'sim') {
    valor5 = 1
} else {
    valor5 = 0
}
console.clear();


//resultado
if (valor1 + valor2 + valor3 + valor4 + valor5 === 0) {
    console.log('Você não conseguiu coletar a Homusge. No final de sua jornada, voltou para casa de mãos vazias e cheio de machucados devido as criaturas que encontrara no caminho. Ao chegar, recebe a notícia de que a maioria dos moradores da vila já haviam falecido. E devido ao contato com os doentes, você também é contaminado com o vírus e vive os últimos dias de sua vida assistindo os seus companheiros indo um por um, até que finalmente chegue a sua vez... ');
    console.log('Você falha.');

} else if (valor1 + valor2 + valor3 + valor4 + valor5 === 1 & 2) {
    console.log('Você não consegue coletar a Homusge, mas no meio do caminho de volta, você conhece um pequeno senhor que morava sozinho próximo ao pântano. Ao ver seu desespero por fracassar em sua missão, o velho o informa que conhece a tal doença que estava devastando sua vila e lhe da outra planta chamada Ananb. Ela não possui a eficácia da Homusge, mas alivia os sintomas da doença temporariamente.');
    console.log('Você leva a Ananb para vila e consegue ajudar a todos, mas por conta dos efeitos temporarios da planta, todos os moradores infectados precisam consumir a mesma constantemente pelo resto de suas vidas.');

} else if (valor1 + valor2 + valor3 + valor4 + valor5 === 3) {
    console.log('Você consegue chegar ao pantano, a tão desejada homusge, que se dedicou tanto para pegar, mas Cassis, a guardiã do pântano, inicia uma luta com você, e ao perceber que suas intensões com a tão rara planta, ela devora do caule aos espinhos, cada resquício da Homusge. Após isso, ela vai embora gargalhando ao ve-lo paralisado por seus pensamentos de culpa e desespero. Você volta para casa de mãos vazias... Você falha.');

} else if (valor1 + valor2 + valor3 + valor4 + valor5 === 4) {
    console.log('Você consegue coletar a planta, e volta a para curar a todos mas ao chegar, é possível apenas curar uma parte da população pois a maior parte dos infectados, incluindo sua mãe, não resistiram e faleceram pouco tempo antes de sua chegada.');

} else if (valor1 + valor2 + valor3 + valor4 + valor5 === 5) {
    console.log('Você consegue coletar a planta, voltando a tempo de salvar todos os membros da vila. Por conta de seu incrivel feito, se colocando em risco para salvar a todos, a população o torna um herói, e erguem na praça central, um memorial para que todos nunca se esqueçam de sua bravura e dedicação.');
}