//Creating the array of swimmers
let swimmers = [];


function setup() {
  createCanvas(800, 600);
  frameRate (60);


  //Creating the fish objects, and
  //defining how many fish we'd like
  for (let i = 0; i < random (10, 200); i++){
    swimmers[i] = new fish (random(0, 800), random (0, 500));
  }

}




function draw() {
background (50, 100, 200);


//Drawing the sand bottom
noStroke();
fill (220, 210, 182);
ellipse (0, 600, 200, 100);
ellipse (100, 600, 900, 100);
ellipse (550, 600, 600, 100);


//Drawing the seaweed
push();
noStroke();
fill (111, 123, 12);
ellipse (400, 500, 50, 150);
rotate (PI/4);
ellipse (600, -15, 50, 150);
rotate (-PI/3);
ellipse (280, 460, 50, 150);
pop();



//Making my swimmers appear and move!
  for (let i = 0; i < swimmers.length; i++) {
    swimmers[i].move();
    swimmers[i].show();
  }

}





// Creating the fish class
class fish{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

//Making the fish move
  move () {
    this.x = this.x - random (0,10);
    this.y = this.y + random (-1,1);

//Using If statements to make sure the
//fish don't just leave the screen
    if (this.x <= 0){
      this.x = 800;
    }

    if (this.y <= 0){
      this.y = 600;
    }

    if (this.y >= 600){
      this.y = 0;
    }
  }

//Actually creating the fish, conceptualized
//here as an ellipse and a triangle together
  show (){
    fill (random(255), random (255), random(255));
    noStroke();
    ellipse(this.x, this.y, 30, 20);
    triangle(this.x, this.y, this.x+20, this.y+10, this.x+20, this.y-10);
  }
}


function mousePressed(){
  console.log(mouseX, mouseY);
}
