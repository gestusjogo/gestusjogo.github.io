var tela_atual;
var bg_image;
var nome;
var idade;
var first_time_menu = false;
var sauda_inicio = 0;
var inicio_jogo = true;
var saudacoes = false;
var canva_supermercado = false;
var first_time_super = false;
var fase_liberada = false;
first_time_inicio = false;
var primeira_vez_cidade = true;
var primeira_vez_casa = true;
var saudacoes_fim = false;
var aaa = 4;
var temAnimacao = false;
var praca_parte = 'inicio';

var saudacoes = {
	'oi' : false,
	'bom_dia' : false,
	'boa_tarde' : false,
	'boa_noite' : false
};
$(document).ready(function () {
	swal("Ei, psiu!","Se você estiver acessando pelo celular é melhor você tentar pelo compudator, esse joguinho não foi feito pra celular.").then(() => {
		$('.somMenu').click();
	});
	$("#menu").show();
	$('.som').hide();
	$('.somMenu').show();
	$(".tela").hide();
	tela_atual = "#menu";
	bg_image = "bg_inicio";
});
function liberar_cidade(){
	$("#myCanvas").removeClass("bg_blur");
	$('.pin').show();
	$("#parque").hide();
	if(!fase_liberada){
		$("#praca").hide();
	}
}
function bloquear_cidade(){
	$("#myCanvas").addClass("bg_blur");
	$('.pin').hide();
}
function reiniciar_contador_fala(){
	index_dialogo = -1;
}
function triste() {
	var nome = document.forms["formulario_inicio"]["nome"].value;
	var idade = document.forms["formulario_inicio"]["idade"].value;
	alert("Seu nome é "+ nome + " e você tem "+ idade + " anos!");
}

function trocarTela(tela,bg){
	// Esconde a Tela Atual
	fecharModalAnimacao();  
	$(tela_atual).hide();
	tela_atual = tela;
	index_dialogo = -1;
	$(".marina_cutscene").hide();
	$("#butt_voltar_cidade").hide();
	temAnimacao = false;
	$('.som').show();
	if(tela == "#menu"){
		$(".som").hide();
		$(".somMenu").show();
	}else if(tela == "#tela_casa"){
		saudacoes_fim = false;
		sauda_inicio = 0;
		falas();
		$("#seta").hide();
	}else if(tela == "#tela_cidade"){
		fases_completas = (fase_fliperama_completa && fase_supermercado_completa && fase_casa_completa && fase_sorveteria_completa && fase_escola_completa);
		liberar_cidade();
		falas();
	}else if(tela == "#tela_escola"){
		$("#butt_voltar_cidade").show();
		falas();
		$("#game").hide();
	}else if (tela == "#tela_supermercado") {
		$("#butt_voltar_cidade").show();
		$(".item_lista").hide();
		falas();
	}else if (tela == "#tela_fliperama") {
		$("#butt_voltar_cidade").show();
		falas();
	}else if(tela == "#tela_praca"){
		$("#butt_voltar_cidade").show();
		$(".marina_cutscene").show();
		praca_parte = 'inicio';
		falas();
	}else if(tela == "#tela_sorveteria"){
		$("#butt_voltar_cidade").show();
		falas();
	}else if(tela == "#tela_fliperama2"){
		$("#butt_voltar_cidade").show();
		$("#cores").show();
	}else if(tela == "#tela_parque"){
		$("#butt_voltar_cidade").show();
		ambiental_parte = 'inicio';
		ambiental_contador = 0;
		var pontuacao = {
			'vermelho' : 0,
			'azul' : 0,
			'amarelo' : 0,
			'verde' : 0,
			'erros' : 0
		}
		$('#lixo').show();	
		finalizado = false;
		falas();
	}
	// Mostra a Tela Escolhida
	$(tela).show();
	// Remove o Background Imge atual
	$("#myCanvas").removeClass(bg_image);
	// Adiciona o Background da nova tela
	$("#myCanvas").addClass(bg);
	// Altera os valores de Background e Tela Atual para os novos
	bg_image = bg;
}


