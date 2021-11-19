// 1.	Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:
/*Para essa oportunidade vamos retomar a atividade da aula anterior, você se lembra? Estávamos trabalhando em arrays, acessando-os, modificando-os, adicionando e removendo elementos, e algumas outras coisas. Mas como vimos naquela aula, muitas tarefas foram repetidas mesmo dentro da mesma função, parecia que tínhamos que executar o mesmo passo várias vezes, um número x de vezes. Vamos ver se podemos dar algum dinamismo e eficiência ao nosso código...*/
var filmes = ["stars wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

for (let i = 0; i < filmes.length; i++) {
    let c = 0 + i;
    let r = filmes[c].toUpperCase();
    console.log(r);
}

// 2.	Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.
function passagemdeelementos(array1, array2) {
    let invalido = array2.pop();
    const qtd = array2.length;
    for (let i = 0; i < qtd; i++) {
        console.log(qtd, " - ", array2.length);
        array1.push(array2.pop().toUpperCase())
    }
    console.log("Esse filme é invalido", invalido);
    return array1
}


//3.	Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro!
// retirar o ultimo usando o pop (tirar o fortinait)




//4.	Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.
const asiaScore = [8, 10, 6, 9, 10, 6, 6, 8, 4,];
const euroScore = [8, 10, 6, 8, 10, 6, 7, 9, 5,];
function compararQualificacoes(cont1, cont2) {
    let comparacoes = [];
    for (let conta = 0; conta < cont1.length; conta++){
        comparacoes[conta] = cont1[conta] == cont2[conta];
    }
    return comparacoes;
}
console.log(compararQualificacoes(asiaScore, euroScore));
