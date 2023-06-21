class Menu {
  constructor() {
    this.menuElement = document.querySelector('.testeDialog');
    this.aparecerElement = document.querySelector('#meubotao');
    this.desaparecerElement = document.querySelector('.btnSair');
    this.aparecerElement.addEventListener('click', this.aparecer.bind(this));
    this.desaparecerElement.addEventListener('click', this.desaparecer.bind(this));
  }

  aparecer() {
    this.menuElement.style.display = 'block';
  }

  desaparecer() {
    this.menuElement.style.display = 'none';
  }
}

class Postagem {
  constructor(titulo, descricao, imagem, data) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.imagem = imagem;
    this.data = data;
  }
}

class Publicacoes {
  constructor() {
    this.conteudoElement = document.querySelector('.container-posts');
    this.btnAdd = document.querySelector('.btnAdd');
    this.addTilt = document.querySelector('.addTilt');
    this.addDesc = document.querySelector('.addDesc');
    this.addImg = document.querySelector('.addImg');
    this.addData = document.querySelector('.addData');
    this.caixaTexto = document.querySelector("#txt");
    this.pesquisar = document.querySelector("#pesquisa");
    this.publicacoes = [];

    this.btnAdd.addEventListener('click', this.adicionar.bind(this));
    this.pesquisar.addEventListener('click', this.pesquisarPublicacao.bind(this));
    window.addEventListener("load", this.preencherPublicacoes.bind(this));
  }

  adicionar() {
    const titulo = this.addTilt.value;
    const descricao = this.addDesc.value;
    const imagem = this.addImg.value;
    const data = this.addData.value;

    if (titulo === '' || descricao === '' || imagem === '' || data === '') {
      alert('Não é possível criar publicação, existem campos vazios.');
      return;
    }

    this.addTilt.value = '';
    this.addDesc.value = '';
    this.addImg.value = '';
    this.addData.value = '';

    const novaPostagem = new Postagem(titulo, descricao, imagem, data);
    this.publicacoes.push(novaPostagem);
    localStorage.setItem("publicacoes", JSON.stringify(this.publicacoes));

    this.criarElementoPost(novaPostagem);
  }
}

const menu = new Menu();
const publicacoes = new Publicacoes();
