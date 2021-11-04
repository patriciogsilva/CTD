// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function converterPLemCM(polegada) {
    return polegada * 2.54
}
console.log(converterPLemCM(100));

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function site (nome) {
    return "http://www."+nome+".com.br"
}
console.log(site("funcaojs"))

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function Declaracao(string) {
    return `${string}!`
}
console.log(Declaracao("Eu te amo"))

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function cachorroIdade(age) {
    return age * 7
}
console.log(cachorroIdade(3))

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.
function horaValor(salary) {
    return salary / 160  + " Valor da Hora"
}
console.log(horaValor(1400))

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.
//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
function calculadoradeIMC(altura, peso){
    return peso / (altura*altura)
}
console.log(calculadoradeIMC(1.54,53));

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
function minusculaMaiuscula(nome){
    return nome.toUpperCase()
}
console.log(minusculaMaiuscula("patricio"));

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste
// parâmetro. Dica: Isso te ajudará a entender o que o operador typeof faz
function dados(casa){
    return casa.typeof()
}
console.log(dados(""))
