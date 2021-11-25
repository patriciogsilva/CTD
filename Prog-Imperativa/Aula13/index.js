// 1º Exemplo -- Objeto Literal---------------------------------------

let carro = {
    modelo: "Ford",
    cor: "Branco",
    andar: function() {
        return "carro " +this.modelo+ " andando na cor " +this.cor;
    }
}

console.log(carro.andar() )



// 2º exemplo------------------------------------------------------------

function Carro(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.pular = function(){
        return 'meu '+this.modelo+' está pulando';
    }
}

let carro1 = new Carro('Ford', 'vermelho');
let carro2 = new Carro('Tesla', 'prata');
console.log(carro1);


// JSON-------------------------------------------------------------------
let dadosCarro = {
    "cor" : "branco",
    "placa" : "ssd-2536",
    "qtdPortas" : 4
}
let strCarro = JSON.stringify(dadosCarro);
console.log(dadosCarro);