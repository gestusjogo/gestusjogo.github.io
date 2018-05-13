var telaAtual;
var bg_image;

$(document).ready(function () {
	$("#tela1").show();
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
	// Remove o Background Imge atual
	$("#myCanvas").removeClass(bg_image);
	// Adiciona o Background da nova tela
	$("#myCanvas").addClass(bg);
	// Altera os valores de Background e Tela Atual para os novos
	bg_image = bg;
	telaAtual = tela;
}

function animaLetra() {
	var id = document.getElementById("nome").value;
	var lastChar = id.substr(id.length - 1);
	if(lastChar == "a"){
		// alert("Você digitou a letra a");
		document.getElementById("pacote").src = "images/alfabeto/a.png";
	}
}