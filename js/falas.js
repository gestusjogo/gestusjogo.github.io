
function falas(){
	$("#dialogo").hide();
	$(".jonas_cutscene_center").hide();
	$("#saudacoes").hide();
	$("#animacao").hide();
	$(".som").hide();
	index_dialogo++;
	switch(tela_atual){
		case '#tela_casa':
		if(!fase_casa_completa){
			if(primeira_vez_casa){
				if(index_dialogo == dialogo[multi_jogadores][tela_atual]['primeira_vez'].length){
					reiniciar_contador_fala();
					primeira_vez_casa = false;
					$(".jonas_cutscene_center").show();
					$("#saudacoes").show();
					$("#butt_pular").hide();
					$(".som").show();
				}else{
					$("#dialogo").show();
					if(index_dialogo == 0){
						nome = $("#nome").val();
						idade = $("#idade").val();
						if(multi_jogadores){
							nome = $("#nome_j1").val();
							idade = $("#idade_j1").val();
							nome2 = $("#nome_j2").val();
							idade2 = $("#idade_j2").val();
							$("#fala").html(dialogo[multi_jogadores][tela_atual]['primeira_vez'][index_dialogo] + ' ' + nome + ' e ' + nome2);
						}else{
							$("#fala").html(dialogo[multi_jogadores][tela_atual]['primeira_vez'][index_dialogo] + ' ' + nome);
						}
					}else{
						$("#fala").html(dialogo[multi_jogadores][tela_atual]['primeira_vez'][index_dialogo]);
					}
					$("#butt_pular").show();
				}
			}else{
				if(index_dialogo == dialogo[multi_jogadores][tela_atual]['inicio'].length){
					reiniciar_contador_fala();
					$(".jonas_cutscene_center").show();
					$("#saudacoes").show();
					$("#butt_pular").hide();
					$(".som").show();
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores][tela_atual]['inicio'][index_dialogo]);
					$("#butt_pular").show();
					saudacoes_fim = false;
				}			
			}
		}else{
			if(saudacoes_fim){
				if(index_dialogo == dialogo[multi_jogadores][tela_atual]['saida'].length){
					reiniciar_contador_fala();
					saudacoes_fim = false;
					trocarTela('#tela_cidade','bg_menu');
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores][tela_atual]['saida'][index_dialogo]);
				}
			}else if(index_dialogo == dialogo[multi_jogadores]['repetir'].length){
				reiniciar_contador_fala();
				$(".jonas_cutscene_center").show();
				$("#saudacoes").show();
				$("#butt_pular").hide();
				$(".som").show();
			}else{
				$("#dialogo").show();
				$("#fala").html(dialogo[multi_jogadores]['repetir'][index_dialogo]);
				$("#butt_pular").show();
			}
		}
		break;
		case '#tela_cidade':
		primeira_vez_casa = false;
		fases_completas = (fase_fliperama_completa && fase_ambiental_completa && fase_supermercado_completa && fase_casa_completa && fase_sorveteria_completa && fase_escola_completa);
		if(!fases_completas){
			if(primeira_vez_cidade){
				if(index_dialogo == dialogo[multi_jogadores][tela_atual]['inicio'].length){
					reiniciar_contador_fala();
					liberar_cidade();
					primeira_vez_cidade = false;
					$("#butt_pular").hide();
					$(".som").show();
				}else{
					bloquear_cidade();
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores][tela_atual]['inicio'][index_dialogo]);
					$("#butt_pular").show();
				}
			}else{
				liberar_cidade();
			}
		}else{
			if(!fase_liberada){
				if(index_dialogo == dialogo[multi_jogadores][tela_atual]['fase_liberada'].length){
					reiniciar_contador_fala();
					fase_liberada = true;
					liberar_cidade();
					$("#butt_pular").hide();
					$(".som").show();
				}else{

					bloquear_cidade();
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores][tela_atual]['fase_liberada'][index_dialogo]);
					$("#butt_pular").show();
				}
			}
		}
		break;
		case '#tela_sorveteria':
		if(!fase_sorveteria_completa || repetir_fase){
			if(multi_jogadores){
				switch(modo_jogo){
					case "versus" : 
						if(fim_fase){
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'].length){
								reiniciar_contador_fala();
								fase_sorveteria_completa = true;
								repetir_fase = false;
								trocarTela('#tela_cidade','bg_menu');
							}else{
								$("#dialogo").show();
								$(".pontuacao").hide();
								if(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo] == "resultado"){
									var resultado = "";
									tempo1 = parseInt(tempo1/1000) + 1;
									tempo2 = parseInt(tempo2/1000) + 1;
									console.log(tempo2);
									if(tempo1 < tempo2){
										resultado = ("Jogador 1 venceu com "+tempo1+" segundos! O Jogador 2 perdeu com "+tempo2+" segundos");
									}else if(tempo2 < tempo1){
										resultado = ("Jogador 2 venceu com "+tempo2+" segundos! O Jogador 1 perdeu com "+tempo1+" segundos");
									}else{
										resultado = ("Jogador 1 e Jogador 2 empataram com "+tempo2+" segundos");
									}
									$("#fala").html(resultado);
								}else{
									$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo]);
								}
								$("#butt_pular").show();
								$(".erros").hide();
							}
						}else{
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo][jogador_atual].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								contar = true;
								window.setInterval(function() {	if(contar){ segundos++;	console.log(segundos); }else{ window.clearInterval(true); } },1);
								$(".erros").show();
								$(".som").show();
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo][jogador_atual][index_dialogo]);
								$("#butt_pular").show();
								$(".erros").hide();
							}
						}
					break;
					case "juntos" : 
						if(fim_fase){
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								fase_sorveteria_completa = true;
								repetir_fase = false;
								trocarTela('#tela_cidade','bg_menu');
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo]);
								$("#game").hide();
								$("#butt_pular").show();
								$(".erros").hide();
							}
						}else{
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								$(".erros").show();
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'][index_dialogo]);
								$("#butt_pular").show();
								$(".erros").hide();
							}
						}
					break;
					default:
						if(index_dialogo == dialogo[multi_jogadores][tela_atual]['inicio'].length){
							reiniciar_contador_fala();
							$("#butt_pular").hide();
							$(".som").show();
							$('#modal_modo_jogo').show();
						}else{
							$("#dialogo").show();
							$("#fala").html(dialogo[multi_jogadores][tela_atual]['inicio'][index_dialogo]);
							$("#butt_pular").show();
							$(".erros").hide();
						}
				}
			}else{
				if(index_dialogo == dialogo[multi_jogadores][tela_atual].length){
					reiniciar_contador_fala();
					$("#butt_pular").hide();
					$(".som").show();
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores][tela_atual][index_dialogo]);
					$("#butt_pular").show();
				}
			}
		}else{
			if(index_dialogo == dialogo[multi_jogadores]['repetir'].length){
				reiniciar_contador_fala();
				$("#butt_pular").hide();
				$(".som").show();
				repetir_fase = true;
				fim_fase = false;
				if(multi_jogadores){
					$('#modal_modo_jogo').show();
				}
			}else{
				$("#dialogo").show();
				$("#fala").html(dialogo[multi_jogadores]['repetir'][index_dialogo]);
				$("#butt_pular").show();
			}
		}
		break;
		case '#tela_fliperama':
		if(!fase_fliperama_completa || repetir_fase){
			if(multi_jogadores){
				switch(modo_jogo){
					case "versus" : 
						if(fim_fase){
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								$(".pontuacao").removeClass("pontuacao_fliperama");
								trocarTela('#tela_cidade','bg_menu');
								fase_fliperama_completa = true;
								repetir_fase = false;
							}else{
								$("#dialogo").show();
								$(".pontuacao").hide();
								if(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo] == "resultado"){
									var pontos1 = parseInt($(".jogador1").find("p:last-child").html());
									var pontos2 = parseInt($(".jogador2").find("p:last-child").html());
									if(pontos1 > pontos2){
										$("#fala").html("O jogador 1 alcançou os "+pontos1+" pontos primeiro!");
									}else{
										$("#fala").html("O jogador 2 alcançou os "+pontos2+" pontos primeiro!");
									}
								}else{
									$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo]);
								}
								$("#butt_pular").show();
							}
						}else{
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								$(".pontuacao .jogador1 p:last-child, .pontuacao .jogador2 p:last-child ").html("0000");
								reiniciar_fliperama();
								trocarTela("#tela_fliperama2",'bg_fliperama2');
								$(".pontuacao").show();
								$(".pontuacao").addClass("pontuacao_fliperama");
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'][index_dialogo]);
								$("#butt_pular").show();
							}
						}
					break;
					case "juntos" : 
						if(fim_fase){
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								trocarTela('#tela_cidade','bg_menu');
								fase_fliperama_completa = true;
								repetir_fase = false;
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo]);
								$("#game").hide();
								$("#butt_pular").show();
							}
						}else{
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								reiniciar_fliperama();
								trocarTela("#tela_fliperama2",'bg_fliperama2');
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'][index_dialogo]);
								$("#butt_pular").show();
							}
						}
					break;
					default:
						if(index_dialogo == dialogo[multi_jogadores][tela_atual]['inicio'].length){
							reiniciar_contador_fala();
							$("#butt_pular").hide();
							$(".som").show();
							$('#modal_modo_jogo').show();
						}else{
							$("#dialogo").show();
							$("#fala").html(dialogo[multi_jogadores][tela_atual]['inicio'][index_dialogo]);
							$("#butt_pular").show();
						}
				}
			}else{
				if(index_dialogo == dialogo[multi_jogadores][tela_atual].length){
					reiniciar_contador_fala();
					reiniciar_fliperama();
					trocarTela("#tela_fliperama2",'bg_fliperama2');
					$("#butt_pular").hide();
					$(".som").show();
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores][tela_atual][index_dialogo]);
					$("#butt_pular").show();
				}
			}
		}else{
			if(index_dialogo == dialogo[multi_jogadores]['repetir'].length){
				reiniciar_contador_fala();
				$("#butt_pular").hide();
				$(".som").show();
				repetir_fase = true;
				fim_fase = false;
				$(".pontuacao .jogador1 p:last-child, .pontuacao .jogador2 p:last-child ").html("0000");
				if(multi_jogadores){
					$('#modal_modo_jogo').show();
				}else{
					trocarTela("#tela_fliperama2",'bg_fliperama2');
				}
			}else{
				$("#dialogo").show();
				$("#fala").html(dialogo[multi_jogadores]['repetir'][index_dialogo]);
				$("#butt_pular").show();
			}
		}
		break;
		case '#tela_escola':
		if(!fase_escola_completa || repetir_fase){
			if(multi_jogadores){
				switch(modo_jogo){
					case "versus" : 
						if(fim_fase){
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								$(".pontuacao").removeClass("pontuacao_escola");
								trocarTela('#tela_cidade','bg_menu');
								fase_escola_completa = true;
								repetir_fase = false;
							}else{
								$("#dialogo").show();
								$(".pontuacao").hide();
								if(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo] == "resultado"){
									var pontos1 = parseInt($(".jogador1").find("p:last-child").html());
									var pontos2 = parseInt($(".jogador2").find("p:last-child").html());
									if(pontos1 > pontos2){
										$("#fala").html("O jogador 1 venceu com "+pontos1+" pontos!");
									}else{
										$("#fala").html("O jogador 2 venceu com "+pontos2+" pontos!");
									}
								}else{
									$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo]);
								}
								$("#game").hide();
								$("#butt_pular").show();
							}
						}else{
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								$("#game").show();
								$(".pontuacao").show();
								$(".pontuacao").addClass("pontuacao_escola");
								$(".pontuacao .jogador1 p:last-child, .pontuacao .jogador2 p:last-child ").html(0);
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'][index_dialogo]);
								$("#butt_pular").show();
							}
						}
					break;
					case "juntos" : 
						if(fim_fase){
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								$(".pontuacao").hide();
								$(".pontuacao").removeClass("pontuacao_escola");
								trocarTela('#tela_cidade','bg_menu');
								fase_escola_completa = true;
								repetir_fase = false;
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['resultado'][index_dialogo]);
								$("#game").hide();
								$("#butt_pular").show();
							}
						}else{
							if(index_dialogo == dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'].length){
								reiniciar_contador_fala();
								$("#butt_pular").hide();
								$(".som").show();
								$("#game").show();
							}else{
								$("#dialogo").show();
								$("#fala").html(dialogo[multi_jogadores][tela_atual][modo_jogo]['inicio'][index_dialogo]);
								$("#butt_pular").show();
							}
						}
					break;
					default:
						if(index_dialogo == dialogo[multi_jogadores][tela_atual]['inicio'].length){
							reiniciar_contador_fala();
							$("#butt_pular").hide();
							$(".som").show();
							$('#modal_modo_jogo').show();
						}else{
							$("#dialogo").show();
							$("#fala").html(dialogo[multi_jogadores][tela_atual]['inicio'][index_dialogo]);
							$("#butt_pular").show();
						}
				}
			}else{
				if(index_dialogo == dialogo[multi_jogadores][tela_atual].length){
					reiniciar_contador_fala();
					$("#butt_pular").hide();
					$(".som").show();
					if(multi_jogadores){
						$('#modal_modo_jogo').show();
					}else{
						$("#game").show();
					}
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores][tela_atual][index_dialogo]);
					$("#butt_pular").show();
				}
			}
		}else{
			if(index_dialogo == dialogo[multi_jogadores]['repetir'].length){
				if(multi_jogadores){
					$('#modal_modo_jogo').show();
				}else{
					$("#game").show();
				}
				reiniciar_contador_fala();
				$("#butt_pular").hide();
				$(".som").show();
				repetir_fase = true;
				fim_fase = false;
			}else{
				$("#dialogo").show();
				$("#fala").html(dialogo[multi_jogadores]['repetir'][index_dialogo]);
				$("#butt_pular").show();
			}
		}
		break;
		case '#tela_supermercado':
		if(!fase_supermercado_completa){
			if(index_dialogo == dialogo[multi_jogadores][tela_atual].length){
				reiniciar_contador_fala();
				$(".item_lista").show();
				$("#butt_pular").hide();
				$(".som").show();
			}else{
				$("#dialogo").show();
				$("#fala").html(dialogo[multi_jogadores][tela_atual][index_dialogo]);
				$("#butt_pular").show();
			}
		}else{
			if(index_dialogo == dialogo[multi_jogadores]['repetir'].length){
				reiniciar_contador_fala();
				$(".item_lista").show();
				$("#butt_pular").hide();
				$(".som").show();
			}else{
				$("#dialogo").show();
				$("#fala").html(dialogo[multi_jogadores]['repetir'][index_dialogo]);
				$("#butt_pular").show();
			}
		}
		break;
		case '#tela_praca':
		$(".formulario_nome").hide();
		$(".formulario_idade").hide();
		if(index_dialogo == dialogo[multi_jogadores][tela_atual][praca_parte].length){
			reiniciar_contador_fala();
			switch(praca_parte){
				case 'inicio':
				executa_animacao('marina','qual_nome');
				praca_parte = 'qual_nome';
				break;
				case 'qual_nome':
				praca_parte = 'muito_bem_nome';
				$(".marina_cutscene").hide();
				$("#myCanvas").addClass('bg_praca_fundo');
				$(".formulario_nome").show();
				break;
				case 'muito_bem_nome':
				praca_parte = 'qual_idade';
				executa_animacao('marina','qual_idade');
				break;
				case 'qual_idade':
				praca_parte = 'muito_bem_idade';
				$(".marina_cutscene").hide();
				$("#myCanvas").addClass('bg_praca_fundo');
				$(".formulario_idade").show();
				break;
				case 'muito_bem_idade':
				praca_parte = 'prazer_conhecer';
				executa_animacao('marina','prazer_conhecer');
				$(".marina_cutscene").hide();
				break;
				case 'despedida':
				$(".marina_cutscene").hide();
				executa_animacao('jonas','tchau');
				break;
			}
		}else{
			$("#dialogo").show();
			$("#fala").html(dialogo[multi_jogadores][tela_atual][praca_parte][index_dialogo]);
		}
		break;
		case '#tela_parque' :
		switch(ambiental_parte){
			case 'inicio' :
			if(!fase_ambiental_completa){
				if(index_dialogo == dialogo[multi_jogadores][tela_atual][ambiental_parte].length){
					reiniciar_contador_fala();
					if(multi_jogadores){
						ambiental_reiniciar_multiplayer(1);
						ambiental_reiniciar_multiplayer(2);
						$("#jogo_ambiental_multiplayer").show();
					}else{
						ambiental_reiniciar();
						$("#jogo_ambiental").show();
					}
					ambiental_play = true;
					$("#butt_pular").hide();
					$(".som").show();
				}else{
					$("#dialogo").show();
					if(multi_jogadores){
						$("#jogo_ambiental_multiplayer").hide();
					}else{
						$("#jogo_ambiental").hide();
					}
					ambiental_play = false;
					$("#fala").html(dialogo[multi_jogadores][tela_atual][ambiental_parte][index_dialogo]);
					$("#butt_pular").show();
				}
			}else{
				if(index_dialogo == dialogo[multi_jogadores]['repetir'].length){
					reiniciar_contador_fala();
					$(".item_lista").show();
					$("#butt_pular").hide();
					$(".som").show();
				}else{
					$("#dialogo").show();
					$("#fala").html(dialogo[multi_jogadores]['repetir'][index_dialogo]);
					$("#butt_pular").show();
				}
			}
			break;
			case 'erro_lixeira' :
			if(index_dialogo == dialogo[multi_jogadores][tela_atual][ambiental_parte].length){
				reiniciar_contador_fala();
				if(multi_jogadores){
					$("#jogo_ambiental_multiplayer").show();
				}else{
					$("#jogo_ambiental").show();
				}
				ambiental_parte = '';
				ambiental_play = true;
			}else{
				$("#dialogo").show();
				if(multi_jogadores){
					$("#jogo_ambiental_multiplayer").hide();
				}else{
					$("#jogo_ambiental").hide();
				}
				ambiental_play = false;
				$("#fala").html(dialogo[multi_jogadores][tela_atual][ambiental_parte][index_dialogo]);
			}
			break;
			case 'erro_chao' :
			if(index_dialogo == dialogo[multi_jogadores][tela_atual][ambiental_parte].length){
				reiniciar_contador_fala();
				if(multi_jogadores){
					$("#jogo_ambiental_multiplayer").show();
				}else{
					$("#jogo_ambiental").show();
				}
				ambiental_parte = '';
				ambiental_play = true;
			}else{
				$("#dialogo").show();
				if(multi_jogadores){
					$("#jogo_ambiental_multiplayer").hide();
				}else{
					$("#jogo_ambiental").hide();
				}
				ambiental_play = false;
				$("#fala").html(dialogo[multi_jogadores][tela_atual][ambiental_parte][index_dialogo]);
			}
			break;
			case 'final' :
			if(index_dialogo == dialogo[multi_jogadores][tela_atual][ambiental_parte].length){
				reiniciar_contador_fala();
				trocarTela('#tela_cidade','bg_menu');
			}else{
				$("#dialogo").show();
				if(multi_jogadores){
					$("#jogo_ambiental_multiplayer").hide();
				}else{
					$("#jogo_ambiental").hide();
				}
				ambiental_play = false;
				$("#fala").html(dialogo[multi_jogadores][tela_atual][ambiental_parte][index_dialogo]);
			}
			break;
		}
		break;
	}
}