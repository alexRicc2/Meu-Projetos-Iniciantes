var carta1 = {
    nome: 'pikachu',
    atributos:{
        attack: 600,
        defesa: 500,
        magic: 200
    }
    
}

var carta2 = {
    nome: 'eren',
    atributos:{
        attack: 750,
        defesa: 600,
        magic: 100
    }
    

}

var carta3 = {
    nome : 'levi',
    atributos:{
        attack: 1100,
        defesa: 980,
        magic: 666
    }
    
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina
var cartaJogador

function sortearCarta(){
    var numeroCarta = parseInt(Math.random() *3)
    cartaMaquina = cartas[numeroCarta]
    cartaJogador = cartas[numeroCarta]

    while(cartaJogador == cartaMaquina){
        numeroCarta = parseInt(Math.random()*3)
        cartaJogador = cartas[numeroCarta]
    }
    console.log(cartaJogador)
    //console.log(cartaMaquina)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type= 'radio' name = 'atributo' value = '" + atributo + "'>" + atributo
        console.log(atributo)
    }
    opcoes.innerHTML = opcoesTexto
}
function obtemAtributo(){
    var radioAtributo = document.getElementsByName('atributo')
    for( var i =0; i < radioAtributo.length; i++){
        if (radioAtributo[i].checked){
            console.log(radioAtributo[i].value)
            return radioAtributo[i].value
        }
    }
}
function jogar(){
    var atributoSelecionado = obtemAtributo()
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        alert('Voce venceu')
    }
    else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert('A maquina venceu')
    }
    else{
        alert('O jogo empatou')
    }
    console.log(cartaMaquina)
}