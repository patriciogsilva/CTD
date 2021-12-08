//Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

function acaoCarro(callback){
    return callback
}

function andar(){
    return "carro andando";
}

function parar(){
    return "carro parado";
}

// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

console.log(acaoCarro(parar()))