function animaNumero() {
	var id = document.getElementById("idade").value;
	var lastChar = id.substr(id.length - 1);
	if (lastChar == "" || lastChar == ";" || lastChar == "," || lastChar == "." || lastChar == "/" || lastChar == "~" 
		|| lastChar == "]" || lastChar == "´" || lastChar == "[" || lastChar == "=" || lastChar == "-" || lastChar == "'"
		|| lastChar == " ") {
		document.getElementById("pacote").src = "assets/images/jogador.png";
	}else{
		document.getElementById("pacote").src = "./assets/images/numeros/" + lastChar +".png";
	}
}

function animaLetra() {
	var id = document.getElementById("nome").value;
	var lastChar = id.substr(id.length - 1);
	if (lastChar == "" || lastChar == ";" || lastChar == "," || lastChar == "." || lastChar == "/" || lastChar == "~" 
		|| lastChar == "]" || lastChar == "´" || lastChar == "[" || lastChar == "=" || lastChar == "-" || lastChar == "'"
		|| lastChar == " " || lastChar == "1" || lastChar == "2" || lastChar == "3"  || lastChar == "4" || lastChar == "5"
		|| lastChar == "6" || lastChar == "7" || lastChar =="8" || lastChar =="9" || lastChar == "0") {
		document.getElementById("pacote").src = "assets/images/jogador.png";
	}else{
		var letra = lastChar.toLowerCase();
		document.getElementById("pacote").src = "./assets/images/alfabeto/" + letra + ".png";
	}
}
function falas(){
	$("#dialogo").hide();
	$(".jonas_cutscene_center").hide();
	$("#saudacoes").hide();
	$("#animacao").hide();
	index_dialogo++;
	switch(tela_atual){
		case '#tela_casa':
		if(primeira_vez_casa){
			if(index_dialogo == dialogo[tela_atual]['primeira_vez'].length){
				reiniciar_contador_fala();
				primeira_vez_casa = false;
				$(".jonas_cutscene_center").show();
				$("#saudacoes").show();
			}else{
				$("#dialogo").show();
				if(index_dialogo == 0){
					nome = $("#nome").val();
					idade = $("#idade").val();
					$("#fala").html(dialogo[tela_atual]['primeira_vez'][index_dialogo] + ' ' + nome);
				}else{
					$("#fala").html(dialogo[tela_atual]['primeira_vez'][index_dialogo]);
				}
			}
		}else{
			if(saudacoes_fim){
				if(index_dialogo == dialogo[tela_atual]['saida'].length){
					reiniciar_contador_fala();
					trocarTela('#tela_cidade','bg_menu');
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[tela_atual]['saida'][index_dialogo]);
				}
			}else{
				if(index_dialogo == dialogo[tela_atual]['inicio'].length){
					reiniciar_contador_fala();
					$(".jonas_cutscene_center").show();
					$("#saudacoes").show();
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[tela_atual]['inicio'][index_dialogo]);
					saudacoes_fim = false;
				}
			}
		}
		break;
		case '#tela_cidade':
		primeira_vez_casa = false;
		fases_completas = (fase_fliperama_completa && fase_supermercado_completa && fase_casa_completa && fase_sorveteria_completa && fase_escola_completa);
		if(!fases_completas){
			if(primeira_vez_cidade){
				if(index_dialogo == dialogo[tela_atual]['inicio'].length){
					reiniciar_contador_fala();
					liberar_cidade();
					primeira_vez_cidade = false;
				}else{
					bloquear_cidade();
					$("#dialogo").show();
					$("#fala").html(dialogo[tela_atual]['inicio'][index_dialogo]);
				}
			}else{
				liberar_cidade();
			}
		}else{
			if(!fase_liberada){
				if(index_dialogo == dialogo[tela_atual]['fase_liberada'].length){
					reiniciar_contador_fala();
					fase_liberada = true;
					liberar_cidade();
				}else{

					bloquear_cidade();
					$("#dialogo").show();
					$("#fala").html(dialogo[tela_atual]['fase_liberada'][index_dialogo]);
				}
			}
		}
		break;
		case '#tela_sorveteria':
		if(index_dialogo == dialogo[tela_atual].length){
			reiniciar_contador_fala();
		}else{
			$("#dialogo").show();
			$("#fala").html(dialogo[tela_atual][index_dialogo]);
		}
		break;
		case '#tela_fliperama':
		if(index_dialogo == dialogo[tela_atual].length){
			reiniciar_contador_fala();
			reiniciar_fliperama();
			trocarTela("#tela_fliperama2",'bg_fliperama2');
		}else{
			$("#dialogo").show();
			$("#fala").html(dialogo[tela_atual][index_dialogo]);
		}
		break;
		case '#tela_escola':
		if(index_dialogo == dialogo[tela_atual].length){
			$("#game").show();
			reiniciar_contador_fala();
		}else{
			$("#dialogo").show();
			$("#fala").html(dialogo[tela_atual][index_dialogo]);
		}
		break;
		case '#tela_supermercado':
		if(index_dialogo == dialogo[tela_atual].length){
			reiniciar_contador_fala();
			$(".item_lista").show();
		}else{
			$("#dialogo").show();
			$("#fala").html(dialogo[tela_atual][index_dialogo]);
		}
		break;
		case '#tela_praca':
		$(".formulario_nome").hide();
		$(".formulario_idade").hide();
		if(index_dialogo == dialogo[tela_atual][praca_parte].length){
			reiniciar_contador_fala();
			switch(praca_parte){
				case 'inicio':
				executa_animacao('marina','qual_nome');
				praca_parte = 'qual_nome';
				break;
				case 'qual_nome':
				praca_parte = 'muito_bem_nome';
				$(".marina_cutscene").hide();
				$("#myCanvas").addClass('bg_praca_fundo');
				$(".formulario_nome").show();
				break;
				case 'muito_bem_nome':
				praca_parte = 'qual_idade';
				executa_animacao('marina','qual_idade');
				break;
				case 'qual_idade':
				praca_parte = 'muito_bem_idade';
				$(".marina_cutscene").hide();
				$("#myCanvas").addClass('bg_praca_fundo');
				$(".formulario_idade").show();
				break;
				case 'muito_bem_idade':
				praca_parte = 'prazer_conhecer';
				executa_animacao('marina','prazer_conhecer');
				$(".marina_cutscene").hide();
				break;
				case 'despedida':
				$(".marina_cutscene").hide();
				executa_animacao('jonas','tchau');
				break;
			}
		}else{
			$("#dialogo").show();
			$("#fala").html(dialogo[tela_atual][praca_parte][index_dialogo]);
		}
		break;
		case '#tela_parque' :
		switch(ambiental_parte){
			case 'inicio' :
			if(index_dialogo == dialogo[tela_atual][ambiental_parte].length){
				reiniciar_contador_fala();
				ambiental_reiniciar();
				$("#jogo_ambiental").show();
				ambiental_play = true;
			}else{
				$("#dialogo").show();
				$("#jogo_ambiental").hide();
				ambiental_play = false;
				$("#fala").html(dialogo[tela_atual][ambiental_parte][index_dialogo]);
			}
			break;
			case 'erro_lixeira' :
			if(index_dialogo == dialogo[tela_atual][ambiental_parte].length){
				reiniciar_contador_fala();
				$("#jogo_ambiental").show();
				ambiental_parte = '';
				ambiental_play = true;
			}else{
				$("#dialogo").show();
				$("#jogo_ambiental").hide();
				ambiental_play = false;
				$("#fala").html(dialogo[tela_atual][ambiental_parte][index_dialogo]);
			}
			break;
			case 'erro_chao' :
			if(index_dialogo == dialogo[tela_atual][ambiental_parte].length){
				reiniciar_contador_fala();
				$("#jogo_ambiental").show();
				ambiental_parte = '';
				ambiental_play = true;
			}else{
				$("#dialogo").show();
				$("#jogo_ambiental").hide();
				ambiental_play = false;
				$("#fala").html(dialogo[tela_atual][ambiental_parte][index_dialogo]);
			}
			break;
			case 'final' :
			if(index_dialogo == dialogo[tela_atual][ambiental_parte].length){
				reiniciar_contador_fala();
				trocarTela('#tela_cidade','bg_menu');
			}else{
				$("#dialogo").show();
				$("#jogo_ambiental").hide();
				ambiental_play = false;
				$("#fala").html(dialogo[tela_atual][ambiental_parte][index_dialogo]);
			}
			break;
		}
		break;
	}
}
function isNumberKey(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}
function saudacao_executada(nome) {
	saudacoes[nome] = true;
	var saudacoes_finalizadas = true;
	for(var saudacao in saudacoes){
		if(!saudacoes[saudacao]){
			saudacoes_finalizadas = false;
		}
	}
	if (saudacoes_finalizadas) {
		$("#seta").show();
		saudacoes_fim = true;
		fase_casa_completa = true;
	}
}
function proxima_fala(){
	$("#saudacoes").hide();
	$("#seta").hide();
	falas();
}

