var ball;
let velocity={x: 4,y: 20};
let g=.98;
function setup(){
  createCanvas(900,600);
  ball= new Ball();
}

function draw(){

 background(0);
 ball.show();

 if(ball.letBounce)
  ball.jump(velocity,g);
  console.log(velocity.x,velocity.y,g);
 
}

function mousePressed(){
  velocity.x=4;
  velocity.y=20;
  g=.98
  ball.letBounce=true;
}

function Ball(){
  this.x=100;
  this.y=400;
  this.show=()=>{
    ellipse(this.x,this.y,40,40);
  }

  this.letBounce=false;
  this.jump=(v,gv)=>{
    this.x+=v.x;
    this.y-=v.y;
    v.y-=gv;
    console.log(this.y,"velocity:",v.y,"y:",this.y);
     if(this.y>384){
      console.log("stop");
      v.y= 0;
      gv=0;
      v.x=0;
      this.letBounce=false;
     }   
  }

}