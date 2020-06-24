let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let somDoJogo;
let somPulo;
let personagem;
let inimigo;
let imagemGameOver;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png'); 
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario,3);
  personagem = new Personagem(imagemPersonagem, 0, 110, 135, 220, 270, "personagem");
  inimigo = new Inimigo(imagemInimigo, width - 52, 52, 52, 105, 103, "inimigo");
  frameRate(40);
  somDoJogo.loop();
}

function keyPressed(){
  if(key === 'ArrowUp') {
    personagem.pula();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();
  
  if(personagem.estaColidindo(inimigo)){
    noLoop();
    somDoJogo.stop();
    image(imagemGameOver, windowWidth/2 - 206, windowHeight/3, 412, 78);
  }
}