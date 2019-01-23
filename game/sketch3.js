var FROGS=[];
var FLOOR=[];
var n=1;
let velocity={x: 0,y: 0};
let g=.98

function setup(){
	createCanvas(900,900);
	for (var i = 0; i < 7; i++) {
		FLOOR.push(new Floor(n*height/12));
		n+=1.5 
	}
	n=1;
	for (var i = 0; i < 7; i++) {
		if(i<3)
			FROGS.push(new redFrog(n*height/12+40,(i+1),i));
		else if (i>3)
			FROGS.push(new greenFrog(n*height/12+40,i,(i)));
		n+=1.5 
	}
	FLOOR[3].busy=false;
	console.log(FROGS);
	
}
function draw(){
	background(0);
	for (var i = FROGS.length-1; i >= 0; i--) {
		FROGS[i].show();
		if(FROGS[i].letBounce){
			console.log("hiola")
			FROGS[i].jump(velocity,g);
		}
	}
	for (var i = FLOOR.length-1	; i >= 0; i--) {
		FLOOR[i].show();
	}
}
function mousePressed(){
	console.log(FROGS);
	for (var i = FROGS.length - 1; i >= 0; i--) {
		FROGS[i].clicked(mouseX,mouseY);
	}

}

function redFrog(poscision,id,fl){
	this.x=poscision;
	this.y=280;
	this.id=id;
	this.on=fl;
	this.show=()=>{
		fill(175,43,47)
		ellipse(this.x,this.y,40,40);
	}
	this.letJump=false;
	this.jump=(v,gv)=>{
		this.x+=v.x;
    	this.y-=v.y;
    	v.y-=gv;
    	console.log(this.y,"velocity:",v.y,"y:",this.y);
     	if(this.y>(280)){
      		console.log("stop");
      		v.y= 0;
      		gv=0;
      		v.x=0;
      		this.letBounce=false;
     	} 
	}
	this.clicked=(x,y)=>{
		let d=dist(x,y,this.x,this.y);
		if(d<20){
			if(this.id===3 && this.on===5){
				if(!FLOOR[6].busy){
					FLOOR[this.on].busy=false;
					FLOOR[this.on+1].busy=true;
					this.on+=1;
					velocity.x=4.58;
					velocity.y=11.2;
					g=.98;
					this.letBounce=true;
				}
			}
			else if(FLOOR[this.on+1].busy && !FLOOR[this.on+2].busy){
				FLOOR[this.on].busy=false;
				FLOOR[this.on+2].busy=true;
				this.on+=2;
				velocity.x=7.38;
				velocity.y=14.2;
				g=.98;
				this.letBounce=true;
			}
			else if(!FLOOR[this.on+1].busy && FLOOR[this.on+2].busy){
				FLOOR[this.on].busy=false;
				FLOOR[this.on+1].busy=true;
				this.on+=1;
				velocity.x=4.58;
				velocity.y=11.2;
				g=.98;
				this.letBounce=true;

			}			

		}

	}
}
function greenFrog(poscision,id,fl){
	this.x=poscision;
	this.y=280;
	this.id=id;
	this.on=fl;
	this.show=()=>{
		fill(47, 175, 43);
		ellipse(this.x,this.y,40,40);
	}
	this.letJump=false;
	this.jump=(v,gv)=>{
		this.x-=v.x;
    	this.y-=v.y;
    	v.y-=gv;
    	console.log(this.y,"velocity:",v.y,"y:",this.y);
     	if(this.y>280){
      		console.log("stop");
      		v.y= 0;
      		gv=0;
      		v.x=0;
      		this.letBounce=false;
     	} 
	}
	this.clicked=(x,y)=>{
		let d=dist(x,y,this.x,this.y);
		if(d<20){
			if(this.id===4 && this.on===1){
				if(!FLOOR[0].busy){
					FLOOR[this.on].busy=false;
					FLOOR[this.on-1].busy=true;
					this.on-=1;
					velocity.x= 4.58;
					velocity.y=11.2;
					g=.98;
					this.letBounce=true;
				}
			}
			else if(FLOOR[this.on-1].busy && !FLOOR[this.on-2].busy){
				FLOOR[this.on].busy=false;
				FLOOR[this.on-2].busy=true;
				this.on-=2;
				velocity.x= 7.38;
				velocity.y=14.2;
				g=.98;
				this.letBounce=true;
			}
			else if(!FLOOR[this.on-1].busy && FLOOR[this.on-2].busy){
				FLOOR[this.on].busy=false;
				FLOOR[this.on-1].busy=true;
				this.on-=1;
				velocity.x= 4.58;
				velocity.y=11.2;
				g=.98;
				this.letBounce=true;

			}		
		}
	}

}
function Floor(poscision){
	this.x=poscision;
	this.y=width/3;
	this.busy=true;

	this.show=()=>{
		fill(255);
		rect(this.x,this.y,80,20);
	}
}