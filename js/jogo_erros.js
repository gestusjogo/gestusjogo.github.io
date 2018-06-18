var erros_encontrados = [];
var sair = false; 
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
	var modal = document.getElementById('exibir_numero');
	var fechar = document.getElementById("close_numero");

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
  		modal.style.display = "block";
  		if(erros_encontrados.length == 10) {
  			sair = true;
		}
	}

	if (erros_encontrados.length > 0) {
		for (var i = erros_encontrados.length - 1; i >= 0; i--) {
			$(erros_encontrados[i]).show();
		}
	}


	fechar.onclick = function() {
		modal.style.display = "none";
		if(sair == true){
			fim_erros();
		}
	}
}

function fim_erros() {
	alert("Parabéns, você é top!");
}
