# linkeBot🤖
![cover](./cover.png)
![gif](./gif.gif)

![](https://img.shields.io/badge/linkeBot-Node-green) ![](https://img.shields.io/badge/Scrapper-Pupperteer-blue)

### 🎛️ Dependencias
 
- [Puppeteer](https://pptr.dev/) - Scrapper

 
### 🎯 Objetivo
Estudando web scrapping surgiu a ideia de criar um bot que faça uma busca por vagas de determinado ramo no LinkedIn.
 
 
### ⌨️ Como foi feito?

A ideia inicial era varrer uma URL especifica e capturar todos os elementos HTML que estivessem uma condição. Essa condição foi que o bot retornasse elementos que fossem `<a>` que estivessem dentro de `<div>`, porém essa primeira busca trouxe muitos elementos que não faziam sentido como:
- Areas de login
- Botões de navegação

E para corrigir isso foi criado um filtro nos elementos retornado que tivessem palavras específicas como *'dev', 'front-end'* e etc.

### 🔎 Como utilizar

- `git clone` no link do repositório
- Instalado em sua máquina você precisará instalar as dependencias do projeto.
- `npm install`
- Execute o arquivo `main.js` direto no node ou no terminal.
- Após a primeira execução, abra o arquivo `index.html`


 
### 🔧 Próximos passos
 
- Adicionar paginação
- Mais condições de filtros


### 🎨 Autor

[LinkedIn](https://www.linkedin.com/in/fabiodeandrad/) 
[Medium](https://medium.com/@fabioscript)
[E-mail](fabiodeandradecontato@gmail.com)
