var itens_coletados = [];
var add_itens = true

function item_encontrado(id) {
	$(id).css({"text-decoration": "line-through", "-webkit-text-decoration-color": "red", "text-decoration-color": "red"});
	
	if (id == ".p1") {
		frameIndex = 0;
		$("#animation1").show();
		aaa = 4;
		anima(4);
	}else if (id == ".p2") {
		$("#animation2").show();
		aaa = 5;
		anima(5);
	}else if (id == ".p3") {
		$("#animation3").show();
		aaa = 6;
		anima(6);
	}else if (id == ".p4") {
		$("#animation5").show();
		aaa = 7;
		anima(7);
	}else if (id == ".p5") {
		$("#animation4").show();
		aaa = 8;
		anima(8);
	}

	if (itens_coletados.length >= 0) {
		for (var i = itens_coletados.length - 1; i >= 0; i--) {
			if (id == itens_coletados[i]){
				add_itens = false;
			}
		}
	}

	if(add_itens){
		itens_coletados.push(id);
  		if(itens_coletados.length == 5) {
  			fim();
		}
	}

}

function fim() {
	alert("Parabéns, você é top!");
}
