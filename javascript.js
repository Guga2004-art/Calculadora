let tela = document.getElementById("Screen");
let pnum = ""
let snum = ""
let operacao = ""

function atualizarTela(valor) {
    tela.innerHTML += valor
}

// Botões numéricos
document.getElementById("one").onclick = function (){
    atualizarTela("7")
}
document.getElementById("two").onclick = function (){
    atualizarTela("8")
}
document.getElementById("tre").onclick = function (){
    atualizarTela("9")
}
document.getElementById("qua").onclick = function (){
    atualizarTela("4")
}
document.getElementById("cin").onclick = function (){
    atualizarTela("5")
}
document.getElementById("sex").onclick = function (){
    atualizarTela("6")
}
document.getElementById("set").onclick = function (){
    atualizarTela("1")
}
document.getElementById("oit").onclick = function (){
    atualizarTela("2")
}
document.getElementById("nov").onclick = function (){
    atualizarTela("3");
}
document.getElementById("zer").onclick = function (){
    atualizarTela("0")
}
document.getElementById("pi").onclick = function (){
    atualizarTela("3.14")
}

// Limpar tela
document.getElementById("c").onclick = function (){
    tela.innerHTML = ""
}

// Ponto decimal
document.getElementById("ponto").onclick = function () {
    atualizarTela(".")
}

// Função de soma
document.getElementById("mais").onclick = function(){
    pnum = parseInt(tela.innerHTML); // Convertendo para inteiro
    operacao = "+"
    tela.innerHTML = ""
}

// Função de subtração
document.getElementById("menos").onclick = function(){
    pnum = parseInt(tela.innerHTML); // Convertendo para inteiro
    operacao = "-"
    tela.innerHTML = ""
}
document.getElementById("vezes").onclick = function(){
    pnum = parseFloat(tela.innerHTML); // Convertendo para float para permitir números decimais
    operacao = "*"
    tela.innerHTML = ""
}

document.getElementById("divisao").onclick = function(){
    pnum = parseFloat(tela.innerHTML); // Convertendo para float para permitir números decimais
    operacao = "/"
    tela.innerHTML = ""
}
// Função de igual
document.getElementById("equal").onclick = function(){
    snum = parseInt(tela.innerHTML); // Convertendo para inteiro
    let resultado;
    switch (operacao) {
        case "+":
            resultado = pnum + snum
            break;
        case "-":
            resultado = pnum - snum
            break;
            case "*":
            resultado = pnum * snum
            break;
            case "/":
                resultado = pnum / snum
        default:
            break;
    }
    tela.innerHTML = resultado.toString(); // Exibindo como string para garantir que seja um número inteiro
};
{
    let x2 = document.getElementById("x2")
    x2.onclick = function(){
        let currentNumber = parseFloat(tela.innerHTML);
    let squaredNumber = currentNumber * currentNumber; 
    tela.innerHTML = squaredNumber; 
    }
    let x3 = document.getElementById("x3")
    x3.onclick = function() {
        let currentNumber = parseFloat(tela.innerHTML)
     let cubo = currentNumber * currentNumber * currentNumber
     tela.innerHTML = cubo
    }
    // um elevado a outro
    let xy = document.getElementById("xy")
}


//soma
//if um mais outro
{

}
//abrir e fechar calculadora
{
let abrir = document.getElementById("but")
let fechar = document.getElementById("but2")
let base = document.getElementById("base1")
let botoes = document.getElementById("buttons")
let tela = document.getElementById("Screen")
let qua1 = document.getElementById("qua1")
let qua2 = document.getElementById("qua2")
let qua3 = document.getElementById("qua3")
//abrir
abrir.onclick = function(){
    base.style.width = "781px"
    tela.style.width = "710px"
    botoes.style.width = "710px"
    botoes.style.marginTop = "205px"
    abrir.style.marginRight = "-165px"
    qua1.style.marginLeft = "130px"
    qua2.style.marginLeft = "-150px"
    qua3.style.marginLeft = "180px"
    document.getElementById("buttonnone").style.display = "block"
    abrir.style.display = "none"
    document.getElementById("but2").style.display = "block"
}
//fechar
fechar.onclick = function() {

    fechar.style.display = "none"
    abrir.style.display = "block"
    base.style.width = "455px"
    tela.style.width = "382px"
    botoes.style.width = "382px"
    document.getElementById("buttonnone").style.display = "none"
    abrir.style.right = "670px"
    qua1.style.marginLeft = "0px"
    qua2.style.marginLeft = "0px"
    qua3.style.marginLeft = "0px"
}
}