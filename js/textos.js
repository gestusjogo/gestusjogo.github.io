//Classe de armazenamento de variaveis dialogo e id_dialogo
var index_dialogo = 0;
var dialogo = {
	"false" : {
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
			"Clique no local onde o item deveria estar.",
			"Para cada objeto vou te ensinar o sinal do número",
			"Vamos começar?"
		],
		'#tela_fliperama' : [
			"Eu amo jogos e você?",
			"Vamos aprender as cores enquanto nos divertimos?",
			"Nesse jogo seu objetivo é combinar cores iguais",
			"Junte três cores na mesma linha ou coluna",
			"Também posso te ensinar o sinal dessas cores",
			"Basta clicar no botão da cor selecionada"
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
				'Nossa, eu adorava vir a esse parque, mas ele está tão sujo.',
				'O que será que aconteceu? Será que as pessoas não percebem que isso prejudica o meio ambiente?',
				'Todos devemos fazer a nossa parte para preservar o meio ambiente',
				'E com pequenas ações todo mundo pode ajudar.',
				'Que tal se a gente ajudasse as pessoas a cuidar do parque?',
				'Jogar o lixo no canto certo é uma ação que ajuda bastante na preservação',
				'E a separação desse lixo pela coleta seletiva também é uma maneira de ajudar.',
				'Quando separamos o lixo em garantimos que eles cheguem ao destino adequado',
				'E chegando no destino adequado, ele pode ser reciclado com mais facilidade',
				'Ah, você sabia que coleta seletiva divide em cores para facilitar o tipo de lixo?',
				'Vermelho é para o plástico. Azul é para o papel. Amarelo é para o metal e verde é para o vidro.',
				'Agora que você já sabe disso. Vamos começar a separar os lixos?',
				'Você pode usar as teclas do seu computador para jogar o lixo no canto certo',
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
		},
		"repetir" : [
			"Ei, Já passamos por aqui!",
			"Mas pode explorar o local se quiser."
		]
	},
	"true" : { 
		'#tela_casa' : {
			'primeira_vez' : [
				"Prazer em conhecer vocês ",
				"Sou o Jonas e vou lhes ajudar a aprender LIBRAS.",
				"Vocês sabem o que é LIBRAS?",
				"LIBRAS é a Língua Brasileira de Sinais.",
				"Ela é a segunda língua oficial do Brasil.",
				"E é a língua mais usada pelos surdos do país.",
				"Minha irmã que se chama Marina é surda",
				"E ela que me ensinou LIBRAS.",
				"Agora eu vou ensinar vocês.",
				"Vamos lá?",
			],
			'inicio' :[
				"Vamos começar com alguns sinais.", 
				"Cliquem em um dos botões e mostrarei o sinal."
			],
			'saida' : [
				"Muito bem, agora vocês sabem algumas saudações",
				"Vamos aprender mais pela cidade?",
			]
		},
		'#tela_cidade' : {
			'inicio' : [
				"Temos muitas coisas para aprender!",
				"Escolham algum local clicando nele.",
			],
			'fase_liberada' : [
				"Agora posso lhes apresentar minha irmã. Ela está nos esperando na praça, vamos lá!"
			]
		},
		'#tela_sorveteria' : {
			"inicio" : [
				"Da última vez que vim aqui tirei uma foto.",
				"Tentem achar 10 objetos que faltam aqui",
				"Cliquem no local onde o item deveria estar.",
				"Para cada objeto vou lhes ensinar o sinal do número",
			],
			"versus" : {
				"jogador1" : [
					"Vamos ver quem consegue encontrar todos os itens em menor tempo?",
					"Não se esqueçam de imitar o sinal do número",
					"Fiquem tranquilos, o tempo não é contado enquanto o sinal estiver na tela",
					"Vamos começar com o jogador 1! Jogador 2 vire de costas ou feche os olhos. Sem espiar!",
					"Vamos lá!"
				],
				"jogador2" : [
					"Agora é a vez do jogador 2! Jogador 1 vire de costas ou feche os olhos. Sem espiar!",
					"Vamos lá!"
				],
				"resultado" : [
					"Quem será o vencedor?",
					"resultado",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			},
			"juntos" : {
				"inicio" : [
					"Vamos ver em quanto tempo vocês encontram todos?",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Vocês conseguiram encontrar todos os itens!",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			}
		},
		'#tela_fliperama' : {
			"inicio" : [
				"Eu amo jogos e vocês?",
				"Vamos aprender as cores enquanto nos divertimos?",
				"Nesse jogo o objetivo é combinar cores iguais",
				"Juntem três cores na mesma linha ou coluna",
				"Também posso lhes ensinar o sinal dessas cores",
				"Basta clicar no botão da cor selecionada"
			],
			"versus" : {
				"inicio" : [
					"Vamos ver quem consegue alcançar 2000 pontos primeiro!",
					"Cada um tem sua vez de jogar, a marca mostra de quem é a vez.",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Quem será o vencedor?",
					"resultado",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			},
			"juntos" : {
				"inicio" : [
					"Temos alcançar 2000 pontos jogando juntos!",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Vocês conseguiram encontrar todos os pares!",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			}
		},
		'#tela_praca' : {
			'inicio' :[
				"O nome dela é Marina",
				"Ela é surda e só se comunica em LIBRAS",
				"Podem conversar com ela.",
				"Eu vou lhes ajudar a entender o que ela diz."
			],
			'qual_nome' :[
				"Ela está perguntando o nome de vocês.",
				"Apertem nas letras do alfabeto e diga seu nome um de cada vez"
			],
			'muito_bem_nome' : [
				"Muito bem!"
			],
			'qual_idade' :[
				"Agora ela quer saber a idade de vocês.",
				"Apertem nos números e dia a sua idade um de cada vez"
			],
			'muito_bem_idade' : [
				"Muito bem!"
			],
			'despedida' : [
				"Muito bem!",
				"Ela disse que foi um prazer conhecer vocês",
				"Viu só? Vocês conseguiram.",
				"Foi bem divertido. Não foi?",
				"Agora está na hora de me despedir",
				"E vou lhes ensinar como diz tchau em LIBRAS"
			]
		},
		'#tela_supermercado' : [
			"Nossa, tenho que comprar algumas coisas",
			"Vou dar para vocês uma lista dos produtos.",
			"Que tal acharmos esses itens no mercado?",
			"É só clicar neles que eu ensino o sinal"
		],
		'#tela_escola' : {
			"inicio" : [
				"O alfabeto em LIBRAS é muito importante",
				"Eu aprendi com um jogo da memória",
				"Tentem imitar o que aparece nas cartas",
				"As setinhas que aparecem são movimentos das mãos"
			],
			"versus" : {
				"inicio" : [
					"Vamos ver quem consegue encontrar mais pares!",
					"Cada um tem sua vez de jogar, a marca mostra de quem é a vez.",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Quem será o vencedor?",
					"resultado",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			},
			"juntos" : {
				"inicio" : [
					"Vamos encontrar todos os pares juntos!",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Vocês conseguiram encontrar todos os pares!",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			}
		},
		'#tela_parque' : {
			'inicio' : [
				'Nossa, eu adorava vir a esse parque, mas ele está tão sujo.',
				'O que será que aconteceu? Será que as pessoas não percebem que isso prejudica o meio ambiente?',
				'Todos devemos fazer a nossa parte para preservar o meio ambiente',
				'E com pequenas ações todo mundo pode ajudar.',
				'Que tal se a gente ajudasse as pessoas a cuidar do parque?',
				'Jogar o lixo no canto certo é uma ação que ajuda bastante na preservação',
				'E a separação desse lixo pela coleta seletiva também é uma maneira de ajudar.',
				'Quando separamos o lixo em garantimos que eles cheguem ao destino adequado',
				'E chegando no destino adequado, ele pode ser reciclado com mais facilidade',
				'Ah, você sabia que coleta seletiva divide em cores para facilitar o tipo de lixo?',
				'Vermelho é para o plástico. Azul é para o papel. Amarelo é para o metal e verde é para o vidro.',
				'Agora que vocês já sabem disso. Vamos começar a separar os lixos?',
				'Vocês podem usar as teclas do seu computador para jogar o lixo no canto certo',
			],
			'versus' : {
				"inicio" : [
				"Vamos ver quem consegue colocar todos os lixos no local correto primeiro?",
				"Jogador 1 você joga na parte da esquerda",
				"Clicando na tecla D o lixo vai para a direita",
				"Clicando na tecla A o lixo vai para a esquerda",
				"Clicando na tecla S o lixo vai cair mais rápido",
				"Jogador 2 você joga na parte da direita",
				"Clicando na seta direita o lixo vai para a direita",
				"Clicando na seta esquerda o lixo vai para a esquerda",
				"Clicando na seta baixo o lixo vai cair mais rápido",
				"Vamos lá!"
				],
				'resultado' : [
					'Uau! Olha como esse parque ficou mais bonito!',
					"resultado",
					"Temos outros lugares para explorar! Vamos lá!"
				]
			},
			'juntos' : {
				'inicio' : [
					"Temos que colocar todos os lixos no local correto",
					"Jogador 1 você joga na parte da esquerda",
					"Clicando na tecla D o lixo vai para a direita",
					"Clicando na tecla A o lixo vai para a esquerda",
					"Clicando na tecla S o lixo vai cair mais rápido",
					"Jogador 2 você joga na parte da direita",
					"Clicando na seta direita o lixo vai para a direita",
					"Clicando na seta esquerda o lixo vai para a esquerda",
					"Clicando na seta baixo o lixo vai cair mais rápido",
					"Vamos lá!"
				],
				'resultado' : [
					'Uau! Olha como esse parque ficou mais bonito!',
					"Vocês trabalharam muito bem juntos!",
					"Temos outros lugares para explorar! Vamos lá!"
				]
			},
			'final' : [
				"Uau! Olha como esse parque ficou mais bonito!",
				"Vou lhes ensinar ..."
			]
		},
		"repetir" : [
			"Ei, Já passamos por aqui!",
			"Mas podem explorar o local se quiser."
		]
	}
};