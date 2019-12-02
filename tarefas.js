var i = 0

function novaTarefa(){

    var texto = document.getElementById("texto").value;

    var tudoJunto = "<div class='input-group mb-3'><div class='input-group-prepend'><div class='input-group-text'><input type='checkbox' aria-label='Checkbox for following text input'></div></div><input type='text' class='form-control' aria-label='Text input with checkbox' value="+texto+"></div>";



    document.getElementById("chamar").innerHTML += tudoJunto; 
}