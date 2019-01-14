var frog;
var FROGS=[];
var FLOOR=[];
var POSCI=[];
var n=1;
var contador=0;



function setup(){

	createCanvas(900, 900);
	//bg = loadImage("image/img.PNG");

	FLOOR.push(new Floor(0));
	for (var i = 1; i < 8; i++) {
		FLOOR.push(new Floor(n*height/12));
		n+=1.5 
	}
	FLOOR.push(new Floor(850));

	n=1;
	for (var i = 0; i < 7; i++) {
		POSCI.push(n*height/12+40);
		if(i<4)
			FROGS.push(new redFrog(POSCI[i],color(255),i));
		else 
			FROGS.push(new greenFrog(POSCI[i],color(255, 204, 0),i));
		n+=1.5 
	}
	FROGS[3].y=0;
	FROGS[3].x=0;	
	FROGS[3].col=0;
	FROGS[3].drawed=false;

	FLOOR[3].busy=false;


	FROGS[2].x=POSCI[(FROGS[2].id+1)];
	FLOOR[FROGS[2].id].busy= false;
	FLOOR[(FROGS[2].id+1)].busy= true;

}

function draw() {
  background(0);

	for (var i = FLOOR.length - 2; i >= 1; i--) {
		FLOOR[i].show();
	}
	for (var i = FROGS.length - 1; i >= 0; i--) {
		FROGS[i].show();
	}
}

function mousePressed(){

	for (var i = FROGS.length - 1; i >= 0; i--) {
		FROGS[i].clicked(mouseX,mouseY);
	}

	for (let i = POSCI.length - 2; i >= 1; i--) {
		for (let j = FROGS.length - 1; j >= 0; j--) {
			if(FROGS[j].x===POSCI[i]){
			console.log( FROGS[j].x, POSCI[i],FROGS[j].x==POSCI[i],FROGS[j].id,i);
			FROGS[j].id=i;
			console.log(FROGS[j].id,i);			
		}
		}
		
	}
	FLOOR.map(function(x,ind){console.log("piso "+ind+" "+x.busy)});
	POSCI.map(function(x,ind){console.log("POCISION "+ind+" "+x)});
	FROGS.map(function(x,ind){console.log("RANA "+ind+" "+x.x)});
}

function redFrog(pos,col,id){
 	this.x=pos;
 	this.y=280;
 	this.col=col;
 	this.drawed=true;
 	this.id=id;

 	this.show=()=>{
 		if(this.drawed===true)
			fill(col);
		else
			fill(0);
		ellipse(this.x,this.y,40,40);
	}
			
	this.clicked=(x,y)=>{

		let d=dist(x,y,this.x,this.y);
		
		if(d<20){
			console.log(this.id,FLOOR[this.id].busy);
			console.log("clicked "+(this.id));

			if(FLOOR[(this.id+1)].busy && !FLOOR[(this.id+2)].busy){
					console.log("movido a pos: "+ (this.id+2));
					this.x=POSCI[(this.id+2)];
					FLOOR[this.id].busy= false;
					FLOOR[(this.id+2)].busy= true;					
			}

			else if(FLOOR[(this.id+2)].busy && !FLOOR[(this.id+1)].busy){
					
					console.log("saltado a" +(this.id+1));				
					this.x=POSCI[(this.id+1)];
					FLOOR[this.id].busy= false;
					FLOOR[(this.id+1)].busy= true;			

			}
				console.log(this.id, FLOOR[(this.id)].busy);
			contador++;
			console.log("contador:"+contador);
		}

	}	
}

function greenFrog(pos,col,id){
 	this.x=pos;
 	this.y=280;
 	this.col=col;
 	this.drawed=true;
 	this.id=id;

 	this.show=()=>{
 		if(this.drawed===true)
			fill(col);
		else
			fill(0);
		ellipse(this.x,this.y,40,40);
	}
			
	this.clicked=(x,y)=>{

		let d=dist(x,y,this.x,this.y);
		
		if(d<20){
			console.log(this.id,FLOOR[this.id].busy);
			console.log("clicked "+(this.id));

			if(FLOOR[(this.id-1)].busy && !FLOOR[(this.id-2)].busy){
					console.log("movido adelante pos "+ (this.id-2));
					this.x=POSCI[this.id-2];
					FLOOR[this.id].busy= false;
					FLOOR[this.id-2].busy= true;					
			}

			else if(FLOOR[(this.id-2)].busy && !FLOOR[(this.id-1)].busy){
					
					console.log("saltado a " + (this.id-1));				
					this.x=POSCI[this.id-1];
					FLOOR[this.id].busy= false;
					FLOOR[this.id-1].busy= true;			

			}
				console.log(this.id,FLOOR[(this.id)].busy);
					contador++;
					console.log("contador:"+contador);

		}

	}	
}

function Floor(pos){
	this.x=pos;
	this.y=width/3;
	this.col=color(255);
	this.busy=true;
	this.show= ()=>{
		fill(this.col);
		rect(this.x,this.y,80,20);
	}
	this.getBusy=()=>{
		return this.busy
	}
}