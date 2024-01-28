function calcularImc() {
    var inputImc = document.getElementById('inputImc').value;
    var inputImc2 = document.getElementById('inputImc2').value;
    var outputImc = inputImc / (inputImc2 * inputImc2);
    document.getElementById('outputImc').innerHTML = `Seu Imc é de: ${outputImc.toFixed(2)}`;
}