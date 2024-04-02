
function numeroAleatorio(index){
    return Math.floor(Math.random() * index + 1);
}

function jogo(){
    let numeroDeNumeros = parseInt(prompt("quantos numeros voce quer aleatorizar?"));
    let numeroSecreto = numeroAleatorio(numeroDeNumeros);

    let tentativas = 1;

    // wile cria um laço de repetição enquanto a condição seja verdadeira
    while (tentativas < 4) {
        let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
        // if é para verificar se o numero secreto é igual ao numero digitado
    
        if(numeroDigitado === numeroSecreto){
            alert('Parabéns, você acertou!');
            break;
            // else if , é criar uma nova condição apos a condição anterior ser falsa
        } else if(numeroDigitado > numeroSecreto){ 
            alert('Você digitou um número maior que o número secreto');
        } else {
            alert('Você digitou um número menor que o número secreto');
        }
        tentativas++;
        if(tentativas === 4){
            alert(`Suas tentativas acabaram`);
        } else if (tentativas <3){
            
            alert(`você ainda tem  ${4 - tentativas} tentativas`);   
        }else{
            alert(`você ainda tem  ${4 - tentativas} tentativa`);
        }
        
    }

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(tentativas < 4){
        alert(`Você acertou com ${tentativas} ${palavraTentativa}`)
    }
}

function clicou(){
    jogo();
}