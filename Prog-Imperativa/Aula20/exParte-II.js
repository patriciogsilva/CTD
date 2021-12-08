                                        /*Minha Primeira Aplicação II*/

/*Cada espectador de um cinema respondeu a um questionário no qual constava
sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.*/

var espectadores = [
    {
        idade: "18",
        opinião: "ótimo",
    },
    {
        idade: "16",
        opinião: "bom",
    },
    {
        idade: "15",
        opinião: "bom",
    },
    {
        idade: "19",
        opinião: "regular",
    },
    {
        idade: "18",
        opinião: "ótimo",
    },
    {
        idade: "15",
        opinião: "regular",
    },
    {
        idade: "16",
        opinião: "bom",
    },
    {
        idade: "19",
        opinião: "regular",
    },
    {
        idade: "21",
        opinião: "ótimo",
    },
    {
        idade: "14",
        opinião: "bom",
    },
    {
        idade: "22",
        opinião: "regular",
    },
    {
        idade: "19",
        opinião: "ótimo",
    },
    {
        idade: "16",
        opinião: "bom",
    },
    {
        idade: "21",
        opinião: "ótimo",
    },
    {
        idade: "20",
        opinião: "regular",
    },


];

//Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

//---------------------------------------------------------------------------------------------------------
//● a média das idades das pessoas que responderam ótimo;
//---------------------------------------------------------------------------------------------------------
var idadeMedia = function(group) {
    var pessoas = group.filter((espectadores) => espectadores.opinião == "ótimo");
    var identificador = pessoas.map((espectadores) => Number(espectadores.idade));
    var media = identificador.reduce((media, atual) => 
        Number(((media + atual) / 2).toFixed(2)),
    );
    return media;
}
console.log(
    idadeMedia(espectadores) + " - É a media dos espectadores que opnaram Ótimo!"
);


//---------------------------------------------------------------------------------------------------------
//● a quantidade de pessoas que responderam regular;
//---------------------------------------------------------------------------------------------------------
var qtdPessoas = function (group) {
    quantPessoas = group.filter((espectadores) => espectadores.opinião == "regular");
    return quantPessoas.length;
}
console.log(qtdPessoas(espectadores) + " - É a quantidade de espectadores que opinaram Regular!");

//---------------------------------------------------------------------------------------------------------
//● a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
//---------------------------------------------------------------------------------------------------------
function porcent (group) {
    const porcent = group.filter((espectadores) => espectadores.opinião == "bom");
    return ((porcent.length*100) / espectadores.length) + "%";   
}
console.log(porcent(espectadores) + " - É a porcentagem dos espectadores que tiveram a opinião Bom!");