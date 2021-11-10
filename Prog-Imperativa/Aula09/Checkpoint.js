//Entendi que deveria comecar assim criando uma variavel para cada alimento e seu tempo.
let pipoca = 'pipoca'
let tempoPipoca = 10
let macarrao = 'macarrão'
let tempoMacarrao = 8
let carne = 'carne'
let tempoCarne = 15
let feijao = 'feijão'
let tempoFeijao = 12
let brigadeiro = 'brigadeiro'
let tempoBrigadeiro = 8

//inseri essas outras duas variaveis aqui abaixo para me basear.
let comida = 'carne'
let tempo = 15

//Se o tempo informado for maior que 2x o necessário, exibir mensagem:  "A comida queimou".
if (comida == pipoca && tempo > tempoPipoca && tempo <= 2 * tempoPipoca) {
    console.log('A comida queimou')
}
//Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente".
else if (comida == brigadeiro && tempo < tempoBrigadeiro) {
    console.log('Tempo insuficiente')
}
//Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”.
else if (comida == feijao && tempo >= 3 * tempoFeijao) {
    console.log('Kabumm')
}
//Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente".
// essa foi a unca forma que eu encontrei pra dizer que o prato não existia.
else if (comida != brigadeiro && comida != feijao && comida != carne && comida != pipoca && comida != macarrao) {
    console.log('Prato Inexistente')
}
else {
    console.log('Prato pronto, bom apetite')
}

// com o pouco conhecimento que consegui asimilar durante as aulas esse foi o maximo que consegui fazer, achei que ficou bem simples, então não sei exatamente se está correto.