
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto 
        /* responsiveVoice.speak (texto, 'Brazilian Portuguese Femele', {rate:1.2}); */
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0} );
} 

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Acerte meu Número da sorte' );
    exibirTextoNaTela('p', 'Entre 1 e 10 qual número estou pensando?');

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
            exibirTextoNaTela ('p','Estou pensando em un Número menor BB.');
        } else {
            exibirTextoNaTela ('p','Não é esse número ele é maior');
        }
        tentativas++;
        limparCampo ();
        
        
    }

        
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt (Math.random () * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementoNaLista == numeroLimite );
        listaDeNumerosSorteados = [];



    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;

    }
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

