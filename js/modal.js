// JODO DA MEMÓRIA
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var sair = document.getElementsByClassName("sair")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

sair.onclick = function() {
	trocarTela('#tela_menu', 'bg_menu');
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// JODO DO SUPER MERCADO
var modal1 = document.getElementById('voltar_mercado');
var btn1 = document.getElementById("btn_voltar_mercado");
var close1 = document.getElementById("close_mercado");
var sair1 = document.getElementById("sair_mercado");

btn1.onclick = function() {
    modal1.style.display = "block";
}

close1.onclick = function() {
    modal1.style.display = "none";
}

sair1.onclick = function() {
	trocarTela('#tela_menu', 'bg_menu');
    modal1.style.display = "none";
    for (var i = itens_coletados.length - 1; i >= 0; i--) {
        $(itens_coletados[i]).css("text-decoration", "none");
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
}

// JODO DO SUPER MERCADO 2
var modal2 = document.getElementById('voltar_mercado2');
var btn2 = document.getElementById("btn_voltar_mercado2");
var close2 = document.getElementById("close_mercado2");
var sair2 = document.getElementById("sair_mercado2");

btn2.onclick = function() {
    modal2.style.display = "block";
}

close2.onclick = function() {
    modal2.style.display = "none";
}

sair2.onclick = function() {
	trocarTela('#tela_menu', 'bg_menu');
    modal2.style.display = "none";
    for (var i = itens_coletados.length - 1; i >= 0; i--) {
        $(itens_coletados[i]).css("text-decoration", "none");
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}

// JODO DO SUPER MERCADO 2
var modal3 = document.getElementById('voltar_flip');
var btn3 = document.getElementById("btn_voltar_flip");
var close3 = document.getElementById("close_flip");
var sair3 = document.getElementById("sair_flip");

btn3.onclick = function() {
    modal3.style.display = "block";
}

close3.onclick = function() {
    modal3.style.display = "none";
}

sair3.onclick = function() {
	trocarTela('#tela_menu', 'bg_menu');
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal3.style.display = "none";
    }
}


