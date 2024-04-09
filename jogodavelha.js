let tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let jogadorAtual = 'x';

function jogar(linha, coluna) {
    if (tabuleiro[linha][coluna] === '') {

        tabuleiro[linha][coluna] = jogadorAtual;
        jogadorAtual = jogadorAtual === 'x' ? '0' : 'x';
    }
    else {
        console.log('Esta posiçãoja está ocupada. tente outra.')
    }
    console.table(tabuleiro);

}

for (let index = 0; index < 9; index++) {
    
    let x = parseInt(prompt("qual linha vc quer colocar?"))
    let y = parseInt(prompt("qual coluna vc quer colocar?"))
    jogar(x, y);
    vencerdor(tabuleiro)
    let ganhou = vencerdor(tabuleiro)
    if (ganhou == 1){
        break
    }

}
function vencerdor(velha) {
    

for (let i = 0; i < 3; i++) {
 
    if(velha[i][0]=='x' && velha[i][1]=='x' && velha[i][2]=='x' ){  
        alert('o x ganhou')
        index=9
        i=3
        return 1
    }else if(velha[0][i]=='x' && velha[1][i]=='x' && velha[2][i]=='x' ){
        alert('o x ganhou')
        index=9
        i=3
        return 1
    }else if(velha[0][0]=='x' && velha[1][1]=='x' && velha[2][2]=='x' ){
        alert('o x ganhou')
        index=9
        i=3
        return 1
    }else if(velha[0][2]=='x' && velha[1][1]=='x' && velha[2][0]=='x' ){
        alert('o x ganhou')
        index=9
        i=3
        return 1
    }
}for (let j = 0; j < 3; j++) {

    if(velha[j][0]=='0' && velha[j][1]=='0' && velha[j][2]=='0' ){
        alert('o O ganhou')
        index=9
        j=3
        return 1
    }else if(velha[0][j]=='0' && velha[1][j]=='0' && velha[2][j]=='0' ){
        alert('o O ganhou')
        index=9
        j=3
        return 1
    }else if(velha[0][0]=='0' && velha[1][1]=='0' && velha[2][2]=='0' ){
        alert('o O ganhou')
        index=9
        j=3
        return 1
    }else if(velha[0][2]=='0' && velha[1][1]=='0' && velha[2][0]=='0' ){
        alert('o o ganhou')
        index=9
        j=3
        return 1
    }
}

}
