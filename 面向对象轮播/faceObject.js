function Banner(id){
	this.banner = document.getElementById(id);
	this.count = 0;
	this.setStyle = function(data){
		var str = "";
		for(let i = 0; i < data.length;i++){
			str += `<li>
					<a href="${data[i].url}">
						<img src="${data[i].imgsrc}"/>
					</a>
				</li>`
		}
		//图片
		this.oUl = document.createElement("ul");
		this.oUl.innerHTML = str;
		 
		this.aLi = this.oUl.children;
		this.len = this.aLi.length;
		
		this.banner.appendChild(this.oUl)
		this.oUl.style.width = this.aLi[0].offsetWidth * this.len +"px";
	 
	}
	this.timer = setInterval(()=>{ 
		this.move(); 
	},3000)
	this.move = function(){ 
			this.count++;
			if(this.count == this.len){
				this.oUl.style.left = 0;
				this.count = 1;
			}
			
			if(this.count == - 1){
				this.oUl.style.left = -this.aLi[0].offsetWidth * (this.len - 1) + "px";
				this.count = this.len - 2;
				 
			}
			for(let i = 0 ; i < this.numLi.length;i++){
				this.numLi[i].className = "";
			}
			if(this.count == this.len - 1){
				this.numLi[0].className = "hover"
			}else{
				this.numLi[this.count].className = "hover"
			}
			
			startMove(this.oUl,{left:-this.aLi[0].offsetWidth*this.count})      
	}
	
	
	//创建一个点击按钮
	this.setbutton = function(){
		var oDiv = document.createElement("div");
		oDiv.innerHTML = "<span>&lt</span><span>&gt</span>" ;
		this.banner.appendChild(oDiv);
		var aBtn = oDiv.children;
		
		aBtn[0].onclick = ()=>{
			this.count-=2;
			this.move();
			return false;
		}
		
		aBtn[1].onclick = () =>{			
			this.move();
			return false;
		}
		
	}
	
	//创建小角标
	this.setnums = function(){
		this.oUlnums = document.createElement("ul");
		var str = "";
		for(let i = 0 ; i < this.len-1 ; i++){
			str += `<li>${i + 1}</li>`
		}
		this.oUlnums.innerHTML = str;
		this.banner.appendChild(this.oUlnums);
	 	
	 	this.numLi = this.oUlnums.children; 
	 	this.numLi[0].className = "hover";
	 	
	 	for(let i = 0 ; i < this.numLi.length;i++){
	 		this.numLi[i].onclick = ()=>{
	 			this.count = i - 1;
	 			this.move();
	 			return false;
	 		}
	 	}
	}
	
	
	//鼠标移入 清除定时器  
	this.banner.onmouseover = () =>{
		
		clearInterval(this.timer);
	}
	//鼠标移除  开启定时器
	this.banner.onmouseout = () =>{
		this.timer = setInterval(()=>{
			this.move();
		},3000)
	}
}
