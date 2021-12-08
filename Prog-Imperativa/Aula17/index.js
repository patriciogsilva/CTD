//Micro desafios

//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
var numPares = [2, 4, 6, 8, ];
var numImpar = numPares.map(function(num){

return num + 1;
});

console.log(numImpar);

//-------------------------------------------------------------------------------------------------------------------------------------------

//Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
var nomes = ['Maria Carla', 'Carlos Almeida', 'Jadson Silva', 'Maria Clara', 'Marisa Monte'];

function filterItems(query) {
  return nomes.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('Maria'));

//-------------------------------------------------------------------------------------------------------------------------------------------

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
let total = idades.reduce(function(acumulador, item) {
  return acumulador+' - '+item;
});

console.log(total);



//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”


//-------------------------------------------------------------------------------------------------------------------------------------------

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
var animais = ['Coelho', 'Cachorro', 'canguru'];
animais.forEach(function(animal){

 console.log("O animal é o " + animal);
});
