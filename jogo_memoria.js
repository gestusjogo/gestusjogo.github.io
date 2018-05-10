var lestra_jogo = [];
var array_letra = ['a.png','b.png','c.png','d.png','e.png','f.png','g.png','h.png','i.png','j.png','k.png','l.png','m.png','n.png','o.png','p.png','q.png','r.png','s.png','t.png','u.png','v.png','w.png','y.png','z.png'];


function jogoMemoria() {	
}

function escolherLetras(){
	for (let i = 0 ; i < 6 ; i++){
	  lestra_jogo.push(getRandom(array_letra));
	}
}

function embaralharMemoria(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
