class Animacao{
 
  constructor(imagem, x1, largura, altura, larguraSprite, alturaSprite, tipo){
    //this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x1 = x1;
    this.y1 = height - this.altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
    this.tipo = tipo;
  }

    exibe(){
      let x = this.frameAtual % 4 * this.larguraSprite;
      let y = Math.floor(this.frameAtual / 4) * this.alturaSprite; //ideia no Discord
  
      image(this.imagem, this.x1, this.y1, this.largura, this.altura, x, y, this.larguraSprite, this.alturaSprite); 
      this.anima();
  }
  
  anima(){
    this.frameAtual++;
    if(this.tipo == "personagem"){
      if(this.frameAtual > 15){
        this.frameAtual = 0; 
      } 
    }else if(this.tipo == "inimigo"){
      if(this.frameAtual > 27){
        this.frameAtual =0; 
      }
    }
  } 
  
}