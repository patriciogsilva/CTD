//Micro desafios

//Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

function matriz(numbers) {
    var novaMatriz = numbers.reduce(function (init, currentValue) {
        return init + currentValue;
    })
    var result = numbers.map(function (item) {
        return item / novaMatriz;
    })
    return result;
}
console.log(matriz([4, 8, 9, 5, 6, 2, 7]));
//---------------------------------------------------------------------------------------------------------

//Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

function recebeArray(array, wordQuantity) {
    var selecao = array.filter(function (item) {
        return item.length > wordQuantity;
    })
    return selecao;
}
console.log(recebeArray(['Paulo José', 'Ricardo Silva', 'Carol', 'Silvio Camargo', 'Luana Santos', 'josé'], 12));
//---------------------------------------------------------------------------------------------------------

//Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 

var alunos = [
    {
        nome: 'Carol',
        nota: 8
    },

    {
        nome: 'Silvio',
        nota: 9
    },

    {
        nome: 'Gabriel',
        nota: 5
    },

    {
        nome: 'Clara',
        nota: 7
    },

]
function ordemNome(arrayStudents) {
    var ordenarNomes = arrayStudents.sort(function (a, b) {
        return a.nome - b.nome;
    });
    return ordenarNomes;
}
console.log(ordemNome(alunos));

function ordemNota(arrayStudents) {
    var ordenarNotas = arrayStudents.sort(function (a, b) {
        return b.nota - a.nota;
    });
    return ordenarNotas;
}
console.log(ordemNota(alunos));