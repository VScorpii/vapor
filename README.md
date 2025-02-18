# vapor

Gerador de páginas estáticas conforme arquivos markdown organizados de forma hierarquica, suporta estilo customizado.

### Estrutura

- /config/ -> Arquivos JSON para o conteúdo de alguns elementos da página
  - /config/footer.json
  - /config/header.json
- /stylesheet/ -> Arquivos CSS
  - /stylesheet/text.css -> CSS das fontes e estilos de texto.
  - /stylesheet/footer.css -> CSS dos itens que deve ter no footer.
  - /stylesheet/header.css. -> CSS dos itens que deve ter no header.
  - /stylesheet/colors.css -> CSS com as cores.
  - /stylesheet/content.css -> CSS do conteúdo das páginas.
  - /stylesheet/media.css -> CSS para mídia.
  - /stylesheet/style.css -> Junção de todos os CSS.
- /pages/ -> Páginas.
  - /pages/main.md -> index de seu projeto.
- /pages/assets/ -> Mídia para o seu projeto.
- /static/ -> Página final em HTML e CSS estático.
- /vapor/ -> Arquivos JavaScript para o funcionamento inteiro do Vapor.
- /vapor/fileSystemWrapper.js -> Script para as operações envolvendo sistemas de arquivos.
- /vapor/pageBuilder.js -> Script para construir as páginas pelo markdown.
- /vapor/styleBuilder -> Script para criar o CSS da página baseado no conteudo de /config/

### Requisitos

1. NPM
2. Biblioteca marked (npm i marked)

### Como usar?

1. Configure as páginas que devem estar no header em /config/header.json e no footer em /config/footer.json
2. Configure as fontes que devem estar em /config/fonts.json
3. Configure as cores e estilo em /config/styles/colors.json
4. Modifique o main.md em /pages/
5. Coloque as imagens que irá usar em /assets/
6. Coloque os seus arquivos em /pages/, se necessário crie pastas novas e coloque arquivos markdown dentro.
7. node ./index.js

### Dicas

* Use imagens de resolução rasoável, nem muito alto nem muito baixo.
* Prefira mídias com compactação como JPEG

### To-do:

* [ ] Criação de páginas estáticas com footer e header
* [ ] Adição de cores pelo estilo
* [ ] Adição de fontes personalizadas
* [ ] Adição de modo noturno automático via CSS
* [ ] Adição de --verbose no script
* [ ] Funcionamento via NPX
