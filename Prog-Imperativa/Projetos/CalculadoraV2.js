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
/*console.log("***** NIVEL II *****");

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
console.log("**********");*/
 
/* NIVEL III */
function  quadradoDeUmNumero(n){
    return multiplicar(n,n)
}

function mediaDeTresNumeros(a,b,c){
     let somarAB = somar(a,b);
    return somar(somarAB,c)/3;
}

function calcularPorcentagem(numero ,porcentagem){
   return multiplicar(numero, dividir(porcentagem,100));
}

function geradorDePorcentagem(a, b){
    let primeraOperacao = multiplicar(a,100);
    let segundaOperacao = dividir(primeraOperacao,b);
    return segundaOperacao;
    // return dividir(multiplicar(a,100),b)
}

/* console.log("***** NIVEL III *****");

console.log("quadradoDeUmNumero(3)");
console.log(quadradoDeUmNumero(3));

console.log("mediaDeTresNumeros(3,6,9)");
console.log(mediaDeTresNumeros(3,6,9));

console.log("calcularPorcentagem(100, 10)");
console.log(calcularPorcentagem(100, 50)+"%");

console.log("geradorDePorcentagem(30,500)");
console.log(geradorDePorcentagem(30,500));

console.log("**********"); */

/****** -- NIVEL IV -- ******/

let potencia = function(nro,exponente){
    return nro**exponente;
}
function dividirV2(a,b){ 
    return !b && "divisor es cero" || a/b
    // return   b > 0  &&  a/b  || "Dividendo ou divisor é zero";
}


/* console.log("*********NÍVEL IV*********")
console.log("\n")

console.log("potência de 4 elevada ao expoente 2")
console.log(potencia(4,2))
console.log("potência de 3 elevada ao expoente 5")
console.log(potencia(3,5))
console.log("\n")

console.log("VERIFICAÇÕES DE DIVISÃO DE 0")
console.log(dividirV2(30,3))
console.log(dividirV2(30,7))
console.log(dividirV2(30,0))
console.log(dividirV2(0,3))
console.log(dividirV2(0,0))
console.log(dividirV2(10,0))
 */
