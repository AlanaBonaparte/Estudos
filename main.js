var loginCadastrado = "desenvolve";
var senhaCadastrada = "123";

function comparaLoginSenha(loginInformado, senhaInformada) {
    if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {
        alert("Bem-vindo ao sistema " + loginInformado);
    } else {
        alert("Login ou senha inválido. Tente novamente!");
    }
}

let botaoEntrar = document.querySelector('.botao_entrar');

botaoEntrar.onclick = function() {

    let loginInformado = document.getElementById("login").value;
    let senhaInformada = document.getElementById("password").value;

    comparaLoginSenha(loginInformado, senhaInformada);
}