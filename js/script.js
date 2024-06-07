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
  