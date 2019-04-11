function Banner(id){
	this.banner = document.getElementById(id);
	this.i = 0;
	//显示图片
	this.setstyle = function(data){
		let str = "";
		for(let i = 0; i < data.length;i++){
			str += `<li><img src="${data[i].imgsrc}"/></li>`;
		}
		this.oUl = document.createElement("ul")
		this.oUl.innerHTML = str;
		this.aLi = this.oUl.children;
		this.len = this.aLi.length;
		this.banner.appendChild(this.oUl);
	}
	
	//定时器
	this.timer = setInterval(()=>{
		this.setmove();
	},2000)
	
	//move封装
	this.setmove = function(){ 
		this.i++;
		for(let i = 0 ; i < this.oBtn.length; i++){
			this.oBtn[i].className = "";
		}
		
		if(this.i == this.len){
			this.i = 0;
		}  
		
		if(this.i == -1){
			this.i = this.len - 1;
		}
		
		this.oBtn[this.i].className = "hover";
		 
		for(let i = 0; i < this.len;i++){ 
			startMove(this.aLi[i].children[0],{opacity:0})
		}
	 	startMove(this.aLi[this.i].children[0],{opacity:100})
	}
	
	//创建btn  
	this.setbutton = function(){
		let oDiv = document.createElement("div");
		oDiv.innerHTML = "<span>&lt</span><span>&gt</span>";
		this.banner.appendChild(oDiv);
		
		this.aSpan = oDiv.children; 
		this.aSpan[0].onclick = ()=>{
			this.i -= 2;
			this.setmove();
			
		}
		this.aSpan[1].onclick = ()=>{
			this.setmove();
			
		} 	
	}
	
	
	//创建角标
	this.setnums = function(){
		var str = ""; 
		for(let i = 0; i < this.len;i++){
			str += `<li>${i + 1}</li>`
		}
		var oUl = document.createElement("ul");
		oUl.innerHTML = str;
		
		this.banner.appendChild(oUl);
		
		this.oBtn = oUl.children; 
		this.oBtn[0].className = "hover"
		for(let i = 0 ; i < this.oBtn.length;i++){
			this.oBtn[i].onclick = () => {
				this.i = i - 1;
				this.setmove();
				
			}
		}
		
		
	}
	
	
	
	this.banner.onmouseover = ()=>{
		console.log("aaa")
		clearInterval(this.timer)
	}
	this.banner.onmouseout = ()=>{
		this.timer = setInterval(()=>{
			this.setmove();
		},2000)
	}
	
}
