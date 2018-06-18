// FUNÇÕES PARA JOGADOR 1
function animaNumero_j1() {
	var id = document.getElementById("idade_j1").value;
	var lastChar = id.substr(id.length - 1);
	document.getElementById("pacote_j1").src = "./assets/images/numeros/" + lastChar +".png";
}

function animaLetra_j1() {
	var id = document.getElementById("nome_j1").value;
	var lastChar = id.substr(id.length - 1);
	var letra = lastChar.toLowerCase();
	document.getElementById("pacote_j1").src = "./assets/images/alfabeto/" + letra + ".png";
}

// FUNÇÕES PARA JOGADOR 2
function animaNumero_j2() {
	var id = document.getElementById("idade_j2").value;
	var lastChar = id.substr(id.length - 1);
	document.getElementById("pacote_j2").src = "./assets/images/numeros/" + lastChar +".png";
}

function animaLetra_j2() {
	var id = document.getElementById("nome_j2").value;
	var lastChar = id.substr(id.length - 1);
	var letra = lastChar.toLowerCase();
	document.getElementById("pacote_j2").src = "./assets/images/alfabeto/" + letra + ".png";
}