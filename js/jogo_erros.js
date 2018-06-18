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

var fim_erros = document.getElementById("fim_erros");

fim_erros.style.display = "none"


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
		var nome = erros_encontrados.length;
		document.getElementById("imagem_erro").src = "./assets/images/numeros/coloridos/" + nome +".png";
		document.getElementById("numero_erro").innerHTML = nome;
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
			fimerros();
		}
	}
}

function fimerros() {
	//tela_sorveteria.classList.remove("bg_fim");
	fim_erros.style.display = "block"
	document.getElementById("x0").style.zIndex = "-1"
	document.getElementById("x1").style.zIndex = "-1"
	document.getElementById("x2").style.zIndex = "-1"
	document.getElementById("x3").style.zIndex = "-1"
	document.getElementById("x4").style.zIndex = "-1"
	document.getElementById("x5").style.zIndex = "-1"
	document.getElementById("x6").style.zIndex = "-1"
	document.getElementById("x7").style.zIndex = "-1"
	document.getElementById("x8").style.zIndex = "-1"
	document.getElementById("x9").style.zIndex = "-1"
}
