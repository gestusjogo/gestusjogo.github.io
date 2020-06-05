function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}	
var cor_lixo_jogador1 = '';
var altura_lixeira_jogador1 = 0;
var movimento_lateral_jogador1 = 0;
var ambiental_contador_jogador1 = 0;
var ambiental_parte = 'inicio';
var lixos = ['vermelho','azul','amarelo','verde'];
var lixeiras_jogador1 = {
    'lixeira_vermelho' : {
        'min' : getInfo('.parte_jogador1 #lixeira_vermelho','left'),
        'max' : getInfo('.parte_jogador1 #lixeira_vermelho','left') + 75
    },
    'lixeira_azul' : {
        'min' : getInfo('.parte_jogador1 #lixeira_azul','left'),
        'max' : getInfo('.parte_jogador1 #lixeira_azul','left') + 75
    },
    'lixeira_amarelo' : {
        'min' : getInfo('.parte_jogador1 #lixeira_amarelo','left'),
        'max' : getInfo('.parte_jogador1 #lixeira_amarelo','left') + 75
    },
    'lixeira_verde' : {
        'min' : getInfo('.parte_jogador1 #lixeira_verde','left'),
        'max' : getInfo('.parte_jogador1 #lixeira_verde','left') + 75
    }
}
var pontuacao_jogador1 = {
    'vermelho' : 0,
    'azul' : 0,
    'amarelo' : 0,
    'verde' : 0,
    'erros' : 0
}
var velocidade_caida_jogador1 = 2;
ambiental_play = false;
var finalizado = false;
addEvent(window,"load",function(e) { 
    setInterval(function(){
        if(ambiental_contador_jogador1 <= 4){
            if(getInfo('#lixo1','marginTop') <= 390){
                if(ambiental_play){
                    va = altura_lixeira_jogador1+'px';
                    $("#lixo1").css({'marginTop' : va});
                    altura_lixeira_jogador1 += velocidade_caida_jogador1;
                }
            }else{
                ondeCaiu(1);	
            }
        }else{
            if(!finalizado){
                $('#lixo1').hide();	
                fase_ambiental_completa = true;
                finalizado = !finalizado;
                ambiental_parte = 'final';
                falas();
            }
        }
        velocidade_caida_jogador1 = 2;
    }, 24);
});	
$(document).keydown(function(event){
    if(event.which == 40){
        velocidade_caida_jogador1 = 10;
    }
    if(event.which == 32){
        ambiental_play = !ambiental_play;
    }
    if(event.which == 39){
        movimento_lateral_jogador1 += 20;
    }else if(event.which == 37){
        movimento_lateral_jogador1 -= 20;
    }
    movimento_lateral_jogador1 = limitacoes(1,movimento_lateral_jogador1);
    va = movimento_lateral_jogador1+'px';	
    $("#lixo1").animate({ left: va}, 10, function(){
        semMeios(1);
    });		
});
function semMeios(jogador){
    var inicio = 0;
    var fim = 0;
    var divisor = 0;
    var distancia_inicio = 0;
    var distancia_fim = 0;
    if(jogador == 1){
        for(var i = 0; i < lixos.length; i++){
            if(getInfo('#lixo1','left') > lixeiras_jogador1['lixeira_'+lixos[i]]['min'] && getInfo('#lixo1','left') < lixeiras_jogador1['lixeira_'+lixos[i]]['max']){
                inicio = lixos[i];
                divisor = getInfo('.parte_jogador1 #lixeira_'+lixos[i],'left') + 75;
                break;
            }
        }
        for(var i = 0; i < lixos.length; i++){
            if((getInfo('#lixo1','left')+20) > lixeiras_jogador1['lixeira_'+lixos[i]]['min'] && (getInfo('#lixo1','left')+20) < lixeiras_jogador1['lixeira_'+lixos[i]]['max']){
                fim = lixos[i];
                if(inicio == 0)
                    divisor = getInfo('.parte_jogador1 #lixeira_'+lixos[i],'left');
                break;
            }
        }
        if(inicio != fim && divisor != 0){
            distancia_inicio = divisor-getInfo('#lixo1','left');
            distancia_fim = (divisor-(getInfo('#lixo1','left')+20))*-1;
            if(distancia_inicio < distancia_fim){
                var val = (movimento_lateral_jogador1+distancia_inicio + 1)+'px';
                $("#lixo1").css({'left' : val});
            }else{
                var val = (movimento_lateral_jogador1-distancia_fim)+'px';
                $("#lixo1").css({'left' : val});
            }
        }
    }
}
function ambiental_reiniciar(){
    var inicioAleatorio = Math.floor(Math.random() * 468);	
    movimento_lateral_jogador1 = inicioAleatorio;
    va = movimento_lateral_jogador1+'px';
    if(cor_lixo_jogador1 != ''){
        $('#lixo1').removeClass("lixo_"+cor_lixo_jogador1);
    }
    cor_lixo_jogador1 = lixos[Math.floor(Math.random() * 4)];
    $('#lixo1').addClass("lixo_"+cor_lixo_jogador1);
    $("#lixo1").css({'marginTop' : '0px', 'left' : va});
    semMeios();
    altura_lixeira_jogador1 = 0;
    ambiental_contador_jogador1++;	
}
function ambiental_repetir(){
    var inicioAleatorio = Math.floor(Math.random() * 468);	
    movimento_lateral_jogador1 = inicioAleatorio;
    va = movimento_lateral_jogador1+'px';
    $("#lixo1").css({'marginTop' : '0px', 'left' : va});
    semMeios();
    altura_lixeira_jogador1 = 0;		
}
function limitacoes(jogador,val){
    if(jogador == 1){
        if(val <= 0){
            val = 0;
        }else if(val >= 478){
            val = 478;
        }
}
    return val;
}
function ondeCaiu(jogador){
    var dentro = false;
    var local = getInfo('#lixo1','left');
    for(var i = 0; i < lixos.length; i++){
        if(jogador == 1){
            if(local > lixeiras_jogador1['lixeira_'+lixos[i]]['min'] && local < lixeiras_jogador1['lixeira_'+lixos[i]]['max']){
                if($('#lixo1').hasClass('lixo_'+lixos[i])){
                    pontuacao_jogador1[lixos[i]]++;
                    dentro = true;
                }else{
                    ambiental_parte = 'erro_lixeira';
                }
            }
        }
    }
    if(!dentro){
        if(ambiental_parte != 'erro_lixeira'){
            ambiental_parte = 'erro_chao';
        }
        if(jogador == 1){
            pontuacao_jogador1['erros']++;
        }
        ambiental_repetir();
    }else{
        ambiental_reiniciar();
    }

}
function getInfo(lixeira, attr){
    return Number($(lixeira).css(attr).replace('px',''));
}