let Agencia = {
    "Nome": "Patricio",
    "Sobrenome": "Silva",
    "Idade": 34,
    "Email": "patricio.gs@hotmail.com"
}


function ContaBancaria(conta, tipo, saldo, titular) {
    this.ContaNumero = conta
    this.ContaTipo = tipo
    this.ContaSaldo = saldo
    this.ContaTitular = titular
}

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


let contas = [conta01, conta02, conta03, conta04, conta05, conta06, conta07, conta08, conta09, conta10]


let banco = {
    clientes: contas,
}
console.log(banco.clientes[5])