class Personagem extends Animacao{
  
  constructor(imagem, x1, largura, altura, larguraSprite, alturaSprite, tipo){
    super(imagem, x1, largura, altura, larguraSprite, alturaSprite, tipo);
    
    this.y1Inicial = height - this.altura;
    this.y1 = this.y1Inicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.up = 0;
  }
  
  pula(){
    this.up++; //ideia no Discord
    if (this.up < 3){
      this.velocidadeDoPulo = -30;
      somPulo.play();
    }
  }
  
  aplicaGravidade(){
    this.y1 = this.y1 + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y1 > this.y1Inicial){
      this.y1 = this.y1Inicial;
      this.up = 0;
    }
    
  }
  
  estaColidindo(inimigo){
    const precisao = 0.7;
    const colisao = collideRectRect(this.x1, this.y1, this.largura * precisao, this.altura * precisao, inimigo.x1, inimigo.y1, inimigo.largura * precisao, inimigo.altura * precisao);
    
    return colisao;
  }
  
}