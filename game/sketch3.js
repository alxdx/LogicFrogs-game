var FROGS=[];
var FLOOR=[];
var n=1;
let velocity={x: 0,y: 0};
let g=.98;
var click;
var ig,bg;
setup();
draw();

function setup(){
	let c= createCanvas(900,900);
	c.parent('game');

	ig=new img();
	bg=loadImage('img/pg.jpg'); 
	//carga los rectangulos
	for (var i = 0; i < 7; i++) {
		if(i<3)
			FLOOR.push(new Floor(n*height/12,'#49704A'));
		else if(i>3)
			FLOOR.push(new Floor(n*height/12,'#FBD19E'));			
		else if(i==3)
			FLOOR.push(new Floor(n*height/12,'#ffffff'));			

		n+=1.5 
	}
	//carga los circulos

	n=1;
	for (var i = 0; i < 7; i++) {
		if(i<3)
			FROGS.push(new redFrog(n*height/12+40,(i+1),i));
		else if (i>3)
			FROGS.push(new greenFrog(n*height/12+40,i,(i)));
		n+=1.5 
	}
	FLOOR[3].busy=false;
	click=new click();
}

function draw(){

	background('#001544');
	//noStroke();
	push();
	scale(1.3);
	image(bg, 0, 0);
	pop();
	//dibuja las ranas y las deja saltar si se clickean
	for (var i = FROGS.length-1; i >= 0; i--) {
		FROGS[i].show();
		if(FROGS[i].letBounce){
			FROGS[i].jump(velocity,g);
		}
	}
		//dibuja los rectangulos
	for (var i = FLOOR.length-1	; i >= 0; i--) {
		FLOOR[i].show();
	}
	push();
	//efecto del mouse
	click.wait(mouseX,mouseY);
	if(click.letShow){
		click.show();
	}
	pop()
	//si gana imprime letrero
	if(FROGS[0].on==4 && FROGS[1].on==5 && FROGS[2].on==6 && FROGS[3].on==0 && FROGS[4].on==1 && FROGS[5].on==2){
		ig.show();
		ig.deslizar();		
	}
}
//funcion para cuando el mouse se clickea
function mouseClicked(){
	//revisa las cordenadas del click
	for (var i = FROGS.length - 1; i >= 0; i--) {
		FROGS[i].clicked(mouseX,mouseY);
	}
}
function mousePressed(){
	click.letShow=true;
}


function click(){
	let siz=10;
	let h=0,o=100;
	let letShow=false;
	this.wait=(x,y)=>{
		noStroke();
		fill(h,o);
		ellipse(x,y,siz,siz);
	}
	this.show=()=>{
		h=255;
		siz+=30;
		o-=5
		if(siz>1000 || o==0){
			siz=0;
			o=100;
			this.letShow=false;	
		}
	}
}
function img(){
	dd= -480;
	img = loadImage('img/win.png'); 
	this.show=()=>{
		image(img, 100, dd);
	}
	this.deslizar=()=>{
		dd+=10;
		if(dd > -50)
			dd=0;
	}
}


