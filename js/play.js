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
var saudacoes_finalizadas = false
var multi_jogadores = false;
var jogador_atual = 'jogador1';
var mostrarResultado = false;
var modo_jogo = "";
var repetir_fase = false;
var fim_fase = false;
var saudacoes = {
	'oi' : false,
	'bom_dia' : false,
	'boa_tarde' : false,
	'boa_noite' : false
};
var fim_animacao = true;
function alterarJogador(){
	$("."+jogador_atual).removeClass('jogador_atual');
	if(jogador_atual.includes('1')){
		jogador_atual = jogador_atual.replace("1","2");
	}else if(jogador_atual.includes('2')){
		jogador_atual = jogador_atual.replace("2","1");
	}
	$("."+jogador_atual).addClass('jogador_atual');
}


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
	if(!primeira_vez_cidade){
		$("#butt_pular").hide();
		$('.som').show();
	}
	$('.pin').show();
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

function pular_falas(){
	$("#butt_pular").hide();
	$(".som").show();
	reiniciar_contador_fala();
	$("#dialogo").hide();
	switch(tela_atual){
		case '#tela_casa':
			$(".jonas_cutscene_center").show();
			$("#saudacoes").show();
		break;
		case "#tela_cidade":
			primeira_vez_cidade = false;
			if(fases_completas) fase_liberada = true;
			liberar_cidade();
		break;
		case "#tela_fliperama":
			if(multi_jogadores){
				repetir_fase = true;
				switch(modo_jogo){
					case "versus" :
						if(fim_fase){
							$(".pontuacao").removeClass("pontuacao_fliperama");
							fase_fliperama_completa = true;
							repetir_fase = false;
							fim_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							reiniciar_fliperama(); 
							trocarTela("#tela_fliperama2",'bg_fliperama2');
							$(".pontuacao").show();
							$(".pontuacao").addClass("pontuacao_fliperama");
							$(".pontuacao .jogador1 p:last-child, .pontuacao .jogador2 p:last-child ").html(0);
						}
					break;
					case "juntos" :
						if(fim_fase){
							fase_fliperama_completa = true;
							repetir_fase = false;
							fim_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							reiniciar_fliperama(); 
							trocarTela("#tela_fliperama2",'bg_fliperama2');						
						}
					break;
					default:
						repetir_fase = true;
						fim_fase = false;
						$(".pontuacao .jogador1 p:last-child, .pontuacao .jogador2 p:last-child ").html("0000");
						$('#modal_modo_jogo').show();
				}
			}else{
				reiniciar_fliperama(); 
				trocarTela("#tela_fliperama2",'bg_fliperama2');
			}
		break;
		case "#tela_escola":
			if(multi_jogadores){
				repetir_fase = true;
				switch(modo_jogo){
					case "versus" :
						if(fim_fase){
							$(".pontuacao").removeClass("pontuacao_escola");
							fase_escola_completa = true;
							repetir_fase = false;
							fim_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							$("#game").show();
							$(".pontuacao").show();
							$(".pontuacao").addClass("pontuacao_escola");
							$(".pontuacao .jogador1 p:last-child, .pontuacao .jogador2 p:last-child ").html(0);
						}
					break;
					case "juntos" :
						if(fim_fase){
							fase_escola_completa = true;
							repetir_fase = false;
							fim_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							$("#game").show();
						}
					break;
					default:
						$('#modal_modo_jogo').show();
				}
			}else{
				$("#game").show();
			}
		break;
		case "#tela_sorveteria":
			if(multi_jogadores){
				switch(modo_jogo){
					case "versus" :
						if(fim_fase){
							fase_sorveteria_completa = true;
							repetir_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							contar = true;
							window.setInterval(function() {	if(contar){ segundos++;	console.log(segundos); }else{ window.clearInterval(true); } },1);
							$(".erros").show();
						}
					break;
					case "juntos" :
						if(fim_fase){
							fase_sorveteria_completa = true;
							repetir_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							$(".erros").show();
						}
					break;
					default:
						$('#modal_modo_jogo').show();
				}
			}
		break;
		case "#tela_supermercado":
			$(".item_lista").show();
		break;
		case "#tela_parque":
			if(multi_jogadores){
				switch(modo_jogo){
					case "versus" :
						if(fim_fase){
							fase_ambiental_completa = true;
							repetir_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							iniciar_ambiental_multiplayer();
						}
					break;
					case "juntos" :
						if(fim_fase){
							fase_ambiental_completa = true;
							repetir_fase = false;
							trocarTela('#tela_cidade','bg_menu');
						}else{
							iniciar_ambiental_multiplayer();
						}
					break;
					default:
						$('#modal_modo_jogo').show();
				}		
			}else{
				ambiental_reiniciar();
				$("#jogo_ambiental").show();
			}
			ambiental_play = true;
		break;
	}
}

function trocarTela(tela,bg){
	// Esconde a Tela Atual
	fecharModalAnimacao();  
	$("#myCanvas").removeClass('bg_praca_fundo');
	$(".pontuacao").hide();
	$(tela_atual).hide();
	$("#tela_fliperama2").hide();
	if(tela != "#tela_fliperama2"){
		contar = false;
		segundos = 0;
		tela_atual = tela;
		modo_jogo = null;
		repetir_fase = false;
		fim_fase = false;
		erros_encontrados = [];
		$(".imagem_erro").hide();
		if(jogador_atual.includes('2')){
			alterarJogador();
		}
	}
	index_dialogo = -1;
	$(".marina_cutscene").hide();
	$("#butt_voltar_cidade").hide();
	$(".pontuacao").removeClass("pontuacao_fliperama");
	$(".pontuacao").removeClass("pontuacao_escola");
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
		if(!primeira_vez_cidade){
			liberar_cidade();
		}
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
		$(".som").show();
		$("#cores").show();
	}else if(tela == "#tela_parque"){
		$("#butt_voltar_cidade").show();
		ambiental_parte = 'inicio';
		ambiental_contador = 0;
		if(multi_jogadores){
			var pontuacao_jogador1 = {
				'vermelho' : 0,
				'azul' : 0,
				'amarelo' : 0,
				'verde' : 0,
				'erros' : 0
			}
			var pontuacao_jogador2 = {
				'vermelho' : 0,
				'azul' : 0,
				'amarelo' : 0,
				'verde' : 0,
				'erros' : 0
			}
			$('#lixo1').show();	
			$('#lixo2').show();	
		}else{
			var pontuacao = {
				'vermelho' : 0,
				'azul' : 0,
				'amarelo' : 0,
				'verde' : 0,
				'erros' : 0
			}
			$('#lixo').show();	
		}
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
	if(id.length > 3){
		id = id.substr(0,3);
	}
	document.getElementById("idade").value = id;
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
	id = removeAcento(id);
	if(id.length > 20){
		id = id.substr(0,20);
	}
	document.getElementById("nome").value = id;
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
function isNumberKey(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}
function removeAcento (text){       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    return text;                 
}

function isLetterKey(evt){
	var vogal = removeAcento(evt.key);
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if((vogal == 'a' || vogal == 'e' || vogal == 'i' || vogal == 'o' || vogal == 'u') || (charCode >= 97 && charCode <= 122 || charCode == 231))
		return true;
	return false;

}
function saudacao_executada(nome) {
	saudacoes[nome] = true;
	saudacoes_finalizadas = true;
	for(var saudacao in saudacoes){
		if(!saudacoes[saudacao]){
			saudacoes_finalizadas = false;
		}
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
	fim_animacao = false;
	anima(pessoa, acao, animacao_width, animacao_height, quantidade_sprites, local, canvas_id, fecharModalAnimacao);
}