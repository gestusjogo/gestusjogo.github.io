var itens_coletados = [];
var add_itens = true

function item_encontrado(id) {
	$(id).css({"text-decoration": "line-through", "-webkit-text-decoration-color": "red", "text-decoration-color": "red"});
	
	anima(4);

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
