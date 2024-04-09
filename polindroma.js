let palavra = prompt ('insira uma palavra');
function inverter (x) {
    return x.split('').reverse().join('');

}
let palavrainvertida = inverter (palavra)
alert (`${palavra==palavrainvertida}`)
if (palavra==palavrainvertida){
    alert ('essa palavra é polindrome')
}