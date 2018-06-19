// JODO DA MEMÓRIA
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementById("close_escola");
var sair = document.getElementById("sair_escola");

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
  itens_coletados.length = 0;
  document.getElementById("fim_super").style.display = "none";
  document.getElementById("aprendi_super").style.zIndex = "1";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}

// JODO DO FLIPERAMA
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

// JODO DA SORVETERIA
var modal4 = document.getElementById('voltar_sorveteria');
var btn4 = document.getElementById("btn_voltar_sorveteria");
var close4 = document.getElementById("close_sorveteria");
var sair4 = document.getElementById("sair_sorveteria");

btn4.onclick = function() {
  modal4.style.display = "block";
}

close4.onclick = function() {
  modal4.style.display = "none";
}

sair4.onclick = function() {
	trocarTela('#tela_menu', 'bg_menu');
  for (var i = erros_encontrados.length - 1; i >= 0; i--) {
    $(erros_encontrados[i]).hide();
  }
  erros_encontrados.length = 0;
  sair = false; 
  document.getElementById("fim_erros").style.display = "none"
  document.getElementById("x0").style.zIndex = "0"
  document.getElementById("x1").style.zIndex = "0"
  document.getElementById("x2").style.zIndex = "0"
  document.getElementById("x3").style.zIndex = "0"
  document.getElementById("x4").style.zIndex = "0"
  document.getElementById("x5").style.zIndex = "0"
  document.getElementById("x6").style.zIndex = "0"
  document.getElementById("x7").style.zIndex = "0"
  document.getElementById("x8").style.zIndex = "0"
  document.getElementById("x9").style.zIndex = "0"
  modal4.style.display = "none";
}

// JODO DO FLIPERAMA
var modal5 = document.getElementById('voltar_flip1');
var btn5 = document.getElementById("btn_voltar_flip1");
var close5 = document.getElementById("close_flip1");
var sair5 = document.getElementById("sair_flip1");

btn5.onclick = function() {
  modal5.style.display = "block";
}

close5.onclick = function() {
  modal5.style.display = "none";
}

sair5.onclick = function() {
  trocarTela('#tela_menu', 'bg_menu');
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal5.style.display = "none";
  }
}