function draw_score_cc(s){
	$("#score_cc_text").html("Pontuação: " + s);
}

function voltar_menu(){
	liberar_cidade();
	$('.som').hide();	
	$('.somMenu').show();
	$("#dialogo").hide();
	first_time_inicio = false;
}

function executa_animacao(pessoa, acao){
	temAnimacao = true;
	parar = false;
	var canvas_id = 'animation';
	var animacao_height = 0;
	var animacao_width = 0; 
	var quantidade_sprites = 0;
	$('#nome_animacao').val(acao);
	$("#quem_faz").val(pessoa);

	$("#animacao").show();
	$(".jonas_cutscene_center").hide();
	$(".marina_cutscene").hide();
	$(".item_lista").hide();
	$("#viewport").hide();
	$("#cores").hide();

	var canvas = document.getElementById(canvas_id);
	if (pessoa == 'jonas') {
		canvas.width = 508;
		canvas.height = 516;
		$("#animation").css('left','257px');
		$("#animation").css('top','47px');
	}else if(pessoa == 'marina'){
		canvas.width = 583;
		canvas.height = 592;
		$("#animation").css('left','257px');
		$("#animation").css('top','-30px');
	};

	if(pessoa == 'jonas'){
		animacao_height = 516;
		switch(acao){
			case 'oi':
				animacao_width = 2032;
				quantidade_sprites = 4;
			break;
			case 'bom_dia':
				animacao_width = 6101;
				quantidade_sprites = 12;
			break;
			case 'boa_tarde':
				animacao_width = 6096;
				quantidade_sprites = 12;
			break;
			case 'boa_noite':
				animacao_width = 6604;
				quantidade_sprites = 13;
			break;
			case 'maça':
				animacao_width = 3048;
				quantidade_sprites = 6;
			break;
			case 'agua':
				animacao_width = 7112;
				quantidade_sprites = 14;
			break;
			case 'ovo':
				animacao_width = 3556;
				quantidade_sprites = 7;
			break;
			case 'chocolate':
				animacao_width = 7112;
				quantidade_sprites = 14;
			break;
			case 'queijo':
				animacao_width = 4572;
				quantidade_sprites = 9;
			break;
			case 'amarelo':
				animacao_width = 2032;
				quantidade_sprites = 4;
			break;
			case 'verde':
				animacao_width = 2032;
				quantidade_sprites = 4;
			break;
			case 'azul':
				animacao_width = 3048;
				quantidade_sprites = 6;
			break;
			case 'vermelho':
				animacao_width = 3556;
				quantidade_sprites = 7;
			break;
			case 'tchau':
				animacao_width = 3048;
				quantidade_sprites = 6;
			break;
		}
	}else if(pessoa  == 'marina'){
		animacao_height = 592;
		switch(acao){
			case 'qual_nome':
				animacao_width = 6996;
				quantidade_sprites = 12;
			break;
			case 'qual_idade':
				animacao_width = 7579;
				quantidade_sprites = 13;
			break;
			case 'prazer_conhecer':
				animacao_width = 4081;
				quantidade_sprites = 7;
			break;
		}
	}
	local = "./assets/images/animacoes/"+pessoa+"/"+acao+"_sheet.png";
	anima(pessoa, acao, animacao_width, animacao_height, quantidade_sprites, local, canvas_id, mostrarModalAnimacao);
}