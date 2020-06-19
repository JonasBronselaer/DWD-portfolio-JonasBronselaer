let controlBlock;
let opponentBlock;
let ball;
let personalScore;
let opponentScore;
let ballreset = new Audio('../sounds/ballreset.mp3');
let hit = new Audio('../sounds/hit.mp3');

//setup functie maakt basis canvas
function setup() {
  createCanvas(700, 400); // width, height
  controlBlock = new Block(26);
  opponentBlock = new Block(width - 48);
  ball = new Ball();
  opponentScore = new Score(width / 2 + 25)
  personalScore = new Score(width / 2 - 75)


  strokeWeight(5);
  stroke(100);   
}
 
//p5.js teken functie voor achtergrond en blokken
function draw() {
  background(82, 157, 242);

  // middelijn
  line(width/2, 0, width/2, 44.444);
  line(width/2, 88.888, width/2, 133.33200);
  line(width/2, 177.776, width/2, 222.22);
  line(width/2, 266.664, width/2, 311.108);
  line(width/2, 355.552, width/2, height);

  // score oproepen
  personalScore.show();
  opponentScore.show();

  // mp3 file afspele bij bal reset
  if(ball.x < ball.z / 2)
  {
    opponentScore.currentScore = opponentScore.currentScore + 1
    ballreset.play();
  }
  if(ball.x > width - ball.z / 2)
  {
    personalScore.currentScore = personalScore.currentScore + 1
    ballreset.play();
  }

  // blokken tonnen met opgegeven eigenschappen
  controlBlock.show();
  opponentBlock.show();

  // beweging blokken 
  controlBlock.updateStatus();
  opponentBlock.updateStatus();

  //muis beweging functie voor speler and beweging functie voor AI
  MouseMove();
  MoveOpponent();

  // bal oproepen en bewegen
  ball.move();
  ball.show();

  //check of blokken geraakt worden
  ball.HitPlayer(controlBlock); 
  ball.HitAi(opponentBlock); 

}

//specifieke p5 functies -> normale keypress functie werkt niet
function keyPressed(e) {
    if (e.keyCode == 38) {
        controlBlock.ascend = true;
    } else if (e.keyCode == 40) {
        controlBlock.descend = true;
    }
}
 
function keyReleased(e) {
    if (e.keyCode == 38) {
        controlBlock.ascend = false;
    } else if (e.keyCode == 40) {
        controlBlock.descend = false;
    }
}

// TODO: tegenstander laten bewegen
function MoveOpponent() {

  // berekent midden van tegenstander
  let blockMiddle = opponentBlock.y + opponentBlock.height / 2;
     
  // indien Y coordinaat van midden groter is beweeg omhoog en omgekeerd
  if (blockMiddle > ball.y) {
    opponentBlock.ascend = true;
    opponentBlock.descend = false;
  } else {
    opponentBlock.descend = true;
    opponentBlock.ascend = false;
 
  }
}

// functie voor beweging van muis
function MouseMove() {
  if(mouseY > 0){
    controlBlock.y = mouseY;
  }
}

// optie om terug te gaan naar keyboard controls
function keyTyped() {
  if (key === 'a') {
    mouseY = 0
  }
}