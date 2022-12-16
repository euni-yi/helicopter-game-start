// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables(once)
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";

let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";

let propelller = document.createElement("audio");
propelller.src = "sound/propeller.wav"

let mouseIsPressed = false;

// global variables (reset)
let state;
let heli;
let wall1, wall2, wall3;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if(state ==="start"){
    drawStart();
  }else if(state ==="gameon"){
    runGame();
  }else if(state ==="gameover"){
    drawGameOver();
  }      

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// event studff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler(){
  mouseIsPressed = true;

  // play propeller sound
  propelller.currentTime=0;
  propelller.play();

  // Start Game on Mouse OPress
  if (state==="start"){
    state = "gameon";
  }
}

function mouseupHandler(){
  mouseIsPressed = false;
  propelller.pause();
}


