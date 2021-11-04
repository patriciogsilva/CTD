function adicao (x, y) {
    return x + y
}

function subtracao (x, y) {
    return x - y
}

function multiplicacao (x, y) {
    return x * y
}

function divisao (x, y) {
    return x / y
}

function quadradoDoNumero(x) {
    return multiplicacao(x, x)
}

function mediaDeTresNumeros(x, y, z) {
    return divisao((adicao(x, y) + z),3)
}

function calculaPorcentagem(a, percentagem) {
    return multiplicacao(divisao(percentagem,100), a)
}

function geradorDePorcentagem(a, b) {
    return multiplicacao(divisao(a,b), 100)
}

console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log(adicao(5,5))
console.log(subtracao(10,5))
console.log(multiplicacao(5,2))
console.log(divisao(10,2))
console.log(quadradoDoNumero(4))
console.log(mediaDeTresNumeros(10,10,10))
console.log(calculaPorcentagem(400, 15))
console.log(geradorDePorcentagem(10, 100))
