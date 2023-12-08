console.log('Script carregado com sucesso.');
// Função para carregar o conteúdo das páginas de forma dinâmica
function carregarPagina(pagina) {
  fetch(`${pagina}.html`)
  .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar a página.');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('conteudo').innerHTML = data;
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}
