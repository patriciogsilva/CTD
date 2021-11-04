
function somar(a, b){ 
    console.log("Dentro da função");
    return(a + b);
}
console.log( somar(10, 5) );


function nomePessoa(nome, idade){//função normal
    return nome+" tem a idade "+idade

}
console.log( nomePessoa("Patricio", 33))


let sub = function(x, y){ //função anonima
    console.log(x - y)
}
sub(10, 5);


