function greenFrog(poscision,id,fl){
	this.x=poscision;
	this.y=280;
	this.id=id;
	this.on=fl;
	this.show=()=>{
		fill('#74dc76');
		ellipse(this.x,this.y,40,40);
	}
	this.letJump=false;
	this.jump=(v,gv)=>{
		this.x-=v.x;
    	this.y-=v.y;
    	v.y-=gv;
    	//console.log(this.y,"velocity:",v.y,"y:",this.y);
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
		//console.log(this.id, "esta sobre: ",this.on);
	}

}