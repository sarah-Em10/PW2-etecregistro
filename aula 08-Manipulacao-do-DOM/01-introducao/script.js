//Capturando elementos com DOM
const titulo= window.document.getElementsByTagName("h1")[0];
titulo.innerText = "Fui alterado pelo JS =("
titulo.style.color = "mintcream";
const pagina = window.document.body;
pagina.style.backgroundColor = "rgb(255, 217, 245)";

const caixaMagica = window.document.getElementById("caixaMagica");

function entrada() {
    caixaMagica.innerText = "Oi!! :P"
    caixaMagica.style.backgroundColor = "rgb(152, 113, 224)"
}

caixaMagica.addEventListener("mouseenter",entrada)

function saida() {
     caixaMagica.innerText = "Tchau... :("
    caixaMagica.style.backgroundColor = "rgb(109, 61, 199)"
}
caixaMagica.addEventListener("mouseout",saida)

function clicar() {
    caixaMagica.innerText = "Clicou!! :D "
    caixaMagica.style.backgroundColor = "rgb(136, 138, 241)"
}
caixaMagica.addEventListener("click",clicar)