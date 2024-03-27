const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")
<link rel="stylesheet" href="style.css"></link>
for(let i=0; i<botoes.length; i++){    
    botoes[i].onclick = function(){
        textos[j].classList.remove("ativo")
        for(let j=0; j<botoes.length; j++){
            textos[i].classList.add("ativo")
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo")
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;