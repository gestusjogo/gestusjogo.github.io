//MODAL REPETIR ANIMACAO
$("#fechar_modal_animacao").click(function(){
  fecharModalAnimacao();
});

$("#repetir_animacao").click(function(){
  $('#modal_repetir_animacao').hide();
  executa_animacao($('#quem_faz').val(), $('#nome_animacao').val());
});

function fecharModalAnimacao(){
  $('#modal_repetir_animacao').hide();
  $("#animacao").hide();
  switch(tela_atual){
    case '#tela_casa':
      $(".jonas_cutscene_center").show();
    break;
    case '#tela_fliperama2':      
      $("#viewport").show();
      $("#cores").show();
    break;
    case '#tela_supermercado':
      $(".item_lista").show();
    break;
    case '#tela_praca':
      if(praca_parte == 'qual_nome'){
        falas();
        $(".marina_cutscene").show();
      }else if(praca_parte == 'qual_idade'){
        $(".marina_cutscene").show();
        falas();
      }else if(praca_parte == 'prazer_conhecer'){
        $(".marina_cutscene").show();
        praca_parte = 'despedida';
        falas();
      }else if(praca_parte == 'despedida'){
        $("#modal_reiniciar_jogo").show();
      }
    break;
  }
}
function mostrarModalAnimacao(){
  if(temAnimacao){
    $('#modal_repetir_animacao').show();
  }else{
    fecharModalAnimacao();
  }
}
//MODAL VOLTAR CIDADE
$("#butt_voltar_cidade").click(function(){
  $("#modal_voltar_cidade").show();
});
$("#voltar_cidade").click(function(){
  trocarTela('#tela_cidade', 'bg_menu');
  $("#modal_voltar_cidade").hide();
});
$("#close_voltar_cidade").click(function(){
  $("#modal_voltar_cidade").hide();  
});