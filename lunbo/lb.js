function Lbt(id){
	this.bannerArea=document.getElementById(id);
	this.i=0;
	this.createBaseDOM=function(data){
		
		var str = "";
		for(let i=0;i<data.length;i++){
			str+=`
			<li><a href='${data[i].url}'><img src="${data[i].imgsrc}"></a></li>
			`;
		}
		this.oUl =document.createElement("ul");
		this.oUl.innerHTML=str;
		this.aLi=this.oUl.children;
		this.len=this.aLi.length;
		this.bannerArea.appendChild(this.oUl);
		
	}
	this.timer=setInterval(()=>{
		this.move();
	},2000);
	this.move=function(){
			this.i++;
			for(let i=0;i<this.numsLi.length;i++){
				this.numsLi[i].className="";
			}
			if(this.i==this.len){
				this.i=0;
			}
			if(this.i==-1){
				this.i=this.len-1;
			}
			this.numsLi[this.i].className="hover";
			for (let j=0;j<this.aLi.length;j++) {
				startMove(this.aLi[j],{"opacity":0});
			}
			startMove(this.aLi[this.i],{"opacity":100});
	};
	this.createBtn=function(){
		let oDiv=document.createElement("div");
		oDiv.innerHTML="<span>&lt;</span><span>&gt;</span>";
		this.bannerArea.appendChild(oDiv);
		this.btns=oDiv.children;
		this.btns[0].onclick=()=>{
			this.i=this.i-2;
			 this.move();
		}
		this.btns[1].onclick=()=>{
			this.move();
		}
	}
	this.createNums=function(){
		var str = "";
		for(let i=0;i<this.len;i++){
			str+=`<li>${i+1}</li>`;
		}
		var oUl=document.createElement("ul");
		oUl.innerHTML=str;
		this.bannerArea.appendChild(oUl);
		this.numsLi=oUl.children;
		this.numsLi[0].className="hover";
		for(let i=0;i<this.numsLi.length;i++){
			  this.numsLi[i].onclick=()=>{
			  	this.i=i-1;
			  	this.move();
			  }
		}
	}
	this.bannerArea.onmouseover=()=>{
		clearInterval(this.timer);
	}
	this.bannerArea.onmouseout=()=>{
		this.timer=setInterval(()=>{
			this.move();
		},2000)
	}
}
