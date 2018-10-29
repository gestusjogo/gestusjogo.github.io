var telaAtual;
var bg_image;
var nome;
var idade;
var first_time_menu = false;
var sauda_inicio = 0;
var saudacoes = false;
var canva_supermercado = false;
var first_time_super = false;
first_time_inicio = false;
var aaa = 4;
 
$(document).ready(function () {

	swal("Ei, psiu!","Se você estiver acessando pelo celular é melhor você tentar pelo compudator, esse joguinho não foi feito pra celular.");
	var x = document.getElementById("myAudio"); 
    
    function sovai() { 
        x.play(); 
    } 
	$("#menu").show();
	$("#tela1").hide();
	$("#tela_escolher_player").hide();
	$("#tela_ajuda").hide();
	$("#tela_infor").hide();
	$("#tela_inicio").hide();
	$("#tela_j1").hide();
	$("#tela_j2").hide();
	$("#tela_menu").hide();
	$("#tela_escola").hide();
	$("#tela_supermercado1").hide();
	$("#tela_supermercado2").hide();
	$("#tela_fliperama").hide();
	$("#tela_fliperama2").hide();
	$("#tela_sorveteria").hide();
	telaAtual = "#menu";
	bg_image = "bg_inicio";
	$("#top").hide();
});

function triste() {
    var nome = document.forms["formulario_inicio"]["nome"].value;
    var idade = document.forms["formulario_inicio"]["idade"].value;
    alert("Seu nome é "+ nome + " e você tem "+ idade + " anos!");
}

