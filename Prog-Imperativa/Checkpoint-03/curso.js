// Checpoint 03 - Avaliação final de Programação Imperativa - turma 07.
// Integrantes: Patricio, Thábata, Danielle, Maryanne, Luiz.
//------------------------------------------------------------------------------------------------

const aluno = require("./modulo");
const listadeEstudantes = require("./alunos");

let curso = {
  curso: "Informática",
  notaMinimaParaAprovacao: 6,
  maximodeFaltas: 3,
  estudantes: listadeEstudantes,
  adicionarAluno: function (aluno) {
    this.estudantes.push(aluno);
  },
  verificarAluno: function (aluno) {
    let aprovado;

    if (
      (aluno.falta < this.maximodeFaltas &&
        aluno.calcularMedia() >= this.notaMinimaParaAprovacao) ||
      (aluno.falta == this.maximodeFaltas &&
        aluno.calcularMedia() >= this.notaMinimaParaAprovacao * 1.1)
    ) {
      aprovado = true;
    } else {
      aprovado = false;
    }
    return aluno.nome + " está aprovado? " + aprovado;
  },

  resultados: function (alunos) {
    let arrayResultados = [];

    for (let i = 0; i < alunos.length; i++) {
      arrayResultados[i] = this.verificarAluno(alunos[i]);
    }
    return arrayResultados;
  },
};

console.log(curso.estudantes[0].calcularMedia());
console.log(curso.estudantes);
curso.adicionarAluno(new aluno("Cibele dos Reis", 2, [6, 8, 9]));
console.log(curso.verificarAluno(curso.estudantes[0]));
console.log(curso.resultados(curso.estudantes));