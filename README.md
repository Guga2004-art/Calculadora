# Calculadora
Calculadora feita em JavaScript, CSS e Html
Olá seja bem-vindo este e um projeto que fiz faz algum tempo
JavaScript:
linha 6 a 8 criei uma função que atualiza a tela
nas linhas 10 a 53 fiz com que algo aparecesse na tela ao clicar em um dos botoes
das linhas 56 a 97 criei funções de soma, subtração..., peguei as variáveis criadas anteriormente que estavam vazias e dei a elas um dado. Na linha 80 utilizei o switch case para selecionar qual era o botão puxando a operação feita nas functions anteriores
abaixo comecei a estilizar com o JavaScript para abrir a calculadora e fechar ela (linhas 125 a 161) puxando, por exemplo, variáveis criadas anteriormente como "botoes.style.width = "710px""
CSS:
Fiz o básico do CSS para deixar mais semelhante com oque projetei no Figma, vou explicar um de exemplo para o código inteiro:
/.quadrado{
width: 209px; //alterar o tamanho(horizontal)
height: 209px; alterar o tamanho(vertical)
background-color: grey; cor de fundo
position: absolute; ficar acima dos outros elementos podendo se mover livremente
left: 60%; movi um poco para a direita porque gostaria que ficassem atrás da calculadora
z-index: 0; utilizei para deixar ele atrás da calculadora em si
transform: rotate(45deg); rodei ele alguns graus
}/