function trocarTela(tela,bg){
	// Esconde a Tela Atual
	$(telaAtual).hide();
	if(tela == "#tela_inicio"){
		if (first_time_inicio == false) {
			nome = $("#nome").val();
			idade = $("#idade").val();
			id_di = 0;
			$(".jonas_cutscene1").hide();
			$(".jonas_cutscene").show();
			$("#saudacoes").hide();
			$("#di_ini").html(dialogo[id_di] + " " + nome);
			$("#nextop1").hide();
			$("#dialogo_inicio").show();
			$("#animacaozinha").hide();
			first_time_inicio = true;
			sauda_inicio = 0;
		}else{
			id_di = 10;
			sauda_inicio = 0;
			$("#di_ini").html(dialogo[id_di]);
			$("#nextop1").hide();
			$("#saudacoes").hide();
			$(".jonas_cutscene").hide();
			$(".jonas_cutscene1").show();
			$("#dialogo_inicio").show();
			$("#animacaozinha").hide();
		}
	}else if(tela == "#tela_menu"){
		saudacoes = false;
		if (first_time_menu == false) {
			id_di = 15;
			$("#di_men").html(dialogo[id_di]);
			document.getElementById("casa").style.display = "none";
			document.getElementById("escola").style.display = "none";
			document.getElementById("supermercado").style.display = "none";
			document.getElementById("sorveteria").style.display = "none";
			document.getElementById("volta_menu").style.display = "none";
			document.getElementById("fliperama").style.display = "none";
			first_time_menu = true;
		}else{
			first_time_menu = true;
		}
	}else if(tela == "#tela_escola"){
		$("#game").hide();
		$(".jonas_cutscene").show();
		$("#dialogo_escola").show();
		id_di = 18;
		$("#di_esc").html(dialogo[id_di]);
	}else if (tela == "#tela_supermercado1") {
		if (first_time_super == false) {
			id_di = 30;
			$("#di_sup").html(dialogo[id_di]);
			$("#dialogo_supermercado").show();
			$(".jonas_cutscene").show();
			$("#item1").hide();
			$("#item2").hide();
			$("#item3").hide();
			$("#item4").hide();
			$("#item5").hide();
		}else{
			$("#dialogo_supermercado").hide();
			$(".jonas_cutscene").hide();
			$("#item1").show();
			$("#item2").show();
			$("#item3").show();
			$("#item4").show();
			$("#item5").show();
		}
	}else if (tela == "#tela_fliperama") {
		id_di = 35;
		$(".jonas_cutscene").show();
		$("#di_fli").html(dialogo[id_di]);
	}else if(tela == "#tela_parque"){
		$("#top").show();
	}else if(tela == "#tela_sorveteria"){
		id_di = 24;
		$("#di_sov").html(dialogo[id_di]);
		$("#dialogo_soverteria").show();
		$(".jonas_cutscene").show();
	}else if(tela == "#tela_fliperama2"){
		$("#cores").show();
	}
	// Mostra a Tela Escolhida
	$(tela).show();
	// Remove o Background Imge atual
	$("#myCanvas").removeClass(bg_image);
	// Adiciona o Background da nova tela
	$("#myCanvas").addClass(bg);
	// Altera os valores de Background e Tela Atual para os novos
	bg_image = bg;
	telaAtual = tela;

	if (id_di == 15) {
		$("#myCanvas").removeClass(bg);
		$("#myCanvas").addClass("bg_blur");
	}
	console.log(id_di);
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
	id_di += 1;

	if(id_di <= 14){
		if(id_di == 11){
			$(".jonas_cutscene").hide();
			$(".jonas_cutscene1").show();
			$("#di_ini").html(dialogo[id_di]);	
		}else if(id_di == 12){
			if (saudacoes == false) {
				$("#saudacoes").show();
				$("#dialogo_inicio").hide();
				saudacoes = true;
			} else {
				$("#dialogo_inicio").show();
				$("#di_ini").html(dialogo[id_di]);	
			}
		}else if(id_di == 14){
			trocarTela('#tela_menu','bg_menu');
			$("#di_ini").html(dialogo[id_di]);	
		} else {
			$("#di_ini").html(dialogo[id_di]);			
		}	
	}else if(id_di <= 16){

		if (id_di == 16) {
			$("#dialogo_menu").hide();
			$("#myCanvas").removeClass("bg_blur");
			$("#myCanvas").addClass("bg_menu");
			document.getElementById("casa").style.display = "block";
			document.getElementById("volta_menu").style.display = "block";
			document.getElementById("escola").style.display = "block";
			document.getElementById("supermercado").style.display = "block";
			document.getElementById("sorveteria").style.display = "block";
			document.getElementById("fliperama").style.display = "block";
		}else{
			$("#di_men").html(dialogo[id_di]);
		}
	}else if(id_di <= 23){
		$("#di_esc").html(dialogo[id_di]);
		if (id_di == 23) {
			$("#dialogo_escola").hide();
			$(".jonas_cutscene").hide();
			$("#game").show();
		}
	}else if(id_di <= 29){
		$("#di_sov").html(dialogo[id_di]);
		if (id_di == 29) {
			$("#dialogo_soverteria").hide();
			$(".jonas_cutscene").hide();
		}
	}else if(id_di <=34){
		$("#di_sup").html(dialogo[id_di]);
		if (id_di == 34) {
			$("#dialogo_supermercado").hide();
			$(".jonas_cutscene").hide();
			$("#item1").show();
			$("#item2").show();
			$("#item3").show();
			$("#item4").show();
			$("#item5").show();
		}
	}else if(id_di <= 42){
		$("#di_fli").html(dialogo[id_di]);
		if(id_di == 42){
			trocarTela('#tela_fliperama2', 'bg_fliperama2');
		}
	}
	console.log(id_di);
}

 function isNumberKey(evt){
 	var charCode = (evt.which) ? evt.which : event.keyCode
 	if (charCode > 31 && (charCode < 48 || charCode > 57))
    	return false;
 	return true;
}

$("#tela_fliperama").show(function() { 
   loadGame();
});

$("#main").show(function() { 
   runme.call(this, this)
});

function f_saudacoes() {
	sauda_inicio += 1;
	if (sauda_inicio == 1) {
		$(".jonas_cutscene1").hide();
		$("#animacaozinha").show();
	}else if (sauda_inicio == 4) {
		$("#nextop1").show();
	}
}

function nextop(){
	$("#saudacoes").hide();
	$("#animacaozinha").hide();
	$(".jonas_cutscene").show();
	$("#nextop1").hide();
	id_di = 11;
	sauda_inicio = 0;
	falas();
}

function draw_score_cc(s){
	$("#score_cc_text").html("Pontuação: " + s);
}

function voltarmenu(){
	first_time_inicio = false;
}

function sumir_candy(bc){
	var r = bc - 3;
	$("#viewport").hide();
	$("#cores").hide();
	$("#animation"+r).show();
}