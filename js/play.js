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

function animaLetra() {
	var id = document.getElementById("nome").value;
	var lastChar = id.substr(id.length - 1);
	if(lastChar == "a" || lastChar == "A"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/a.png";
	}else if(lastChar == "b" || lastChar == "B"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/b.png";
	}else if(lastChar == "c" || lastChar == "C"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/c.png";
	}else if(lastChar == "d" || lastChar == "D"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/d.png";
	}else if(lastChar == "e" || lastChar == "E"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/e.png";
	}else if(lastChar == "f" || lastChar == "F"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/f.png";
	}else if(lastChar == "g" || lastChar == "G"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/g.png";
	}else if(lastChar == "h" || lastChar == "H"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/h.png";
	}else if(lastChar == "i" || lastChar == "I"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/i.png";
	}else if(lastChar == "j" || lastChar == "J"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/j.png";
	}else if(lastChar == "k" || lastChar == "K"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/k.png";
	}else if(lastChar == "l" || lastChar == "L"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/l.png";
	}else if(lastChar == "m" || lastChar == "M"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/m.png";
	}else if(lastChar == "n" || lastChar == "N"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/n.png";
	}else if(lastChar == "o" || lastChar == "O"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/o.png";
	}else if(lastChar == "p" || lastChar == "P"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/p.png";
	}else if(lastChar == "q" || lastChar == "Q"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/q.png";
	}else if(lastChar == "r" || lastChar == "R"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/r.png";
	}else if(lastChar == "s" || lastChar == "S"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/s.png";
	}else if(lastChar == "t" || lastChar == "T"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/t.png";
	}else if(lastChar == "u" || lastChar == "U"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/u.png";
	}else if(lastChar == "v" || lastChar == "V"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/v.png";
	}else if(lastChar == "w" || lastChar == "W"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/w.png";
	}else if(lastChar == "x" || lastChar == "X"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/x.png";
	}else if(lastChar == "y" || lastChar == "Y"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/y.png";
	}else if(lastChar == "z" || lastChar == "Z"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/z.png";
	}
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