var ball;
function setup(){
  createCanvas(900,600);
  ball= new Ball();
}

function draw(){
 background(0);
 ball.show();
 //ball.clicked();
}

function mousePressed(){
  ball.clicked();

}
function Ball(){
  this.x=100;
  this.y=400;
  this.velocity={
    x: .5,
    y: .5
  }
  this.show=()=>{
    ellipse(this.x,this.y,20,20);
  }
  this.clicked=()=>{
    console.log("clicked");
    for (var i = 0; i < 20; i++) {
    this.x+=this.velocity.x;
    this.y+=this.velocity.y;
      
    }

    this.show();
  }
}