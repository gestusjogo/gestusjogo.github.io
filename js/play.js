var telaAtual;
var bg_image;
var nome;
var idade;

$(document).ready(function () {
	$("#tela1").show();
	$("#tela_inicio").hide();
	$("#tela_menu").hide();
	$("#tela_escola").hide();
	telaAtual = "#tela1";
	bg_image = "bg_tela1";
});

function triste() {
    var nome = document.forms["formulario_inicio"]["nome"].value;
    var idade = document.forms["formulario_inicio"]["idade"].value;
    alert("Seu nome é "+ nome + " e você tem "+ idade + " anos!");
}

function trocarTela(tela,bg){
	// Esconde a Tela Atual
	$(telaAtual).hide();
	// Mostra a Tela Escolhida
	$(tela).show();
	if(tela == "#tela_inicio"){
		nome = $("#nome").val();
		idade = $("#idade").val();
		id_di = 0;
		$("#di_ini").html(dialogo[id_di] + "<i style='color:red'> " + nome + "</i>");
	}
	// Remove o Background Imge atual
	$("#myCanvas").removeClass(bg_image);
	// Adiciona o Background da nova tela
	$("#myCanvas").addClass(bg);
	// Altera os valores de Background e Tela Atual para os novos
	bg_image = bg;
	telaAtual = tela;
}

function animaNumero() {
	var id = document.getElementById("idade").value;
	var lastChar = id.substr(id.length - 1);
	document.getElementById("pacote").src = "./assets/images/numeros/" + lastChar +".png";
}

function animaLetra() {
	var id = document.getElementById("nome").value;
	var lastChar = id.substr(id.length - 1);
	var letra = lastChar.toLowerCase();
	document.getElementById("pacote").src = "./assets/images/alfabeto/" + letra + ".png";
}

function falas(){
	id_di += 1;
	if(id_di <= 10){
		if (id_di == 8) {
			$("#di_ini").html("Mesmo você tendo " + "<i style='color:red'> " + idade + "</i>" + " anos dá pra aprender com facilidade.");	
		} else if(id_di == 10){
			trocarTela('#tela_menu','bg_menu');
		} else {
			$("#di_ini").html(dialogo[id_di]);			
		}	
	}
}

 function isNumberKey(evt){
 	var charCode = (evt.which) ? evt.which : event.keyCode
 	if (charCode > 31 && (charCode < 48 || charCode > 57))
    	return false;
 	return true;
}