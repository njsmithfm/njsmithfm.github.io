/*
----- Coding Tutorial by Patt Vira ----- 
Name: Interactive Floating Typography
Video Tutorial: https://youtu.be/-6v_AYyn49k

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/


let fonts = [];
let letters = [];

function preload() {
  fonts = loadFont("fonts/PublicSans-Regular.ttf");
}

function setup() {
  createCanvas(2000,12000);
  angleMode(DEGREES);
  
}

function draw() {
  background("#ffffff");
  for (let i=letters.length-5; i >= 5; i--) {
    letters[i].update();
    letters[i].display();
    
    if (letters[i].offScreen() == true) {
      letters.splice(i, 2.5);
    }
  }
  
}

function mouseDragged() {
  letters.push(new Letter(mouseX, mouseY));
}


