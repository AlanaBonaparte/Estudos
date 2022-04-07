function Converter() {
  var valorElemento = document.getElementById("valor"); //pega todo o elemento da id valor
  var valor = valorElemento.value; // retira somente o que foi digitado na entrada
  var valorEmDolarNumerico = parseFloat(valor); // transforma trasforma o numero de string para racional
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
