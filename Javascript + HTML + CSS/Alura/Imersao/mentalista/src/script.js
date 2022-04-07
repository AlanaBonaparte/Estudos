var numeroSecreto = parseInt(Math.random() * 101);

function Chutar() {
  //cria método pro botão
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value); //pega o elemento do input, retira apenas o "valor" e modifica de string para numero inteiro.

  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Acertou!!! Um novo número foi sorteado, vamos jogar novamente?";
    numeroSecreto = parseInt(Math.random() * 101);
  } else if (chute < 0 || chute > 100) {
    elementoResultado.innerHTML = "Digite apenas números de 0 a 100";
  } else if (chute < numeroSecreto && chute > 0) {
    elementoResultado.innerHTML = "Tente um número maior!";
  } else if (chute > numeroSecreto && chute < 100) {
    elementoResultado.innerHTML = "Tente um número menor!";
  } else {
    elementoResultado.innerHTML = "Errou! Tente Novamente..";
  }
}
