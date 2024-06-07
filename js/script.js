// Controle do menu
function alternarMenu(){
    const nav = document.querySelector('nav')
    nav.classList.toggle('aberto')
}
// Fim controle do menu

// Sessão 4 - Público-Alvo
function checarResposta() {
    const resposta = document.querySelector('input[name="resposta"]:checked');
    const explicacao = document.getElementById('explicacao');
  
    if (resposta && resposta.value === "correto") {
      explicacao.textContent = "Está correto! A vida marinha é preservada e os nós, por consequência, consumimos os alimentos de maneira limpa e nutritiva, sem resíduos plásticos.";
      explicacao.style.color = "#0a7e91";
    } else {
      explicacao.textContent = "Incorreto. Tente novamente.";
      explicacao.style.color = "red";
    }
  }
// Fim Sessão 4 - Público-alvo

// Sessão 5 - Solução
const imgs = document.getElementById("img-carrossel");
const img = document.querySelectorAll("#img-carrossel img");

let idx = 0;

function carrossel(){
  idx++;

  if(idx >  img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 1250}px)`
}

setInterval(carrossel, 3500)
// Fim Sessão 5 - Solução 
  