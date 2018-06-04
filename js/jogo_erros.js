var erros_encontrados = [];

function erro_aqui(erro) {
	erros_encontrados.push(erro);

	if(erros_encontrados.length == 10) {
		fim_erros();
	}
}

function fim_erros() {
	alert("Parabéns, você é top!");
}
