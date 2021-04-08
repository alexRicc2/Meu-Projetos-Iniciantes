var carta1 = {
    nome: 'pikachu',
    imagem: 'https://viajento.files.wordpress.com/2020/06/pokemon-detetive-pikachu-filme.jpg',
    atributos:{
        attack: 600,
        defesa: 500,
        magic: 200
    }
    
}

var carta2 = {
    nome: 'eren',
    imagem: 'https://static.wikia.nocookie.net/villains/images/4/4c/Eren_meets_Yeagerists.png',
    atributos:{
        attack: 750,
        defesa: 600,
        magic: 100
    }
    

}

var carta3 = {
    nome : 'levi',
    imagem: 'https://i.pinimg.com/originals/e1/1f/06/e11f0644f5cac8de0c875cf246dc35dc.jpg',
    atributos:{
        attack: 1100,
        defesa: 980,
        magic: 666
    }
    
}

var cartas = [carta1, carta2, carta3]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibeCartaJogador()
    exibirOpcoes()
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome

    

}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
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
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu a carta máquina')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Perdeu. Carta da máquina é maior')
    } else {
        alert('Empatou!')
    }
    console.log(cartaMaquina)
}