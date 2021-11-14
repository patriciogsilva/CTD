// Crie um array que contenha nomes de produtos para compra.

let compras = ["Fejáo","Farinha","Arroz","Calabreza","Açúcar","Carne","Sal","Biscoito","Café"];

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// Join
let lista = compras.join(" * ");
console.log(lista);
// insere um separador - nesse caso estou separanso as palavras com *

// Pop
let eliminaZ = compras.pop();
console.log(compras);
// elimina o ultimo da lista

// Push
compras.push("Ovos");
console.log(compras);
// Acrescenta um item ao final da lista

// Shift
let eliminaA = compras.shift();
console.log(compras);
// Elimina o primeiro item da lista

// Unshift
compras.unshift("Macarrão");
console.log(compras);
// Acresenta um item ao inicio da lista
