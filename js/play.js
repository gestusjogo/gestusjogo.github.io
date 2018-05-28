var telaAtual;
var bg_image;
var dialogo;
var id_di;

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
		for (var i = 2; i <= 5; i++) {
			dialogo = "#di_ini0";
			id_di = 1;
			$("#di_ini0" + i).hide();	
		}
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
	if(lastChar == "a"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/a.png";
	}else if(lastChar == "b"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/b.png";
	}else if(lastChar == "c"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/c.png";
	}else if(lastChar == "d"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/d.png";
	}else if(lastChar == "e"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/e.png";
	}else if(lastChar == "f"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/f.png";
	}else if(lastChar == "g"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/g.png";
	}else if(lastChar == "h"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/h.png";
	}else if(lastChar == "i"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/i.png";
	}else if(lastChar == "j"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/j.png";
	}else if(lastChar == "k"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/k.png";
	}else if(lastChar == "l"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/l.png";
	}else if(lastChar == "m"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/m.png";
	}else if(lastChar == "n"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/n.png";
	}else if(lastChar == "o"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/o.png";
	}else if(lastChar == "p"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/p.png";
	}else if(lastChar == "q"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/q.png";
	}else if(lastChar == "r"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/r.png";
	}else if(lastChar == "s"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/s.png";
	}else if(lastChar == "t"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/t.png";
	}else if(lastChar == "u"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/u.png";
	}else if(lastChar == "v"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/v.png";
	}else if(lastChar == "w"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/w.png";
	}else if(lastChar == "x"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/x.png";
	}else if(lastChar == "y"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/y.png";
	}else if(lastChar == "z"){
		document.getElementById("pacote").src = "./assets/images/alfabeto/z.png";
	}
}

function falas(){
	$("#di_ini0" + id_di).hide();	
	id_di += 1;
	$("#di_ini0" + id_di).show();	
}