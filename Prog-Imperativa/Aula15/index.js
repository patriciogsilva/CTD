/*SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)*/

function ContaBancaria(conta, tipo, saldo, titular) {
    this.numerodaConta = conta
    this.tipodaConta = tipo
    this.saldodaConta = saldo
    this.titulardaConta = titular
}

//-------------------------------------------------------------------------------------------------
/*2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO8*/
let conta01 = new ContaBancaria(1543268951, "Conta Poupança", 42514, "Cecilia Silva")
let conta02 = new ContaBancaria(1543268952, "Conta Poupança", 52477, "Cibele Costa")
let conta03 = new ContaBancaria(1543268953, "Conta Poupança", 58655, "Iran Gonçalves")
let conta04 = new ContaBancaria(1543268954, "Conta Poupança", 25412, "Silvio Gonçalves")
let conta05 = new ContaBancaria(1543268955, "Conta Poupança", 32542, "Lilian Silva")
let conta06 = new ContaBancaria(1543268956, "Conta Corrente", 24521, "Wilian Costa")
let conta07 = new ContaBancaria(1543268957, "Conta Corrente", 12142, "Wendel Costa")
let conta08 = new ContaBancaria(1543268958, "Conta Corrente", 36252, "Damião Silva")
let conta09 = new ContaBancaria(1543268959, "Conta Corrente", 52152, "Valdeci Gonçalves")
let conta10 = new ContaBancaria(1543268910, "Conta Corrente", 35214, "Luna Silva")


//-------------------------------------------------------------------------------------------------
/*3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS */

let contas = [conta01, conta02, conta03, conta04, conta05, conta06, conta07, conta08, conta09, conta10]

//-------------------------------------------------------------------------------------------------
/*3 4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.*/

let banco = {
    clientes: contas,
}
console.log(banco.clientes[5])

//-------------------------------------------------------------------------------------------------
/*3 5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.*/
