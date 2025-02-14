# vapor

Gerador de páginas estáticas conforme arquivos markdown organizados de forma hierarquica, suporta estilo customizado.

### Estrutura

- /config/ -> configuração
- /config/styles/ -> estilo
- /pages/ -> páginas
- /pages/main.md -> index de seu projeto
- /assets/ -> Mídia para o seu projeto
- /static/ -> Página final em HTML e CSS estático.

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
7. npx run vapor.

### Dicas

* Use imagens de resolução rasoável, nem muito alto nem muito baixo.
* Prefira mídias com compactação como JPEG
