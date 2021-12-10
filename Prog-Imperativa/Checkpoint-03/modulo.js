// Checpoint 03 - Avaliação final de Programação Imperativa - turma 07.
// Integrantes: Patricio, Thábata, Danielle, Maryanne, Luiz.
//------------------------------------------------------------------------------------------------

function aluno(nome, qtdFalta, notas) {
  this.nome = nome;
  this.falta = qtdFalta;
  this.notas = notas;

  this.calcularMedia = function () {
    let somarNotas = this.notas.reduce((acumulador, valor) => {
      return acumulador + valor;
    });
    return somarNotas / this.notas.length;
  };

  this.faltas = function () {
    return (this.faltas = this.faltas + 1);
  };
}

module.exports = aluno;
