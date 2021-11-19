// Questão 01
const alicia = [23, 69, 32];
 const bob = [12, 67, 43];

 function encontrarGanhador(a, b) {
    let pontosA = 0;
	let pontosB = 0;

	for (let x = 0	; a.length > x ; x++){
		if (a[x]>b[x]){
			pontosA++;
		} else if (b[x]>a[x]){
			pontosB++;
		}
	}
	console.log('Pontuação do primeiro colocado: '+pontosA);
	console.log('Pontuação do sgundo colocado: '+pontosB);
	console.log('')

 }
 encontrarGanhador(alicia, bob)

