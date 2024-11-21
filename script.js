let campoatual = 1;
function obterValor(value) {
  if (campoatual === 1) {
    document.getElementById("Entrada1").value += value;
    campoatual = 2;
  } else {
    document.getElementById("Entrada2").value += value;
    campoatual = 1;
  }
}
function calcular() {
  const num1 = parseFloat(document.getElementById("Entrada1").value);
  const num2 = parseFloat(document.getElementById("Entrada2").value);
  const resul = num1 + num2;
  document.getElementById("result").innerHTML = `Resultado = ${resul}`;
}
function reset() {
  const num1 = parseFloat((document.getElementById("Entrada1").value = ""));
  const num2 = parseFloat((document.getElementById("Entrada2").value = ""));
  document.getElementById("result").innerHTML = "Resultado =";
}

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
