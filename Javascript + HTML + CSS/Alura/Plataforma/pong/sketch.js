//Variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 24;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametro/2

let colidiu = false;

//Variaveis raquete
let xRaquete = 5
let yRaquete = 150
let larguraRaquete = 10
let alturaRaquete = 80

//Variaveis do oponente
let xOponente = 585;
let yOponente = 150;
let velocidadeYOponente;

//Variaveis do Placar
let meusPontos = 0
let pontosOponente = 0

//Variaveis do Audio
let raquetada;
let trilha;
let ponto;

function preload(){
  
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function desenhoBolinha(){
  
  
  circle (xBolinha,yBolinha,diametro);
  
}

function desenhaRaquete(x,y){
  
    rect(x,y,larguraRaquete,alturaRaquete);

}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function mudaDirecao(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    
      velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0 ){
      
    velocidadeYBolinha *= -1;
  }
  
}

function movimentaRaquete(){
  
   if(keyIsDown(UP_ARROW)){
       yRaquete -= 10;
   } 
   if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
   } 
}

function movimentaOponente(){
  
   velocidadeYOponente = yBolinha  - yOponente - larguraRaquete / 2 - 30;
   yOponente += velocidadeYOponente;
  
  
}

function verificaColisao(x,y){
  
  if(xBolinha - raio < x + larguraRaquete && yBolinha - raio < y + alturaRaquete && yBolinha + raio > y){
    
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoBiblioteca(x,y){
  colidiu =
  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  
  if(colidiu){
    
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
}

function incluiPlacar(){
  
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente, 470, 26);
  
}

function marcaPonto(){
  
  if(xBolinha < raio){
    
    pontosOponente++
    ponto.play();
    
  }
  
  if(xBolinha > 600-raio){
    
    meusPontos++
    ponto.play();
  }
}

function draw() {
  background(0);
  
  desenhoBolinha();
  movimentaBolinha();
  mudaDirecao();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xOponente, yOponente);
  movimentaRaquete();
  movimentaOponente();
  //verificaColisao(xRaquete, yRaquete);
  //verificaColisao(xOponente, yOponente);
  colisaoBiblioteca(xRaquete, yRaquete);
  colisaoBiblioteca(xOponente, yOponente);
  incluiPlacar();
  marcaPonto();
  
 
  
  
}