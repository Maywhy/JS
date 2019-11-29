var num = 0;

funciton novatarefa(){
    num++;
    var nometarefa = document.getElementById("nomedatarefa").value;
    var novalinha =

        novalinha = novalinha.replace("**numSequencia**", num);
    novalinha = novalinha.replace("**tituloDaTarefa**", nomeTarefa);

    document.getElementById("lista").innerHTML += novalinha;
}