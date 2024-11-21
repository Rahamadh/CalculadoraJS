let campoatual = 1;
let operacao = "soma";
function obterValor(value) {
  if (campoatual === 1) {
    document.getElementById("Entrada1").value += value;
  } else {
    document.getElementById("Entrada2").value += value;
  }
}
function calcular() {
  const num1 = parseFloat(document.getElementById("Entrada1").value || 0);
  const num2 = parseFloat(document.getElementById("Entrada2").value || 0);
  let result;
  switch (operacao) {
    case "soma":
      result = num1 + num2;
      break;
    case "subtracao":
      result = num1 - num2;
      break;
    case "multiplicacao":
      result = num1 * num2;
      break;
    case "divisao":
      result = num1 / num2;
      break;
    default:
      result = "numero invalido";
  }
  document.getElementById("result").innerHTML = `Resultado = ${result}`;
}
function reset() {
  document.getElementById("Entrada1").value = "";
  document.getElementById("Entrada2").value = "";
  document.getElementById("result").innerHTML = "Resultado =";
  campoatual = 1;
}

document.getElementById("add").addEventListener("click", function () {
  operacao = "soma";
  campoatual = 2;
  document.getElementById("Entrada2").focus();
});
document.getElementById("subtract").addEventListener("click", function () {
  operacao = "subtracao";
  campoatual = 2;
  document.getElementById("Entrada2").focus();
});
document.getElementById("multiply").addEventListener("click", function () {
  operacao = "multiplicacao";
  campoatual = 2;
  document.getElementById("Entrada2").focus();
});
document.getElementById("divide").addEventListener("click", function () {
  operacao = "divisao";
  campoatual = 2;
  document.getElementById("Entrada2").focus();
});

document.getElementById("btn1").addEventListener("click", function () {
  obterValor("1");
});
document.getElementById("btn2").addEventListener("click", function () {
  obterValor("2");
});
document.getElementById("btn3").addEventListener("click", function () {
  obterValor("3");
});
document.getElementById("btn4").addEventListener("click", function () {
  obterValor("4");
});
document.getElementById("btn5").addEventListener("click", function () {
  obterValor("5");
});
document.getElementById("btn6").addEventListener("click", function () {
  obterValor("6");
});
document.getElementById("btn7").addEventListener("click", function () {
  obterValor("7");
});
document.getElementById("btn8").addEventListener("click", function () {
  obterValor("8");
});
document.getElementById("btn9").addEventListener("click", function () {
  obterValor("9");
});
document.getElementById("btn0").addEventListener("click", function () {
  obterValor("0");
});
