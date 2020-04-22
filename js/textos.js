//Classe de armazenamento de variaveis dialogo e id_dialogo
var index_dialogo = 0;
var dialogo = {
	'#tela_casa' : {
		'primeira_vez' : [
			"Prazer em te conhecer",
			"Sou o Jonas e vou te ajudar a aprender LIBRAS.",
			"Você sabe o que é LIBRAS?",
			"LIBRAS é a Língua Brasileira de Sinais.",
			"Ela é a segunda língua oficial do Brasil.",
			"E é a língua mais usada pelos surdos do país.",
			"Minha irmã que se chama Marina é surda",
			"E ela que me ensinou LIBRAS.",
			"Agora eu vou ensinar você.",
			"Vamos lá?",
		],
		'inicio' :[
			"Vamos começar com alguns sinais.", 
			"Clique em um dos botões e te mostrarei o sinal."
		],
		'saida' : [
			"Muito bem, agora você sabe algumas saudações",
			"Vamos aprender mais pela cidade?",
		]
	},
	'#tela_cidade' : {
		'inicio' : [
			"Temos muitas coisas para aprender!",
			"Escolha algum local clicando nele.",
		],
		'fase_liberada' : [
			"Agora posso te apresentar minha irmã. Ela está nos esperando na praça, vamos lá!"
		]
	},
	'#tela_sorveteria' : [
		"Da última vez que vim aqui tirei uma foto.",
		"Tente achar 10 objetos que faltam aqui",
		"Clique no local ande o item deveria estar.",
		"Para cada objeto vou te ensinar o sinal do número",
		"Vamos começar?"
	],
	'#tela_fliperama' : [
		"Eu amo jogos e você?",
		"Vamos aprender as cores enquanto nos divertimos?",
		"Nesse jogo seu objetivo é combinar cores iguais",
		"Junte três cores na mesma linha ou coluna",
		"Também posso te ensinar o sinal dessas cores",
		"Basta espertar no botão da cor selecionada"
	],
	'#tela_praca' : {
		'inicio' :[
			"O nome dela é Marina",
			"Ela é surda e só se comunica em LIBRAS",
			"Pode conversar com ela.",
			"Eu vou te ajudar a entender o que ela diz."
		],
		'qual_nome' :[
			"Ela está perguntando o seu nome.",
			"Aperte nas letras do alfabeto e diga seu nome"
		],
		'muito_bem_nome' : [
			"Muito bem!"
		],
		'qual_idade' :[
			"Agora ela quer saber a sua idade.",
			"Aperte nos números e dia a sua idade"
		],
		'muito_bem_idade' : [
			"Muito bem!"
		],
		'despedida' : [
			"Muito bem!",
			"Ela disse que foi um prazer te conhecer",
			"Viu só? Você conseguiu.",
			"Foi bem divertido. Não foi?",
			"Agora está na hora de me despedir",
			"E vou ensinar como diz tchau em LIBRAS"
		]
	},
	'#tela_supermercado' : [
		"Nossa, tenho que comprar algumas coisas",
		"Vou te dar uma lista dos produtos.",
		"Que tal acharmos esses itens no mercado?",
		"É só clicar neles que te ensino o sinal deles"
	],
	'#tela_escola' : [
		"O alfabeto em LIBRAS é muito importante",
		"Eu aprendi com um jogo da memória",
		"Tente imitar o que aparece nas cartas",
		"As setinhas que aparecem são movimentos das mãos",
		"Vamos lá!"
	],
	'#tela_parque' : {
		'inicio' : [
			"Esse parque está imundo! Estou vendo 10 objetos por aqui.",
			"Utilizando as setas do teclado vamos colocar os lixos em sua lixeira correta!",
			"Clicando na seta direita o lixo vai para a direita",
			"Clicando na seta esquerda o lixo vai para a esquerda",
			"Clicando na seta baixo o lixo vai descer mais rápido",
		],
		'erro_lixeira' : [
			"Você errou! Coloque esse lixo na lixeira correta!"
		],
		'erro_chao' : [
			"Você errou! Não devemos deixar nenhum lixo no chão! Coloque esse lixo na lixeira correta!"
		],
		'final' : [
			"Uau! Olha como esse parque ficou mais bonito!",
			"Vou te ensinar ..."
		]
	}

};