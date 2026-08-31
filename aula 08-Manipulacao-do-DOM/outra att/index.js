const titulo = document.getElementById("titulo");
titulo.innerText = "Título Alterado";
titulo.style.color = "blue";
const paragrafos = document.getElementsByClassName("paragrafo");
for (let i = 0; i < paragrafos.length; i++) {
  paragrafos[i].style.backgroundColor = "yellow";
}

const caixa = document.getElementById("caixa");
caixa.addEventListener("mouseover", function() {
  caixa.innerText = "Você passou o mouse aqui!";
  caixa.style.border = "3px solid red";
  caixa.style.fontSize = "20px";
});
const item2 = document.getElementById("item2");
item2.innerText = "Item alterado";
item2.style.color = "purple";
item2.style.fontWeight = "bold";
item2.style.backgroundColor = "lightgray";
const botao = document.getElementById("botao");
botao.addEventListener("click", function() {
  botao.innerText = "Você clicou!";
  botao.style.backgroundColor = "green";
  botao.style.color = "white";
});