// função declarad

function darOi(){
    console.log("Olá tudo bem?");
}

darOi();

// função expressa

let somar = function(numA, numB ) {
    console.log(numA + numB);
}

somar(10, 20);

// let resultado = somar(1, 2);
console.log(somar(1, 2))

// escopo
function multiplicar(numA, numB) {
    let resultado = numA * numB;
    console.log(resultado);
}