let nome = "  Patricio Silva  ";
console.log( nome.length); // retorna a quantidade de itens

console.log( nome.trim() ); // imprime o texto retirando o espaco no inici e no final

console.log(nome.split(" ") ); // separa os valores

let lista = ["Patricio","Cibele","Cecilia","Valdeci","Cibele",25, true];
console.log(lista[4]); // exibe posição - 4 é a posição do 25 - obs começa do zero
lista [4] = "novo";
console.log(lista); // substitue o valo da posição indicada- entao o valor 4 que era 25 mudou para novo

lista.push("teste"); // Acrecenta itens no final
console.log(lista);

let x = lista.pop(); // elimina o ultimo e retorna ele
console.log(lista);
console.log(x);

let y = lista.shift(); // elimina o primeiro e retorna ele
console.log(lista);
console.log(y);

lista.unshift("Luiz"); // Acrecenta itens no inicio
console.log(lista);

let strLista = lista.join(" * "); // insere um separador - nesse caso estou separanso as palavras com *
console.log(strLista);

console.log( lista.lastIndexOf("Valdeci") );// retorna do final 

console.log( lista.indexOf("Cibele") );//retorna do inicio

console.log( lista.includes("Cecilia") );