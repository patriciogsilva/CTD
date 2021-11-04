/* 
    -VARIÁVEIS, ATRIBUIÇÃO DE VALORES
    -TIPO DE DADOS
    --OPERADORES (ATRIBUIÇÕES E MATEMÁTICOS)
    -FUNÇÕES (DECLARADAS, EXPRESSAS) PARAMETROS POR DEFAULT (PADRÃO)
*/
//NIVEL I
let somar = function(a, b){
    return a+b;
}
let subtrair = function(a,b){
    return a-b;
}
let multiplicar = function(a,b){
    return a*b;
}
let dividir = function(a,b){
    return a/b;
}

console.log("***** NIVEL II *****");

console.log("somar(3,6)");
console.log(somar(3,6));

console.log("dividir(3,6)");
console.log(dividir(3,6));

console.log("multiplicar (3,6)");
console.log(multiplicar(3,6));

console.log("multiplicar (3,0)");
console.log(multiplicar(3,0));

console.log("dividir (3,6)");
console.log(dividir(3,6));

console.log("dividir (3,6)");
console.log(dividir(3,0));
console.log("**********");
 
function  quadradoDeUmNumero(n){
    return multiplicar(n,n)
}

function mediaDeTresNumeros(a,b,c){
    let somarAB = somar(a,b);
    return somar(somarAB,c)/3;

}
function calcularPorcentagem(numero, porcentagem){
   return multiplicar(numero, dividir(porcentagem,100));
}
function geradorDePorcentagem(a, b){
    return dividir(multiplicar(a,100),b)
}

console.log(geradorDePorcentagem(2,200));


