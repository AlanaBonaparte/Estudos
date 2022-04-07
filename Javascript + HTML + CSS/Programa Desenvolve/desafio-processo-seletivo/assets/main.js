let botaoEnviar = document.querySelector('.enviar');

function verifica() {
    let emailInformado = document.getElementById("email").value;
    let mensagemEnviada = document.getElementById("mensagem").value;
    let elementoResposta = document.getElementById("resposta_envio");
    const padraoEmail = /^([A-Za-z0-9\.]{1,32})@[a-z0-9]{1,16}\.com$/


    if (!mensagemEnviada) {
        elementoResposta.innerHTML = "Erro no envio: Insira uma mensagem."
    } else if (!padraoEmail.test(emailInformado)) {
        elementoResposta.innerHTML = "Erro no envio: Endereço de mail inválido."
    } else {
        let nomeInformado = (padraoEmail.exec(emailInformado))[1];
        elementoResposta.innerHTML = "Obrigado pelo contato, " + nomeInformado + ".";
    }
}

botaoEnviar.onclick = verifica;


// console.log(padraoEmail.test("alana@hotmail.com"));
// console.log(padraoEmail.test("alAna@hotmail.com"));
// console.log(padraoEmail.test("alana-bona@hotmail.com"));
// console.log(padraoEmail.test("alana1@hotmail.com"));
// console.log(padraoEmail.test("1alana@hotmail.com"));
// console.log(padraoEmail.test("alana.bona@hotmail.com"));
// console.log(padraoEmail.test("alanaiajndiuawbiwuaheiuohawoiedjawnwahdinuewaiudhiuwahygeauiweiaweawemioawdoiawmdwadwaeaeaw@hotmail.com"));
// console.log(padraoEmail.test("ala_na@hotmail.com"));
// console.log(padraoEmail.test("@hotmail.com"));
// console.log(padraoEmail.test("alana@.com"));
// console.log(padraoEmail.test("alana@ho.tmail.com"));
// console.log(padraoEmail.test("alana@hotmailaweaweadawdadwaeaw.com"));
// console.log(padraoEmail.test("alana@hotmAel.com"));
// console.log(padraoEmail.test("alana@hotmail"));
// console.log(padraoEmail.test("alanahotmail.com"));
// console.log(padraoEmail.test("alana@hotmail.com.br"));
// console.log(padraoEmail.test("alana@hotmail.com1br"));
// console.log(padraoEmail.test("alana@hotmail.com-br"));
// console.log(padraoEmail.test("alana@hot_mail.com"));
// console.log(padraoEmail.test("alana@ho1tmail.com"));
// console.log(padraoEmail.test("alana@"));
// console.log(padraoEmail.test("a.l.a.n.a.@ho1tmail.com"));