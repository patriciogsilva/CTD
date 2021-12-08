/*Minha Primeira Aplicação I

//--------------------------------------------------------------------------------------------------------------------------------
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:*/
//--------------------------------------------------------------------------------------------------------------------------------

var pessoas = [
    {
        sexo: "F",
        nome: "Abigael Natte",
        altura: "1.61",
    },
    {
        sexo: "M",
        nome: "Ramon Connell",
        altura: "1.75",
    },
    {
        sexo: "M",
        nome: "Jarret Lafuente",
        altura: "1.55",
    },
    {
        sexo: "F",
        nome: "Ansel Ardley",
        altura: "1.67",
    },
    {
        sexo: "F",
        nome: "Jacki Shurmer",
        altura: "1.75",
    },
    {
        sexo: "M",
        nome: "Jobi Mawtus",
        altura: "1.88",
    },
    {
        sexo: "M",
        nome: "Thomasin Latour",
        altura: "1.67",
    },
    {
        sexo: "F",
        nome: "Lonnie Verheijden",
        altura: "1.63",
    },
    {
        sexo: "M",
        nome: "Alonso Wannan",
        altura: "1.92",
    },
    {
        sexo: "F",
        nome: "Bendite Huggett",
        altura: "1.80",
    },
];

//--------------------------------------------------------------------------------------------------------------------------------
// ● a maior e a menor altura do grupo;
//--------------------------------------------------------------------------------------------------------------------------------

var maiorAltura = function (group) {
    let alturaMais = 0;
    group.forEach((pessoas) => {
        if (pessoas.altura > alturaMais) alturaMais = Number(pessoas.altura);
    });
    return alturaMais;
};
console.log(maiorAltura(pessoas) + " - É a maior altura do grupo!");

var menorAltura = function (group) {
    let alturaMenos = 0;
    group.forEach((pessoas) => {
        if (alturaMenos == 0) alturaMenos = Number(pessoas.altura);
        if (pessoas.altura < alturaMenos) alturaMenos = Number(pessoas.altura);
    });
    return alturaMenos;
};
console.log(menorAltura(pessoas) + " - É a menor altura do grupo!");

//--------------------------------------------------------------------------------------------------------------------------------
// ● a média de altura das mulheres;
//--------------------------------------------------------------------------------------------------------------------------------

var médiadeAlturaF = function (group) {
    var grupoF = group.filter((pessoas) => pessoas.sexo == "F");
    var alturaF = grupoF.map((pessoas) => Number(pessoas.altura));
    var media = alturaF.reduce((media, atual) =>
        Number(((media + atual) / 2).toFixed(2))
    );
    return media;
};
console.log(
    médiadeAlturaF(pessoas) + " - É a média de altura entre as mulheres do grupo!"
);

//--------------------------------------------------------------------------------------------------------------------------------
// ● o número de homens.
//--------------------------------------------------------------------------------------------------------------------------------

var qtdHomens = function (group) {
    grupoM = group.filter((pessoas) => pessoas.sexo == "M");
    return grupoM.length;
};
console.log(qtdHomens(pessoas) + " - É o número de homens do grupo!");
