// Checpoint 03 - Avaliação final de Programação Imperativa - turma 07.
// Integrantes: Patricio, Thábata, Danielle, Maryanne, Luiz.
//------------------------------------------------------------------------------------------------

const aluno = require("./modulo");

let aluno1 = new aluno("Patricio G. Silva", 2, [9, 9, 9]);
let aluno2 = new aluno("Thábata Carrion", 4, [9, 8, 8]);
let aluno3 = new aluno("Danielle Alves", 3, [6, 5, 7]);
let aluno4 = new aluno("Maryanne Carvalho", 2, [8, 8, 8]);
let aluno5 = new aluno("Luiz de Souza", 1, [9, 10, 6]);

let listadeEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5];

module.exports = listadeEstudantes;
