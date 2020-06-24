class Inimigo extends Animacao{
 
  constructor(imagem, x1, largura, altura, larguraSprite, alturaSprite, tipo){
    super(imagem, x1, largura, altura, larguraSprite, alturaSprite, tipo);
    
    this.velocidade = 5;
  }

  move(){
    this.x1 = this.x1 - this.velocidade; 
    
    if (this.x1 < -this.largura){
      this.x1 = width;
    }
    
  }
  
}