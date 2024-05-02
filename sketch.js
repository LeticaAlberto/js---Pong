//variáveis da bolinha
let xB = 100;
let yB = 200;
let dB = 20;
let raio = dB / 2;

//variáveis do oponente
let xRo = 585;
let yRo = 150;

//velocidade da bolinha
let vXB = 6;
let vYB = 6;

//variáveis da raquete
let xR = 5;
let yR = 150;
let rC = 10;
let rA = 90;

//placar do jogo
let mP = 0;
let pP = 0;


//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
    trilha.loop();
}

function draw() {
    background(0);
    ShowB();
    MoveB();
    EdgeColision();
    ShowR(xRaquete, yRaquete);
    MoveR();
    ShowColisionR(xRaquete, yRaquete);
    ShowColisionR(xRaqueteOponente, yRaqueteOponente);
    ShowR(xRaqueteOponente, yRaqueteOponente);
    MoveOPR();
    ShowPoints() 
    Points();
}
function ShowB() {
  circle(xB, yB, dB);
}

function MoveB() {
  xB += vXB;
  yB += vYB;
}

function EdgeColision() {
  if (xB + raio > width || xB - raio < 0) {
    vXB *= -1;
  }
  if (yB + raio > height || yB - raio < 0) {
    vYB *= -1;
  }
}

function ShowR(x,y) {
    rect(x, y, rC, rA);
}

function MoveR() {
  if(keyIsDown(UP_ARROW)) {
    yR -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yR += 10;
  }
}

function ShowColisionR() {
  if (xB - raio < xR + rC && yB - raio < yR + rA && yB + raio > yR) {
    vXB *= -1;
     raquetada.play();
  }
}

function ShowColisionR(x, y) {
    colidiu = collideRectCircle(x, y, rC, rA, xB, yB, raio);
    if (colidiu){
        vXB *= -1;
        raquetada.play();
  }
}

function MoveOPR(){
    if (keyIsDown(87)){
        yRo -= 10;
    }
    if (keyIsDown(83)){
        yRo += 10;
    }
}


function ShowPoints(){
  stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);



}


function Points() {
    if (xB > 590) {
        mP += 1;
        ponto.play();
    }
    if (xB < 10) {
        pP += 1;
        ponto.play();
    }
}


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}