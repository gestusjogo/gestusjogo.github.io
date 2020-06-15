	function addEvent(obj, evt, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(evt, fn, false);
		}
		else if (obj.attachEvent) {
			obj.attachEvent("on" + evt, fn);
		}
	}	
	var cor_lixo = '';
	var altura_lixeira = 0;
	var movimento_lateral = 0;
	var ambiental_contador = 0;
	var ambiental_parte = 'inicio';
	var lixos = ['vermelho','azul','amarelo','verde'];
	var lixeiras = {
		'lixeira_vermelho' : {
			'min' : getInfo('lixeira_vermelho','left'),
			'max' : getInfo('lixeira_vermelho','left') + 150
		},
		'lixeira_azul' : {
			'min' : getInfo('lixeira_azul','left'),
			'max' : getInfo('lixeira_azul','left') + 150
		},
		'lixeira_amarelo' : {
			'min' : getInfo('lixeira_amarelo','left'),
			'max' : getInfo('lixeira_amarelo','left') + 150
		},
		'lixeira_verde' : {
			'min' : getInfo('lixeira_verde','left'),
			'max' : getInfo('lixeira_verde','left') + 150
		}
	}
	var pontuacao = {
		'vermelho' : 0,
		'azul' : 0,
		'amarelo' : 0,
		'verde' : 0,
		'erros' : 0
	}
	var velocidade_caida = 2;
	ambiental_play = false;
	var finalizado = false;
	addEvent(window,"load",function(e) { 
		setInterval(function(){
			if(!multi_jogadores){
				if(ambiental_contador <= 4){
					if(getInfo('lixo','marginTop') <= 350){
						if(ambiental_play){
							va = altura_lixeira+'px';
							$("#lixo").css({'marginTop' : va});
							altura_lixeira += velocidade_caida;
						}
					}else{
						ondeCaiu();	
					}
				}else{
					if(!finalizado){
						$('#lixo').hide();	
						fase_ambiental_completa = true;
						finalizado = !finalizado;
						ambiental_parte = 'final';
						falas();
					}
				}
				velocidade_caida = 2;
			}
		}, 24);
	});	
	$(document).keydown(function(event){
		if(!multi_jogadores){
			if(event.which == 40){
				velocidade_caida = 10;
			}
			if(event.which == 32){
				ambiental_play = !ambiental_play;
			}
			if(event.which == 39){
				movimento_lateral += 20;
			}else if(event.which == 37){
				movimento_lateral -= 20;
			}
			movimento_lateral = limitacoes(movimento_lateral);
			va = movimento_lateral+'px';	
			$("#lixo").animate({ left: va}, 10, function(){
				semMeios();
			});		
		}
	});
	function semMeios(){
		
		if(!multi_jogadores){
			var inicio = 0;
			var fim = 0;
			var divisor = 0;
			var distancia_inicio = 0;
			var distancia_fim = 0;
			for(var i = 0; i < lixos.length; i++){
				if(getInfo('lixo','left') > lixeiras['lixeira_'+lixos[i]]['min'] && getInfo('lixo','left') < lixeiras['lixeira_'+lixos[i]]['max']){
					inicio = lixos[i];
					divisor = getInfo('lixeira_'+lixos[i],'left') + 150;
					break;
				}
			}
			for(var i = 0; i < lixos.length; i++){
				if((getInfo('lixo','left')+40) > lixeiras['lixeira_'+lixos[i]]['min'] && (getInfo('lixo','left')+40) < lixeiras['lixeira_'+lixos[i]]['max']){
					fim = lixos[i];
					if(inicio == 0)
					divisor = getInfo('lixeira_'+lixos[i],'left');
					break;
				}
			}
			if(inicio != fim && divisor != 0){
				distancia_inicio = divisor-getInfo('lixo','left');
				distancia_fim = (divisor-(getInfo('lixo','left')+40))*-1;
				if(distancia_inicio < distancia_fim){
					var val = (movimento_lateral+distancia_inicio + 1)+'px';
					$("#lixo").css({'left' : val});
				}else{
					var val = (movimento_lateral-distancia_fim)+'px';
					$("#lixo").css({'left' : val});
				}
			}
		}
	}
	function ambiental_reiniciar(){
		
		if(!multi_jogadores){
			var inicioAleatoria = Math.floor(Math.random() * 940);	
			movimento_lateral = inicioAleatoria;
			va = movimento_lateral+'px';
			if(cor_lixo != ''){
				$('#lixo').removeClass("lixo_"+cor_lixo);
			}
			cor_lixo = lixos[Math.floor(Math.random() * 4)];
			$('#lixo').addClass("lixo_"+cor_lixo);
			$("#lixo").css({'marginTop' : '0px', 'left' : va});
			semMeios();
			altura_lixeira = 0;
			ambiental_contador++;	
		}
	}
	function ambiental_repetir(){
		if(!multi_jogadores){
			var inicioAleatoria = Math.floor(Math.random() * 940);	
			movimento_lateral = inicioAleatoria;
			va = movimento_lateral+'px';
			$("#lixo").css({'marginTop' : '0px', 'left' : va});
			semMeios();
			altura_lixeira = 0;		
		}
	}
	function limitacoes(val){
		
		if(!multi_jogadores){
			if(val <= 0){
				val = 0;
			}else if(val >= 960){
				val = 960;
			}
			return val;
		}
	}
	function ondeCaiu(){
		
		if(!multi_jogadores){
			var dentro = false;
			var local = getInfo('lixo','left');
			for(var i = 0; i < lixos.length; i++){
				if(local > lixeiras['lixeira_'+lixos[i]]['min'] && local < lixeiras['lixeira_'+lixos[i]]['max']){
					if($('#lixo').hasClass('lixo_'+lixos[i])){
						pontuacao[lixos[i]]++;
						dentro = true;
					}else{
						ambiental_parte = 'erro_lixeira';
						falas();
					}
				}
			}
			if(!dentro){
				if(ambiental_parte != 'erro_lixeira'){
					ambiental_parte = 'erro_chao';
					falas();
				}
				pontuacao['erros']++;
				ambiental_repetir();
			}else{
				ambiental_reiniciar();
			}
		}
	}
	function getInfo(lixeira, attr){
		return Number($('#'+lixeira).css(attr).replace('px',''));
	}