let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto 
} 

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Bem vido a minha plataforma' );
    exibirTextoNaTela('p', 'Compre tudo em apenas um local');

}

exibirMensagemInicial();

function verificarChute() {

    let chute = document.querySelector ('input').value;
    console.log (numeroSecreto);
    console.log (chute == numeroSecreto);  


        if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Deu sorte Acertou.');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        /* document.getElementById ('reiniciar').removeAttribute('disable'); */
        document.getElementById ('reiniciar').removeAttribute('disabled');

        
    } 
    
        
    else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p','Numero é menor BB.');
        } else {
            exibirTextoNaTela ('p','Numero é maior Fi de uma mãe');
        }
        tentativas++;
        limparCampo ();
        
        
    }

        
}

function gerarNumeroAleatorio () {
    return parseInt (Math.random () * 10 + 1);
}
function limparCampo (){
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    /* document.getElementById ('reiniciar').setAttributer ('disabled', true); */
    document.getElementById ('reiniciar').setAttribute('disabled', true);
    

}

