# nav-system-template

## Arquivo `index.html`

Este é o arquivo principal que contém a estrutura básica do sistema de navegação. Ele consiste em:

- **Estrutura HTML:** Define a estrutura geral do documento, como `<head>`, `<body>`, etc.
- **Barra de Navegação (`#menu`):** Contém uma lista de links (`<a>`) que funcionam como os itens do menu de navegação.
- **Área de Conteúdo (`#conteudo`):** Esta é a área onde o conteúdo das páginas será carregado dinamicamente.

## Arquivo `styles.css`

Este arquivo contém os estilos CSS que são aplicados ao sistema de navegação. Nele, você pode:

- **Estilizar o Menu de Navegação (`#menu`):** Define a aparência do menu de navegação, como cor de fundo, cor do texto, margens, etc.
- **Estilizar a Área de Conteúdo (`#conteudo`):** Define o estilo da área onde o conteúdo das páginas será exibido, como margens, espaçamento, entre outros.

## Arquivo `scripts.js`

Neste arquivo JavaScript, a funcionalidade principal é carregar dinamicamente o conteúdo das páginas quando um link do menu de navegação é clicado. Ele realiza as seguintes operações:

- **Função `carregarPagina(pagina)`:** Utiliza o método `fetch` para obter o conteúdo da página desejada a partir de um arquivo HTML separado.
- **Manipulação do Conteúdo:** Após obter o conteúdo da página, a função atualiza dinamicamente a área `#conteudo` com o conteúdo obtido do arquivo HTML correspondente.

## Testando o Sistema

### Usando Python (Módulo HTTP)

1. **Certifique-se de ter o Python instalado:** Verifique se o Python está instalado no seu sistema. Se não estiver, baixe e instale a versão adequada para o seu sistema operacional no site oficial do Python (https://www.python.org/).

2. **Navegue até o diretório do seu projeto:** Abra o terminal ou prompt de comando e vá para o diretório onde está localizado o seu arquivo `index.html`.

3. **Inicie um servidor HTTP local:** Digite o seguinte comando no terminal para iniciar um servidor HTTP local usando Python (versão 2):

```bash
python -m SimpleHTTPServer
```

ou para Python 3:

```bash
python -m http.server
```

4. **Acesse o sistema no navegador:** Abra um navegador da web e vá para o endereço `http://localhost:8000` ou `http://127.0.0.1:8000` para visualizar o sistema de navegação dinâmica. Isso irá iniciar um servidor local na porta 8000 (você pode especificar outra porta, se desejar).

### Usando o Live Server do Visual Studio Code

Se você estiver usando o Visual Studio Code, pode utilizar a extensão Live Server para iniciar um servidor local facilmente:

1. **Instale a extensão Live Server:** No Visual Studio Code, vá até a aba de extensões (Ctrl+Shift+X) e pesquise por "Live Server". Instale a extensão oferecida pelo Ritwick Dey.

2. **Clique com o botão direito no arquivo `index.html`:** No explorador de arquivos do Visual Studio Code, clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server" para iniciar um servidor local.

3. **Visualize o sistema:** O Live Server abrirá automaticamente o seu navegador padrão e carregará o sistema de navegação dinâmica. Qualquer alteração feita nos arquivos será atualizada automaticamente no navegador.

Essas são formas simples de iniciar um servidor local para testar o sistema de navegação dinâmica. Escolha a opção que mais se adequa ao seu ambiente de desenvolvimento e comece a testar o sistema!
