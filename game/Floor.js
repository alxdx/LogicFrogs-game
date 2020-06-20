function Floor(poscision,color){
	this.x=poscision;
	this.y=width/3;
	this.busy=true;

	this.show=()=>{
		fill(color);
		rect(this.x,this.y,80,20);
	}
}