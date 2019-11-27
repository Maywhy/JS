function calcularImposto() {
    var sal = document.getElementById("salario").value;
    var imposto;

    if (sal < 1000) {
        imposto = 0;
        console.log("Insento de imposto");
    }
    else if (sal >= 1000 && sal < 2500) {
        imposto = sal * 0.125;
        console.log("Imposto de 12.5%");
    }
    else if (sal >= 2500 && sal < 5000) {
        imposto = sal * 0.25;
        console.log("Imposto de 25%");
    }
    else if (sal > 5000) {
        imposto = 1300;
        console.log("Desconto de 1300");
    }
    return imposto;
}
function totalizarEExibir() {
    var salarioBruto = document.getElementById("salario").value;
    console.log("Salario bruto obtido = " + salarioBruto);
    var imposto = calcularImposto();
    console.log("Imposto devido = " + imposto);
    var salarioLiquido = salarioBruto - imposto;
    document.getElementById("resultado").innerHTML = "Imposto devido R$ "+imposto + "<br/>" + "Salario Liquido R$ " + salarioLiquido + "<br/>";
}
