var vezDoJogador = 1;

function joga(idDiv) {
    var textoInterno = document.getElementById(idDiv).innerHTML;
    if (textoInterno == "")
        if (vezDoJogador == 1) {
            document.getElementById(idDiv).innerHTML;
            vezDoJogador2 = 2;
        }
        else {
            document.getElementById(idDiv).innerHTML
            vezDoJogador = 1;
        }
    }
    mostraVez();

function mostraVez(){
    document.getElementById("rodape").innerHTML = "<h1> Vez do Jogador" + vezDoJogador + "</h1>";
}

