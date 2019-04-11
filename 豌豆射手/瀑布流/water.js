function Water(id){
	this.wrap = document.getElementById(id);
	console.log(this.wrap);
	this.items = this.wrap.children;
	
	console.log(this.items)
	var cw = document.documentElement.clientWidth;
	this.ch = document.documentElement.clientHeight;
	this.perWidth = this.items[0].offsetWidth;
	this.cols = Math.floor(cw/perWifth)	
	
}