var op = prompt("1. Desconto \n 2.Lucro");
var produto = prompt("Valor do produto");
var porcentagem = prompt("Porcentagem(sem o símbolo)");
switch(op){
    case '1':
      alert(produto * (1-(porcentagem/100)));break;
    case '2':
       alert(produto * (1+(porcentagem/100)));break;
    default:
          alert("opção inválida");
}