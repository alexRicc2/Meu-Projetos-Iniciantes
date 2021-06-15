var carta1 = {
    nome: 'Luffy',
    imagem: 'https://sm.ign.com/ign_br/screenshot/default/luffy_5fzv.jpg',
    atributos:{
        ataque: 750,
        defesa: 800,
        agilidade: 600,
    }
    
}

var carta2 = {
    nome: 'Zoro',
    imagem: 'https://i.pinimg.com/originals/76/b9/3d/76b93d3a1a0ba058f998b14c1f5547e0.jpg',
    atributos:{
        ataque: 700,
        defesa: 800,
        agilidade: 660
    }
    

}

var carta3 = {
    nome : 'Sanji',
    imagem: 'https://static.wikia.nocookie.net/one-piece-br/images/9/9e/Sanji-one-piece.jpg/revision/latest?cb=20140328183836&path-prefix=pt',
    atributos:{
        ataque: 670,
        defesa: 780,
        agilidade: 600,
    }
    
}

var carta4 = {
    nome: 'Chopper - Básico',
    imagem: 'https://onepiecelendas.files.wordpress.com/2012/08/chopper.jpg',
    atributos: {
        ataque: 10,
        defesa: 10,
        agilidade: 10
    }
}
var carta5 = {
    nome: 'Chopper - Saltador',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/d/d0/Jumping_Point.PNG',
    atributos: {
        ataque: 360,
        defesa: 350,
        agilidade: 600
    }
}

var carta6 = {
    nome: 'Nami',
    imagem: 'https://i.pinimg.com/736x/17/8e/8c/178e8cd1091ef8d4deb3acd59e2e2008.jpg',
    atributos: {
        ataque: 250,
        defesa: 220,
        agilidade: 300
    }
}
var carta7 = {
    nome: 'Gol D Roger',
    imagem: 'https://pbs.twimg.com/media/EM5RVJcWoAAYi0U.jpg',
    atributos: {
        ataque: 10000,
        defesa: 10000,
        agilidade: 10000
    }
}

var carta8 = {
    nome: 'Olhos de Gaviao',
    imagem: 'http://images6.fanpop.com/image/answers/3283000/3283379_1372445524310.99res_420_300.jpg',
    atributos: {
        ataque: 900,
        defesa: 700,
        agilidade: 800
    }
}
var carta9 = {
    nome: 'Buggy - Sem Corpo',
    imagem: 'https://i.pinimg.com/originals/cf/55/db/cf55dbfa9ca328f88a263dc1a359243d.jpg',
    atributos: {
        ataque: 550,
        defesa: 400,
        agilidade: 500
    }
}
var carta10 = {
    nome: 'Usopp',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/1/1c/Usopp_Pre_Timeskip_Portrait.png',
    atributos: {
        ataque: 320,
        defesa: 300,
        agilidade: 600
    }
}




var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]


function sortearCarta() {


    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibirCartaJogador()
    
}
function exibirCartaJogador(){
    
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = '<div id="opcoes" class="carta-status">'

    divCartaJogador.innerHTML = moldura + nome +html+  opcoesTexto + '</div>'
}


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    
    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        
        htmlResultado = '<p class="resultado-final">Venceu</p>'

    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        
        htmlResultado = '<p class="resultado-final">Perdeu</p>'

    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    console.log(cartaMaquina)
    divResultado.innerHTML = htmlResultado

    exibirCartaMaquina()
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = '<div id="opcoes" class="carta-status">'

    divCartaMaquina.innerHTML = moldura + nome +html+  opcoesTexto + '</div>'
}