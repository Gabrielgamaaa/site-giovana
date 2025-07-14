// Interatividade: mostrar/ocultar cada parágrafo ao clicar no título
document.querySelectorAll('.motivo').forEach(item => {
  item.addEventListener('click', () => {
    const paragrafo = item.querySelector('p');
    paragrafo.style.display = paragrafo.style.display === 'block' ? 'none' : 'block';
  });
});

// Botão final que revela mensagem divertida
function mostrarMensagem() {
  const mensagem = document.getElementById('mensagem-final');
  mensagem.style.display = 'block';
}