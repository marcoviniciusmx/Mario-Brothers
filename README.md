<h1 align="center">Mario Brothers</h1>

<p align="center">
  Landing page temática desenvolvida para apresentar os serviços fictícios dos encanadores Mario e Luigi, com foco em divulgação, contato rápido e experiência visual marcante.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-layout-and-design-decisions">Layout e decisões de design</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Como executar</a>
</p>

<br>

<img src="./assets/Mockup - Mario Brothers.png" alt="Mockup Mario Brothers" width="100%">
---

## 🏠 About the project

Este projeto foi desenvolvido como uma landing page temática inspirada no universo de **Mario Bros**, adaptando os personagens Mario e Luigi para uma proposta fictícia de prestação de serviços de encanamento.

A proposta do site é apresentar os personagens de forma divertida, criar uma comunicação visual forte e facilitar o contato do visitante por meio de um botão de WhatsApp e de um formulário de orçamento.

O projeto foi construído com foco em prática de **HTML**, **CSS** e **JavaScript**, trabalhando estruturação de layout, manipulação do DOM, abertura e fechamento de modal e integração com serviço externo de formulário.

---

## 🧰 Features

- Hero section com vídeo em background
- Máscara escura sobre o vídeo para melhorar contraste
- Header com navegação visual
- Área principal com apresentação dos serviços
- Botão de chamada para ação
- Link flutuante para WhatsApp
- Formulário modal de contato
- Abertura e fechamento do formulário com JavaScript
- Máscara de fundo ao abrir o formulário
- Integração com Formcarry para envio dos dados
- Hover effects em links, botões e ícones
- Layout temático com identidade visual inspirada no universo Mario

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript
- Manipulação do DOM
- Formcarry
- Integração com WhatsApp via link direto

---

## 👷 Project structure

A estrutura principal do projeto está organizada da seguinte forma:

- `index.html`
- `styles.css`
- `scripts.js`
- `assets/` para imagens, ícones e vídeo

### Principais blocos da página

- Header
- Vídeo de fundo
- Conteúdo principal
- Botão de CTA
- Link de WhatsApp
- Formulário modal

---

## 🎨 Layout and design decisions

O projeto utiliza uma identidade visual forte e reconhecível, inspirada no universo dos jogos do Mario, com predominância de vermelho, branco, preto e elementos visuais dos personagens.

Alguns pontos de destaque no layout:

- vídeo em tela cheia para gerar impacto visual
- uso de overlay escuro para reforçar legibilidade
- CTA em destaque para conversão
- personagem em evidência na composição visual
- formulário modal para manter foco no contato
- botão flutuante de WhatsApp para acesso rápido
- linguagem visual divertida, direta e fácil de entender

Essa abordagem funciona bem para um projeto de portfólio porque chama atenção rápido e demonstra criatividade na adaptação de tema para uma landing page funcional.

---

## ⚙️ Functional rules

A aplicação segue uma lógica simples:

- ao clicar em **Entre em Contato**, o formulário modal é exibido
- ao clicar no **X** ou na máscara escura, o formulário é fechado
- o formulário envia os dados para um endpoint do Formcarry
- o botão flutuante direciona o usuário para o WhatsApp com uma mensagem pré-definida

---

## 🔰 Getting Started

### Prerequisites

Antes de começar, você vai precisar ter instalado:

- Git
- Um navegador de sua preferência

---

### Clone the repository

```bash id="twkzaj"
git clone https://github.com/seu-usuario/mario-brothers.git
