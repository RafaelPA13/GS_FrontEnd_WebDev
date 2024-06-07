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
let larguraImagem = 350;
let tempoIntervalo = 2500;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * larguraImagem}px)`;
}

function ajustarResponsividade() {
  if (window.innerWidth <= 950) {
    larguraImagem = 350;
  } else {
    larguraImagem = 1250;
  }
}

ajustarResponsividade();
window.addEventListener('resize', ajustarResponsividade);

let intervaloCarrossel = setInterval(carrossel, tempoIntervalo);
// Fim Sessão 5 - Solução 

// Sessão 6 - Cotidiano
function mostrarMsg() {
  const mensagemContainer = document.getElementById('msg');
  mensagemContainer.textContent = "O software te ajuda no dia a dia! Se na sua dieta alimentos provenientes do mar estão presentes, então essa solução é de extrema importância para sua vida, pois evita que os animais marítimos se alimentem de plásticos. Nós, então, não acabamos por consumir micro-plásticos ou outros resíduos que poluem nossa alimentação.";
}

// Fim Sessão 6 - Cotidiano