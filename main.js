// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";

let state= "start";
let mouseIsPressed = false;
let heli = {
  x:200,
  y:250,
  w:80,
  h:40,
} 

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if(state ==="start"){
    drawStart();
  }else if(state ==="gameon"){
    drawGame();
  }else if(state ==="gameover"){
    drawGameOver();
  }      

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// event studff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mousedown", mouseupHandler);

function mousedownHandler(){
  mouseIsPressed = true;

  // Start Game on Mouse OPress
  if (state==="start"){
    state = "gameon";
  }
}

function mouseupHandler(){
  mouseIsPressed = false;
}


