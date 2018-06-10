var erros_encontrados = [];
$("#x0").hide();
$("#x1").hide();
$("#x2").hide();
$("#x3").hide();
$("#x4").hide();
$("#x5").hide();
$("#x6").hide();
$("#x7").hide();
$("#x8").hide();
$("#x9").hide();

function erro_aqui(erro) {
	var adicionar = true
	if (erros_encontrados.length >= 0) {
		for (var i = erros_encontrados.length - 1; i >= 0; i--) {
			if (erro == erros_encontrados[i]){
				adicionar = false;
			}
		}
	}

	if(adicionar){
		erros_encontrados.push(erro);
	}

	if(erros_encontrados.length == 10) {
		fim_erros();
	}

	if (erros_encontrados.length > 0) {
		for (var i = erros_encontrados.length - 1; i >= 0; i--) {
			$(erros_encontrados[i]).show();
		}
	}
	console.log(erros_encontrados);
}

function fim_erros() {
	alert("Parabéns, você é top!");
}
