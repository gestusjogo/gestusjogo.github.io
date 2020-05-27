var erros_encontrados = [];
var sair = false; 
$(".imagem_erro").hide();

var fim_sorveteria = false;
var segundos = 0;
var contar = false;

var tempo1 = 0;
var tempo2 = 0;
window.setInterval(function() {	if(contar){ segundos++;	console.log(segundos); }else{ window.clearInterval(true); } },1);
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
		  contar = false;
  		if(erros_encontrados.length == 2) {
  			if(!multi_jogadores)
  				sair = true;
  			if(jogador_atual.includes('1')){
  				tempo1 = segundos;
  				erros_encontrados = [];
  				$(".imagem_erro").hide();
  				alterarJogador();
  				falas();
  				segundos = 0;
  			}else if(jogador_atual.includes('2')){
  				tempo2 = segundos;
  				fim_sorveteria = true;
  				falas();
  			}
		}
	}

	if (erros_encontrados.length > 0) {
		for (var i = erros_encontrados.length - 1; i >= 0; i--) {
			$(erros_encontrados[i]).show();
		}
	}


	fechar.onclick = function() {
		modal.style.display = "none";
		if($("#dialogo").css('display') != "block"){
			contar = true;
			window.setInterval(function() {	if(contar){ segundos++;	console.log(segundos); }else{ window.clearInterval(true); } },1);
		}
		if(sair == true){
			fimerros();
			sair = false;
			erros_encontrados = [];
			fase_sorveteria_completa = true;
			$("#fim_jogo").show();
			$("#butt_voltar_cidade").hide();
		}
	}
}

function fimerros() {
	for(var i = 0; i < 10; i++){
		$("#x"+i).hide();
	}
}
