function media (){
let notas = []
let resultado = 0
let sequenciaNotas = [1,1,2,2]
for (let index = 0; index < 4; index++) {
notas.push(parseInt(prompt("entre com a nota")))
resultado = resultado+notas[index] * sequenciaNotas[index]
}
resultado = resultado /6
alert (`${resultado}`)    
}
function clicou (){
    media()
}
