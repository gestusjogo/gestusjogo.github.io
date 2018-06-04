var itens_coletados = [];

function item_encontrado(id) {
	$(id).css({"text-decoration": "line-through", "-webkit-text-decoration-color": "red", "text-decoration-color": "red"});
	alert("Aqui tem uma animação daora");
	itens_coletados.push(id);

	if(itens_coletados.length == 5) {
		fim();
	}
}

function fim() {
	alert("Parabéns, você é top!");
}
