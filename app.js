alert("Bem vindo ao jogo do numero secreto!");

let numeroSecreto = 3;
let numeroDigitado = parseInt(prompt('Digite um numero de 0 a 15...'));

if(numeroDigitado === numeroSecreto){ 
    alert('parabens Voce acertou!');
} else if(numeroDigitado<numeroSecreto) {
    alert('Voce errou, o numeroSecreto e maior');
} else {

    alert('Voce errou, o numeroSecreto é menor');    
}