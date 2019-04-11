function Slider(id){
	this.bannerArea  = document.getElementById(id);
	this.i = 0;
	this.createBaseDOM = function(data){
		//[{url:"点击图片可以跳转页面",imgsrc:"正常展示的图片的路径"},{},{}]
		//["1.jpg","2.jpg","3.jpg"]
		var str = "";
		for(let i = 0; i < data.length; i++){
			str += `
				<li><img src="${data[i].imgsrc}"></li>
			`;
		}
		 
		this.oUl = document.createElement("ul");
		this.oUl.innerHTML = str;
		this.aLi = this.oUl.children;
		this.len = this.aLi.length;
		this.bannerArea.appendChild(this.oUl);
		this.oUl.style.width = this.aLi[0].offsetWidth * this.len+"px";
	}
	this.timer = setInterval(()=>{
		this.move();
	},3000);
	this.move = function(){
		this.i++;  
		//123123
		if(this.i==this.len){	
			this.i=0;
		}
		//321321
		if(this.i == -1){	
			this.i = this.len - 1;
		}
		
		//角标随着图片轮播自动点亮
			for(let i = 0; i < this.numsLi.length; i++){
				this.numsLi[i].className = "";
			}
			//当前的numsLi添加一的萨克即
			this.numsLi[this.i].className="hover";
		
			for (let j=0;j<this.aLi.length;j++) {
				startMove(this.aLi[j],{"opacity":0});
			}
			startMove(this.aLi[this.i],{"opacity":1});

	
	//添加左右按钮
	this.createButton = function(){
		let oDiv = document.createElement("div");
		oDiv.innerHTML = "<span>&lt;</span><span>&gt;</span>";
		this.bannerArea.appendChild(oDiv);
		
		this.btns = oDiv.children;
		
		this.btns[0].onclick = ()=>{
			this.i = this.i - 2; 
			this.move();
		}
		
		this.btns[1].onclick = ()=>{
			this.move();
		}

	}
	//添加小角标
	this.createNums = function(){
		var str = "";
		for(let i = 0; i < this.len; i++){
			str += `<li>${i+1}</li>`;
		}
		var oUl = document.createElement("ul");
		oUl.innerHTML = str;
		this.bannerArea.appendChild(oUl);
		
		this.numsLi = oUl.children;
		this.numsLi[0].className = "hover";
		
		for(let i = 0 ; i < this.numsLi.length; i++){
			this.numsLi[i].onclick = ()=>{
				this.i = i-1;
				this.move();
			}
		}
		
		
		
		
	}
	
	//鼠标移入移出清除开启定时器
	this.bannerArea.onmouseover = ()=>{
		clearInterval(this.timer);
	}
	this.bannerArea.onmouseout = ()=>{
		this.timer = setInterval(()=>{
			this.move();
		},3000);
		
	}
	
	
}}
